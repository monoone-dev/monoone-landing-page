<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import * as uiLocales from '@nuxt/ui/locale'
import { site } from '~/data/site'

const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const items = computed<NavigationMenuItem[]>(() =>
  ['principles', 'projects', 'contact'].map(id => ({
    label: t(`nav.${id}`),
    to: { path: localePath('/'), hash: `#${id}` }
  }))
)

// Only the languages the site is translated into, in the order of nuxt.config
const selectable = computed(() =>
  locales.value
    .map(l => uiLocales[l.code as keyof typeof uiLocales])
    .filter(Boolean)
)

const current = computed({
  get: () => locale.value,
  set: code => setLocale(code as typeof locale.value)
})
</script>

<template>
  <UHeader
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
      <ULocaleSelect
        v-model="current"
        :locales="selectable"
        :aria-label="t('nav.language')"
        color="neutral"
        variant="ghost"
        size="sm"
        class="w-36 max-sm:hidden"
      />
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
      <ULocaleSelect
        v-model="current"
        :locales="selectable"
        :aria-label="t('nav.language')"
        color="neutral"
        class="mt-4 w-full"
      />
    </template>
  </UHeader>
</template>
