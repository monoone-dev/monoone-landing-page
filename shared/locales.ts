// Every language the site ships in. Used by the i18n module (nuxt.config.ts) and by the sitemap,
// so a new language is listed in one place and shows up in both.
export const locales = [
  { code: 'en', language: 'en', name: 'English', file: 'en.json' },
  { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' },
  { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
  { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
  { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
  { code: 'pt', language: 'pt-BR', name: 'Português', file: 'pt.json' },
  { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
  { code: 'zh', language: 'zh-CN', name: '简体中文', file: 'zh.json' },
  { code: 'ja', language: 'ja-JP', name: '日本語', file: 'ja.json' }
]

export const defaultLocale = 'en'
