import type { GithubStats } from '#shared/types/github'

// Null while loading or if GitHub is unreachable; callers simply hide the numbers.
export function useGithubStats() {
  return useFetch<GithubStats | null>('/api/github', {
    key: 'github-stats',
    default: () => null,
    lazy: true
  })
}
