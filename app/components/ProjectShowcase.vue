<script setup lang="ts">
import type { Project } from '~/data/site'

import { site } from '~/data/site'

const props = defineProps<{ project: Project }>()

const { data: stats } = useGithubStats()
const stars = computed(() => stats.value?.repos[props.project.repo])
</script>

<template>
  <article class="showcase rounded-3xl border border-default bg-default overflow-hidden">
    <div class="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-14">
      <div>
        <div class="flex flex-wrap items-center gap-2">
          <UBadge
            :label="project.status"
            color="neutral"
            variant="solid"
            class="rounded-full"
          />
          <span class="mono-index text-sm">01</span>
        </div>

        <h3 class="wordmark mt-5 text-4xl sm:text-5xl text-highlighted">
          <b>Index</b> <span>One</span>
        </h3>
        <p class="mt-3 text-xl font-medium text-toned text-balance">
          {{ project.tagline }}
        </p>
        <p class="mt-3 max-w-xl text-muted leading-relaxed">
          {{ project.description }}
        </p>

        <div class="mt-7 flex flex-wrap gap-3">
          <UButton
            v-for="(link, i) in project.links"
            :key="link.to"
            :label="link.label"
            :to="link.to"
            :icon="i === 0 ? link.icon : undefined"
            :trailing-icon="i === 0 ? undefined : link.icon"
            :variant="i === 0 ? 'solid' : 'outline'"
            target="_blank"
            size="lg"
          />
          <UButton
            v-if="stars !== undefined"
            :to="`${site.github}/${project.repo}`"
            target="_blank"
            icon="i-lucide-star"
            :label="`Star · ${stars}`"
            color="neutral"
            variant="ghost"
            size="lg"
          />
        </div>

        <ul class="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-dimmed">
          <li
            v-for="item in project.meta"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="showcase__icon order-first mx-auto w-44 sm:w-56 lg:order-none lg:w-72">
        <IndexOneMark />
      </div>
    </div>

    <ul class="grid gap-px border-t border-default bg-(--ui-border) sm:grid-cols-2 lg:grid-cols-3">
      <Reveal
        v-for="(feature, i) in project.features"
        :key="feature.title"
        as="li"
        :delay="(i % 3) * 80"
        class="feature flex gap-3 bg-default p-6 sm:p-8"
      >
        <UIcon
          :name="feature.icon"
          class="mt-0.5 size-5 shrink-0 text-highlighted"
        />
        <div>
          <p class="font-medium text-highlighted">
            {{ feature.title }}
          </p>
          <p class="mt-1 text-sm text-muted leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </Reveal>
    </ul>
  </article>
</template>
