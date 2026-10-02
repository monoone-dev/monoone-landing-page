<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { site } from '~/data/site'

const { t } = useI18n()
const localePath = useLocalePath()

const items = computed<NavigationMenuItem[]>(() =>
  ['principles', 'projects', 'contact'].map(id => ({
    label: t(`nav.${id}`),
    to: { path: localePath('/'), hash: `#${id}` }
  }))
)
</script>

<template>
  <UHeader
    :title="site.name"
    :to="localePath('/')"
    :toggle="{ color: 'neutral', variant: 'ghost' }"
    class="backdrop-blur"
  >
    <template #title>
      <AppLogo />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <LanguageSwitcher />
      <UColorModeButton />
      <UButton
        :to="site.github"
        target="_blank"
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        :aria-label="t('nav.github')"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
