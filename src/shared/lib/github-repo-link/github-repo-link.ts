import { GitHubPath } from '@/shared/types/github-path';

export const gitHubRepoLink = ({
	owner = 'MarkMelior',
	repo = 'simple-app',
	path,
}: GitHubPath) => {
	return `https://github.com/${owner}/${repo}/blob/master/${path}`;
};
