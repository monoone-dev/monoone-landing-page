<script setup lang="ts">
import { site } from '~/data/site'

const { data: stats } = useGithubStats()

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`
</script>

<template>
  <Transition name="fade">
    <div
      v-if="stats"
      class="flex flex-wrap items-center justify-center gap-2 font-mono text-xs"
    >
      <UButton
        :to="site.github"
        target="_blank"
        icon="i-lucide-star"
        :label="plural(stats.stars, 'star')"
        color="neutral"
        variant="soft"
        size="xs"
      />
      <UButton
        :to="site.github"
        target="_blank"
        icon="i-lucide-users"
        :label="plural(stats.followers, 'follower')"
        color="neutral"
        variant="soft"
        size="xs"
      />
    </div>
  </Transition>
</template>
