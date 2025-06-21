import type { GithubPath } from '@/shared/lib/github/types';

export const gitHubRepoLink = ({
  owner = 'MarkMelior',
  path,
  repo = 'simple-app',
}: GithubPath) => `https://github.com/${owner}/${repo}/blob/master/${path}`;
