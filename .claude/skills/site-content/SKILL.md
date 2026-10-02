---
name: site-content
description: Change what the MonoOne website says or shows — add or edit a project, update the principles or hero copy, swap a logo, or adjust the Mono theme — following the content rules (no personal names, honest privacy claims, nothing private). Use whenever the user asks to add a project, change text on the site, replace a logo or tweak colors.
---

# /site-content — editing the site

## Where things live

| What | Where |
| --- | --- |
| All visible text, per language | `i18n/locales/{en,pl,es,it,fr,pt,de,zh,ja}.json` |
| Page structure: links, icons, translation keys | `app/data/site.ts` |
| Language picker (flag button) | `app/components/LanguageSwitcher.vue`, flags in `app/data/site.ts` |
| Languages, default, browser detection | `i18n` block in `nuxt.config.ts`, plural rules in `i18n/i18n.config.ts` |
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
- Short sentences, no marketing superlatives. Product names (MonoOne, IndexOne, Obsidian, Whisper)
  are never translated.

## Translations

- English (`en.json`) is the source, the default and the fallback; every key must exist in all nine files.
  A missing key silently falls back to English, so add new text to all of them in the same change.
- Plurals use vue-i18n choices: `zero | one | other` (`"{n} stars | {n} star | {n} stars"`).
  Polish has four: `zero | one | few | many` (`"{n} gwiazdek | {n} gwiazdka | {n} gwiazdki | {n} gwiazdek"`).
  Chinese and Japanese have no plural forms: one message (`"{n} 个星标"`, `"スター {n} 件"`).
- Chinese is Simplified (`zh` → `zh-CN`); Traditional-Chinese browsers also land on it.
- Use gender-neutral phrasing (Polish: avoid `-łeś/-łaś` forms).
- Escape vue-i18n special characters (`@ { } | $`) as `{'@'}` if they ever appear in copy.
- Adding a language: a JSON file, an entry in `i18n.locales` and in `nitro.prerender.routes` in
  `nuxt.config.ts`, a flag in `flags` in `app/data/site.ts` (`i-circle-flags-<country>`), and check
  that `@nuxt/ui/locale` has it (Nuxt UI's own labels; see `uiLocale` in `app/app.vue`).

## Add a project

1. Append an entry to `projects` in `app/data/site.ts` (`key` is its translation namespace, `repo`
   the public repo whose stars are shown) and add that namespace to every locale file.
2. Add its logo as a component next to `IndexOneMark.vue`: inline the official SVG, prefix every
   gradient/filter id with `useId()` so two copies on a page do not collide.
3. With two or more projects, check the Projects section layout and the hero button target.

## Logos

Use the official SVG when one exists; do not redraw a brand mark by eye. Keep the theme behavior:
the MonoOne mark inverts in dark mode via `--mark-*`; product icons keep their own tile.

## Verify

`pnpm typecheck && pnpm build`, then check the page in light and dark mode at 375px and desktop
width, with no horizontal scroll — in every language (German and Polish words are the longest).
