<script setup lang="ts">
import { site } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        © {{ year }} {{ site.name }}
      </p>
    </template>

    <p class="text-sm text-dimmed font-mono">
      macOS-first · local-first · plain Markdown
    </p>

    <template #right>
      <UButton
        :to="site.github"
        target="_blank"
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
