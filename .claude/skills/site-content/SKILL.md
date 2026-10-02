---
name: site-content
description: Change what the MonoOne website says or shows — add or edit a project, update the principles or hero copy, swap a logo, or adjust the Mono theme — following the content rules (no personal names, honest privacy claims, nothing private). Use whenever the user asks to add a project, change text on the site, replace a logo or tweak colors.
---

# /site-content — editing the site

## Where things live

| What | Where |
| --- | --- |
| All copy: tagline, principles, projects | `app/data/site.ts` |
| Page layout (hero, principles, projects, contact) | `app/pages/index.vue` |
| Project card | `app/components/ProjectShowcase.vue` |
| MonoOne mark (theme-aware SVG) | `app/components/MonoMark.vue`, colors in `--mark-*` in `app/assets/scss/main.scss` |
| IndexOne symbol | `app/components/IndexOneMark.vue`, source file in `app/assets/brand/` |
| Mono theme (grayscale, black/white primary) | `app/assets/css/main.css`, `app/app.config.ts` |
| Animations | `app/assets/scss/main.scss` (`.enter`, `.reveal`, hover rules) and `app/components/Reveal.vue` |
| GitHub stars / followers | `server/api/github.get.ts`, `app/components/GithubStats.vue` |

## Content rules

- **No personal names.** No people, authors, founders or team members — on the page, in alt text or in metadata.
- **Nothing private.** Link only public repositories and public sites; never internal paths or private repo names.
- **Privacy claims must be true.** "100% local" needs its qualifier if a feature can send data
  (opt-in cloud AI, E2EE sharing): say "unless you explicitly choose to". Do not claim "no telemetry"
  or "everything is encrypted" unless it is confirmed.
- English copy, short sentences, no marketing superlatives.

## Add a project

1. Append an entry to `projects` in `app/data/site.ts` (`repo` is the public repo whose stars are shown).
2. Add its logo as a component next to `IndexOneMark.vue`: inline the official SVG, prefix every
   gradient/filter id with `useId()` so two copies on a page do not collide.
3. With two or more projects, check the Projects section layout and the hero button target.

## Logos

Use the official SVG when one exists; do not redraw a brand mark by eye. Keep the theme behavior:
the MonoOne mark inverts in dark mode via `--mark-*`; product icons keep their own tile.

## Verify

`pnpm typecheck && pnpm build`, then check the page in light and dark mode at 375px and desktop
width, with no horizontal scroll.
