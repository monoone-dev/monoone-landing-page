<script setup lang="ts">
// Hero background: a field of ciphertext that keeps re-encrypting, with a clear zone in the
// middle where the headline sits. Seeded, so the server and the browser draw the same text and
// hydration matches; the scrambling only starts in the browser, and never with reduced motion.
const ROWS = 34
const BLOCKS = 28
const HEX = '0123456789abcdef'

function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const random = seeded(20261005)
const block = (next: () => number) => Array.from({ length: 4 }, () => HEX[Math.floor(next() * 16)]).join('')
const line = (next: () => number) => Array.from({ length: BLOCKS }, () => block(next)).join(' ')

const rows = ref(Array.from({ length: ROWS }, () => line(random)))
const root = ref<HTMLElement>()

let timer: ReturnType<typeof setInterval> | undefined
let observer: IntersectionObserver | undefined

// Swap one 4-character block in a few random rows on every tick
function scramble() {
  const next = rows.value.slice()
  for (let i = 0; i < 6; i++) {
    const r = Math.floor(Math.random() * ROWS)
    const b = Math.floor(Math.random() * BLOCKS) * 5
    next[r] = next[r]!.slice(0, b) + block(Math.random) + next[r]!.slice(b + 4)
  }
  rows.value = next
}

const stop = () => {
  clearInterval(timer)
  timer = undefined
}
const start = () => {
  if (!timer) timer = setInterval(scramble, 140)
}

onMounted(() => {
  if (!root.value || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  // Only scramble while the hero is on screen
  observer = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? start() : stop()))
  observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  stop()
})
</script>

<template>
  <div
    ref="root"
    class="hero-cipher"
    aria-hidden="true"
  >
    <div
      v-for="(row, i) in rows"
      :key="i"
    >
      {{ row }}
    </div>
  </div>
</template>
