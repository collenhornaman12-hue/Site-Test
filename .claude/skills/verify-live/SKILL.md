---
name: verify-live
description: Verify that a change actually landed on the live production site after a push to main. Use after deploying a fix, when the user asks "is it live yet", "did the deploy work", or "check the site", and proactively after any /ship to main that changes user-visible pages, images, or API routes.
argument-hint: [what to check, e.g. "hero image" or "/api/admin/confirm"]
---

# Verify-live: confirm the deploy actually worked

Pushing to `main` only starts a Cloudflare Pages build. Broken deploys in this
project have historically been discovered by the user (missing images from
spaces in filenames, 502s from route ordering) — this skill catches them first.

## Production URL

Ask the user for the production URL the first time this skill runs, then record
it in this file (edit the line below and ship the update) so future sessions
don't have to ask.

- PRODUCTION_URL: (not yet recorded)

## Steps

1. **Identify what changed** from the just-pushed commit (`git show --stat HEAD`)
   and derive concrete checks:
   - Image/asset path changed → `curl -sI "$URL<asset-path>"` must return
     `200` and an image `content-type`. A `404` here is exactly the
     spaces-in-filename class of bug.
   - Page/component changed → `curl -s "$URL<page>"` and grep the HTML for a
     marker string unique to the new version (new alt text, new heading, new
     src path). Checking for the OLD marker's absence is as important as the
     new one's presence — both present means you're seeing a cached page.
   - API route changed → hit it the way described under "API routes" below.
2. **Wait out the build.** Cloudflare builds take ~1–3 minutes. If the first
   check still shows the old content, poll every ~30s for up to 5 minutes
   before declaring failure. Add a cache-buster (`?v=<commit-sha>`) to asset
   URLs so you're not fooled by CDN cache.
3. **Report** pass/fail per check, with the exact URL tested and what was
   found. On failure, say which class it is: build not finished, build failed,
   404 (path/filename mismatch), or old content (cache or wrong branch pushed).

## API routes — safe probing only

- Admin routes require the `admin_session` cookie; without it a 401/redirect is
  the EXPECTED healthy response — treat auth rejection as "route is alive",
  not failure.
- NEVER send a real `POST` to `/api/admin/confirm` or `/api/admin/reject` with
  a real booking id — that confirms/cancels an actual patient appointment.
  Probe with a missing/fake body and expect the 400 "Missing id or
  cal_booking_uid" response; a 400 proves the handler runs (no 502).
- Same for the Cal.com webhook and intake form endpoints: do not insert test
  rows into `patient_intake` from this skill.

## When a check fails

Do not immediately push another guess. State the failure class, gather the
evidence (response status, body excerpt), and only then propose the fix —
if the fix involves a failing route, hand off to `/debug-route`.
