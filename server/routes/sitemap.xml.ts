// One <url> per language, each listing every other language as an hreflang alternate, the same
// set the page head declares. Prerendered by `pnpm generate`, so it is a static file on Pages.
import { defaultLocale, locales } from '#shared/locales'

export default defineEventHandler((event) => {
  const { app, public: { i18n } } = useRuntimeConfig(event)
  const root = `${String(i18n.baseUrl).replace(/\/$/, '')}${app.baseURL}`
  const href = (code: string) => (code === defaultLocale ? root : `${root}${code}/`)

  const alternates = [
    ...locales.map(l => `    <xhtml:link rel="alternate" hreflang="${l.language}" href="${href(l.code)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${root}"/>`
  ].join('\n')

  const urls = locales.map(l => `  <url>\n    <loc>${href(l.code)}</loc>\n${alternates}\n  </url>`)

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    ''
  ].join('\n')
})
