export interface Project {
  name: string
  tagline: string
  description: string
  status: string
  /** Public repo whose stars are shown on the card */
  repo: string
  meta: string[]
  features: { title: string, description: string, icon: string }[]
  links: { label: string, to: string, icon?: string }[]
}

export interface Principle {
  title: string
  description: string
  icon: string
}

export const site = {
  name: 'MonoOne',
  url: 'https://monoone.dev',
  github: 'https://github.com/monoone-dev',
  tagline: 'Small, private-by-default software for the Mac.',
  description:
    'We build tools that keep your data on your device and leave you with files you own.'
}

export const principles: Principle[] = [
  {
    title: 'Local-first',
    description: 'Your data stays on your device. Everything core works offline and without an account.',
    icon: 'i-lucide-hard-drive'
  },
  {
    title: 'Files you own',
    description: 'Plain Markdown on disk. No proprietary formats, no lock-in, no export ritual.',
    icon: 'i-lucide-file-text'
  },
  {
    title: 'Private by default',
    description: 'Cloud features are opt-in and redacted. Sharing is end-to-end encrypted.',
    icon: 'i-lucide-lock'
  },
  {
    title: 'Made for the Mac',
    description: 'Native, signed and notarized. Apple Silicon and Intel, macOS 13.4 or later.',
    icon: 'i-lucide-laptop'
  }
]

export const projects: Project[] = [
  {
    name: 'IndexOne',
    tagline: 'Secure, 100% local meeting notes for macOS.',
    description:
      'IndexOne records your calls, transcribes them and writes a structured note you own as plain Markdown, all on your Mac. Recordings, transcripts and notes stay 100% on your device: no account and no cloud processing. Your library sits in an encrypted database, and nothing is sent anywhere unless you explicitly choose to.',
    status: 'Free in early access',
    repo: 'index-one-landing-page',
    meta: ['macOS 13.4+', 'Apple Silicon & Intel', 'No account needed'],
    features: [
      {
        title: 'Both sides of the call',
        description: 'Your mic and the other side, merged into one clear transcript.',
        icon: 'i-lucide-audio-lines'
      },
      {
        title: 'On-device Whisper',
        description: 'Transcription runs locally with Metal. No cloud transcription.',
        icon: 'i-lucide-cpu'
      },
      {
        title: 'Notes you own',
        description: 'Summary, decisions and action items as Markdown in your Obsidian vault.',
        icon: 'i-lucide-file-text'
      },
      {
        title: 'Answers with sources',
        description: 'Ask mid-call or months later and see which meetings each answer came from.',
        icon: 'i-lucide-message-circle-question'
      },
      {
        title: 'Encrypted and lockable',
        description: 'One encrypted database on your Mac, plus per-folder Touch ID locks.',
        icon: 'i-lucide-lock'
      },
      {
        title: 'Your AI, your choice',
        description: 'On-device model or opt-in cloud. A local MCP server for your own agents.',
        icon: 'i-lucide-sparkles'
      }
    ],
    links: [
      {
        label: 'Download for Mac',
        to: 'https://github.com/monoone-dev/index-one-landing-page/releases/latest',
        icon: 'i-lucide-download'
      },
      { label: 'index-one.io', to: 'https://index-one.io', icon: 'i-lucide-arrow-up-right' }
    ]
  }
]
