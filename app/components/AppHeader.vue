<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { site } from '~/data/site'

const items: NavigationMenuItem[] = [
  { label: 'Principles', to: '/#principles' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' }
]
</script>

<template>
  <UHeader
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
      <UColorModeButton />
      <UButton
        :to="site.github"
        target="_blank"
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        aria-label="MonoOne on GitHub"
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
