<script setup lang="ts">
import { projects } from '~/data/site'
import IndexOneMark from './IndexOneMark.vue'
import RigOneMark from './RigOneMark.vue'
import SurfaceOneMark from './SurfaceOneMark.vue'

// Hero drawing: the MonoOne mark floats over an isometric plane (SurfaceOne's stacked planes),
// dotted like RigOne's canvas, with every product icon on a corner, wired to the center the way
// RigOne connects agents. Positions are on a 400 × 264 board, as percentages so it scales.
// Imported by hand for the same reason as in ProjectShowcase: `:is` with a string renders nothing.
const marks: Record<string, Component> = { IndexOneMark, RigOneMark, SurfaceOneMark }

const W = 400
const H = 264
const center = { x: 200, y: 160 }
// Left, right and front corner of the plane, pulled in so the tiles stay on the board
const corners = [{ x: 64, y: 160 }, { x: 336, y: 160 }, { x: 200, y: 228 }]

const nodes = projects.slice(0, corners.length).map((project, i) => ({
  name: project.name,
  mark: marks[project.mark],
  left: `${(corners[i]!.x / W) * 100}%`,
  top: `${(corners[i]!.y / H) * 100}%`,
  delay: `${700 + i * 140}ms`,
  path: `M${center.x} ${center.y} L${corners[i]!.x} ${corners[i]!.y}`
}))

const plane = `M30 160 L200 75 L370 160 L200 245 Z`
const id = useId()
</script>

<template>
  <div
    class="hero-family"
    role="img"
    :aria-label="`MonoOne: ${nodes.map(n => n.name).join(', ')}`"
  >
    <svg
      :viewBox="`0 0 ${W} ${H}`"
      class="hero-family__board"
      aria-hidden="true"
    >
      <defs>
        <pattern
          :id="`${id}-dots`"
          width="12"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <circle
            class="hero-family__dot"
            cx="6"
            cy="3"
            r=".9"
          />
        </pattern>
        <radialGradient
          :id="`${id}-glow`"
          cx=".5"
          cy=".5"
          r=".5"
        >
          <stop
            offset="0"
            stop-color="currentColor"
            stop-opacity=".18"
          />
          <stop
            offset="1"
            stop-color="currentColor"
            stop-opacity="0"
          />
        </radialGradient>
      </defs>

      <!-- two planes below, like SurfaceOne's stack -->
      <path
        :d="plane"
        class="hero-family__plane hero-family__plane--under"
        transform="translate(0 14)"
      />
      <path
        :d="plane"
        class="hero-family__plane hero-family__plane--under"
        transform="translate(0 7)"
      />
      <path
        :d="plane"
        class="hero-family__plane"
      />
      <path
        :d="plane"
        :fill="`url(#${id}-dots)`"
        class="hero-family__dots"
      />

      <ellipse
        :cx="center.x"
        :cy="center.y"
        rx="64"
        ry="20"
        :fill="`url(#${id}-glow)`"
        class="hero-family__shadow"
      />

      <path
        v-for="node in nodes"
        :key="node.name"
        :d="node.path"
        class="hero-family__wire"
      />
      <circle
        :cx="center.x"
        :cy="center.y"
        r="3"
        class="hero-family__hub"
      />
    </svg>

    <div class="hero-family__mono hero-mark">
      <MonoMark class="size-full" />
    </div>

    <div
      v-for="node in nodes"
      :key="node.name"
      class="hero-family__node"
      :style="{ left: node.left, top: node.top, '--enter-delay': node.delay }"
    >
      <div class="hero-family__tile enter">
        <component :is="node.mark" />
      </div>
    </div>
  </div>
</template>
