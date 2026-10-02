export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },

  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],

  runtimeConfig: {
    githubOrg: 'monoone-dev',
    githubToken: ''
  },

  colorMode: {
    preference: 'system',
    fallback: 'light'
  },

  // English is the default (no prefix); other languages live under /pl, /es, ...
  // First visit to / follows the browser language, then the choice is kept in a cookie.
  i18n: {
    baseUrl: 'https://monoone.dev',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'pt', language: 'pt-BR', name: 'Português', file: 'pt.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' }
    ],
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      fallbackLocale: 'en'
    }
  },

  compatibilityDate: '2026-10-01',

  typescript: {
    strict: true
  }
})
