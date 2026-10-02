# monoone-landing-page

The MonoOne organization website: a single page about who we are and what we build.

Stack: Nuxt 4 · Nuxt UI 4 · TypeScript · Vite · SCSS (Tailwind CSS 4 underneath).

## Development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck
pnpm generate     # static site in .output/public
```

## Where things live

- `app/data/site.ts` — all copy: principles and projects. Edit this to add a project.
- `app/assets/css/main.css` — the "Mono" skin: a grayscale palette with black/white primary that flips in dark mode.
- `app/assets/scss/main.scss` — decorative styles (background grid, wordmark).
- `app/app.config.ts` — Nuxt UI color and component overrides.
