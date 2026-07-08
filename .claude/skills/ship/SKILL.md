---
name: ship
description: Commit and push the current working-tree changes to a branch on GitHub, then hard-sync the local repo. Use whenever changes need to be pushed — including after stop-hook "uncommitted changes" feedback. Handles the remote-container quirk where local `git push` always fails with 403.
---

# Ship: push changes and re-sync local

In this remote environment, local `git push` is always rejected (403 by the git proxy).
All pushes MUST go through the GitHub MCP `push_files` tool, and afterwards the local
repo is stale and must be hard-reset to match the remote — otherwise the stop hook
complains about uncommitted/unpushed changes and wastes a turn.

## Default target

- Repo: `collenhornaman12-hue/site-test`
- Branch: `main` unless the user says otherwise. **The live Cloudflare Pages site
  builds only from `main`** — pushing a "fix for the live site" to any other branch
  does not deploy it.

## Steps

1. Identify changed files: `git status --porcelain`. If empty, say so and stop.
2. Load the tool if needed: ToolSearch `select:mcp__github__push_files`.
3. Call `mcp__github__push_files` with ALL changed files (full file contents from
   the working tree, verbatim — never retype from memory) and a short imperative
   commit message describing the change.
4. Immediately re-sync local so the stop hook stays quiet:
   `git fetch origin <branch> && git reset --hard origin/<branch>`
   (checkout the branch first if not already on it).
5. Report the short commit SHA and one line per file changed. If the change affects
   the live site, remind that Cloudflare deploys automatically from `main`.

## Cautions

- Never `git reset --hard` while there are local edits that have NOT yet been pushed
  via `push_files` — that destroys them. Push first, reset second.
- `push_files` replaces whole files: always send the complete current file content,
  not a diff or a partial file.
- Do not create a pull request unless explicitly asked.
