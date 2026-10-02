// Structure of the page: links, icons and which translation keys to use.
// All visible text lives in i18n/locales/<code>.json.

export interface Project {
  /** Translation namespace, e.g. `indexOne` → `indexOne.tagline` */
  key: string
  name: string
  /** Public repo whose stars are shown on the card */
  repo: string
  meta: string[]
  features: { key: string, icon: string }[]
  links: { key: string, to: string, icon: string }[]
}

export const site = {
  name: 'MonoOne',
  url: 'https://monoone.dev',
  github: 'https://github.com/monoone-dev',
  issues: 'https://github.com/monoone-dev/index-one-landing-page/issues',
  discussions: 'https://github.com/monoone-dev/index-one-landing-page/discussions'
}

export const principles = [
  { key: 'localFirst', icon: 'i-lucide-hard-drive' },
  { key: 'ownFiles', icon: 'i-lucide-file-text' },
  { key: 'private', icon: 'i-lucide-lock' },
  { key: 'mac', icon: 'i-lucide-laptop' }
]

export const projects: Project[] = [
  {
    key: 'indexOne',
    name: 'IndexOne',
    repo: 'index-one-landing-page',
    meta: ['macos', 'arch', 'noAccount'],
    features: [
      { key: 'bothSides', icon: 'i-lucide-audio-lines' },
      { key: 'whisper', icon: 'i-lucide-cpu' },
      { key: 'notes', icon: 'i-lucide-file-text' },
      { key: 'answers', icon: 'i-lucide-message-circle-question' },
      { key: 'encrypted', icon: 'i-lucide-lock' },
      { key: 'ai', icon: 'i-lucide-sparkles' }
    ],
    links: [
      {
        key: 'download',
        to: 'https://github.com/monoone-dev/index-one-landing-page/releases/latest',
        icon: 'i-lucide-download'
      },
      { key: 'site', to: 'https://index-one.io', icon: 'i-lucide-arrow-up-right' }
    ]
  }
]
