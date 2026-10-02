<script setup lang="ts">
import { principles, projects, site } from '~/data/site'
</script>

<template>
  <div>
    <UPageHero
      class="mono-grid"
      :ui="{ title: 'text-balance', description: 'text-balance' }"
    >
      <template #headline>
        <div class="flex flex-col items-center gap-8">
          <div class="hero-mark enter">
            <MonoMark class="size-20 sm:size-24" />
          </div>
          <UBadge
            label="Independent software · macOS"
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
        >Small software.</span>
        <span
          class="enter block text-muted font-light"
          style="--enter-delay: 300ms"
        >Private by default.</span>
      </template>

      <template #description>
        <span
          class="enter block"
          style="--enter-delay: 420ms"
        >{{ site.description }}</span>
      </template>

      <template #links>
        <div class="flex w-full flex-col items-center gap-6">
          <div
            class="enter flex flex-wrap justify-center gap-3"
            style="--enter-delay: 540ms"
          >
            <UButton
              label="Meet Projects"
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
      title="What we believe"
      description="Four rules every MonoOne product follows. No exceptions, no fine print."
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal
          v-for="(principle, i) in principles"
          :key="principle.title"
          :delay="i * 90"
        >
          <UPageFeature v-bind="principle" />
        </Reveal>
      </div>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="projects"
      title="Projects"
      description="One focused product, built carefully. More when it's ready."
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
          title="Found a bug or have an idea?"
          description="We build in the open. Issues and discussions live on GitHub."
          variant="subtle"
          :links="[
            { label: 'Open an issue', to: 'https://github.com/monoone-dev/index-one-landing-page/issues', target: '_blank', icon: 'i-lucide-circle-dot' },
            { label: 'Discussions', to: 'https://github.com/monoone-dev/index-one-landing-page/discussions', target: '_blank', icon: 'i-lucide-messages-square', color: 'neutral', variant: 'outline' }
          ]"
        />
      </Reveal>
    </UPageSection>
  </div>
</template>
