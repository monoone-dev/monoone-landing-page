<script setup lang="ts">
import { principles, projects, site } from '~/data/site'

const { t } = useI18n()
</script>

<template>
  <div>
    <UPageHero
      class="mono-grid"
      :ui="{ title: 'text-4xl sm:text-7xl text-balance hyphens-auto', description: 'text-balance' }"
    >
      <template #headline>
        <div class="flex flex-col items-center gap-8">
          <div class="hero-mark enter">
            <MonoMark class="size-20 sm:size-24" />
          </div>
          <UBadge
            :label="t('hero.badge')"
            color="neutral"
            variant="outline"
            class="enter rounded-full font-mono px-3"
            style="--enter-delay: 120ms"
          />
        </div>
      </template>

      <template #title>
        <span
          class="enter block"
          style="--enter-delay: 200ms"
        >{{ t('hero.title1') }}</span>
        <span
          class="enter block text-muted font-light"
          style="--enter-delay: 300ms"
        >{{ t('hero.title2') }}</span>
      </template>

      <template #description>
        <span
          class="enter block"
          style="--enter-delay: 420ms"
        >{{ t('hero.description') }}</span>
      </template>

      <template #links>
        <div class="flex w-full flex-col items-center gap-6">
          <div
            class="enter flex flex-wrap justify-center gap-3"
            style="--enter-delay: 540ms"
          >
            <UButton
              :label="t('hero.cta')"
              to="#projects"
              trailing-icon="i-lucide-arrow-down"
              size="xl"
              class="nudge"
            />
            <UButton
              label="GitHub"
              :to="site.github"
              target="_blank"
              icon="i-simple-icons-github"
              size="xl"
              color="neutral"
              variant="outline"
            />
          </div>
          <GithubStats />
        </div>
      </template>
    </UPageHero>

    <UPageSection
      id="principles"
      :title="t('principles.title')"
      :description="t('principles.description')"
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal
          v-for="(principle, i) in principles"
          :key="principle.key"
          :delay="i * 90"
        >
          <UPageFeature
            :icon="principle.icon"
            :title="t(`principles.items.${principle.key}.title`)"
            :description="t(`principles.items.${principle.key}.description`)"
          />
        </Reveal>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="projects"
      :title="t('projects.title')"
      :description="t('projects.description')"
    >
      <Reveal>
        <ProjectShowcase
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </Reveal>
    </UPageSection>

    <UPageSection id="contact">
      <Reveal>
        <UPageCTA
          :title="t('contact.title')"
          :description="t('contact.description')"
          variant="subtle"
          :links="[
            { label: t('contact.issue'), to: site.issues, target: '_blank', icon: 'i-lucide-circle-dot' },
            { label: t('contact.discussions'), to: site.discussions, target: '_blank', icon: 'i-lucide-messages-square', color: 'neutral', variant: 'outline' }
          ]"
        />
      </Reveal>
    </UPageSection>
  </div>
</template>
