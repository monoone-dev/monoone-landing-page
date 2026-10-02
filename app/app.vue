<script setup lang="ts">
import * as uiLocales from '@nuxt/ui/locale'
import { site } from '~/data/site'

const { t, locale } = useI18n()

// <html lang>, hreflang alternates and og:locale for every language
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs.lang },
  link: [...(i18nHead.value.link ?? [])],
  meta: [
    ...(i18nHead.value.meta ?? []),
    { name: 'theme-color', content: '#fafafa', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#0a0a0a', media: '(prefers-color-scheme: dark)' }
  ]
}))

useSeoMeta({
  title: () => `${site.name} — ${t('meta.title')}`,
  description: () => t('meta.description'),
  ogTitle: site.name,
  ogDescription: () => t('meta.title'),
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

const uiLocale = computed(() => uiLocales[locale.value as keyof typeof uiLocales] ?? uiLocales.en)
</script>

<template>
  <UApp :locale="uiLocale">
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
