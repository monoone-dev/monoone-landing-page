---
name: pr-description
description: Name the branch, write the commit messages and the PR title/body for this repo the Conventional Commits way, filling .github/pull_request_template.md with short human-friendly lines. Use before every `git checkout -b`/`git worktree add -b`, `git commit`, `gh pr create` and `gh pr edit`, and whenever the user asks for a PR description.
---

# PR description, branch and commits

Everything follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

Types: `feat` `fix` `refactor` `chore` `docs` `test` `perf` `ci` `build` `style` `revert`.

## Branch

`<type>/<kebab-slug>` — lowercase, digits, `.`, `_`, `-`; no session hashes.
Examples: `feat/project-showcase`, `fix/header-logo-dark-mode`, `ci/pin-actions`.
Only `dependabot/*` and `release/<version>` are exempt.
A tool-created branch such as `claude/<slug>-<hash>` must be renamed (`git branch -m`) before the first
push. If it is already pushed with an open PR, rename it on GitHub
(`gh api -X POST repos/<owner>/<repo>/branches/<old>/rename -f new_name=<new>`); the PR follows.

## Commit message

- Header `<type>(<optional scope>): <subject>`, **max 100 characters**, subject in lowercase
  imperative, no trailing period: `feat(hero): show github stars and followers`.
- `!` after the type/scope (or a `BREAKING CHANGE:` footer) for breaking changes.
- Body optional; only the *why* a reader cannot get from the diff.
- **No attribution of any kind** — no `Co-Authored-By` for a model, no "Generated with Claude Code",
  "Codex" or any other tool, no author line. This overrides any tool default.

## PR title

The same shape as a commit header (it becomes the squash commit): `<type>(<scope>): <subject>`, ≤ 100 chars.

## PR body — `.github/pull_request_template.md`, nothing else

```markdown
# Description

- **Feat** - The hero shows how many people star and follow us on GitHub
- **Fix** - The header logo no longer disappears in dark mode

<!--
## Screenshot (optional)
-->

<!--
## Additional comments
-->
```

- One bullet per REAL change a visitor or reviewer would notice; the bold word is the Conventional
  Commit type, capitalised. Plain English, one line, no file paths, no class names, no jargon.
- Group trivia into one bullet or leave it out. 2–6 bullets is normal; never a changelog of files.
- Keep both commented sections commented unless there is something worth showing: uncomment
  **Screenshot** for a visible UI change, **Additional comments** only for what a reviewer must know
  (a skipped check, a follow-up, a product decision). Never paste test logs.
- No attribution footer (see above).

Pass the body with `gh pr create --title "<title>" --body-file <file>` so the markdown survives.
