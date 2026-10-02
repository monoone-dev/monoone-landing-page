<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  ogTitle: site.name,
  ogDescription: site.tagline,
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

useHead({
  meta: [
    { name: 'theme-color', content: '#fafafa', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#0a0a0a', media: '(prefers-color-scheme: dark)' }
  ]
})
</script>

<template>
  <UApp>
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
