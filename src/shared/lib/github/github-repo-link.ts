import type { GithubPath } from '@/shared/lib/github/types';

export const gitHubRepoLink = ({
  branch = 'main',
  owner = 'MarkMelior',
  path,
  repo = 'melior-web',
}: GithubPath) => `https://github.com/${owner}/${repo}/blob/${branch}/${path}`;
