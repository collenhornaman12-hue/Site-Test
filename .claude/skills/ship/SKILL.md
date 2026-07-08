---
name: ship
description: Push local changes to GitHub and hard-sync the local repo. Use for any "commit", "push", "deploy this", or "get this live" request, and whenever the stop hook reports uncommitted or unpushed changes. Required here because local `git push` always fails (403 proxy) — pushes must go through the GitHub MCP push_files tool instead.
---

# Ship: push changes and re-sync local

Local `git push` is always rejected in this environment (403 from the git proxy).
Every push goes through `mcp__github__push_files`, which commits directly on the
remote — so afterwards the LOCAL repo is stale and must be hard-reset to match,
or the stop hook flags "uncommitted changes" and wastes a turn.

## Target

- Repo: `collenhornaman12-hue/site-test`
- Branch: whatever the current task designates. When the user says the change is
  for the **live site**, that means `main` — Cloudflare Pages deploys only from
  `main`; a push to any other branch does not deploy. If a session-designated
  feature branch exists AND the user asked for a live fix, push to `main` and say
  so explicitly.

## Steps

1. **Check for a stale base first**: `git fetch origin <branch>` then
   `git status` / `git log HEAD..origin/<branch> --oneline`. If the remote has
   commits the local repo lacks (the user sometimes edits via the GitHub web UI),
   STOP and reconcile before pushing — `push_files` sends whole files, so pushing
   from a stale base silently reverts the remote-only changes. Reconcile by
   stashing local edits, resetting to origin, re-applying the edits, then pushing.
2. **List what changed**: `git status --porcelain`. Include untracked (`??`) files
   — they push the same way as modified ones. If nothing changed, say so and stop.
3. **Handle the cases push_files cannot**:
   - **Deletions**: `push_files` cannot delete. Use `mcp__github__delete_file`
     for each deleted path (load via ToolSearch), or tell the user the file must
     be deleted on GitHub.
   - **Binary files** (images, fonts, PDFs): `push_files` takes text content and
     will corrupt binaries. Do not attempt it — tell the user to upload binaries
     through the GitHub web UI, then treat them as remote-only changes (step 1).
4. **Push text files**: load `mcp__github__push_files` via ToolSearch if needed,
   then send ALL changed text files in one call — full current file contents
   read from the working tree, never retyped from memory — with a short
   imperative commit message.
5. **Re-sync local immediately**:
   `git fetch origin <branch> && git reset --hard origin/<branch>`
   (checkout the branch first if not on it). Never reset while any local edit is
   still unpushed — push first, reset second.
6. **Report**: short commit SHA, one line per file, and — if the push was to
   `main` — a note that Cloudflare will auto-deploy it.

## Hard rules

- Push first, `reset --hard` second. Reversing the order destroys work.
- One `push_files` call per logical change; don't split a change across commits.
- Do not create a pull request unless explicitly asked.
