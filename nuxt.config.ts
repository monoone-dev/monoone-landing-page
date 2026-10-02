export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
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

  compatibilityDate: '2026-10-01',

  typescript: {
    strict: true
  }
})
