export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  devtools: { enabled: true },

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
    // Origin only (no path); the deploy sets NUXT_PUBLIC_I18N_BASE_URL to the Pages origin
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

  // `pnpm generate` (GitHub Pages) prerenders every language and bakes the GitHub
  // numbers into the pages; the deploy workflow reruns daily to refresh them.
  nitro: {
    prerender: {
      routes: ['/', '/pl', '/es', '/it', '/fr', '/pt', '/de', '/api/github']
    }
  },

  compatibilityDate: '2026-10-01',

  typescript: {
    strict: true
  }
})
