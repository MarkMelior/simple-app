import { cache } from 'react';

import type { GithubPath } from './types';

export const fetchGitHubFileContent = cache(
  async ({
    owner = 'MarkMelior',
    path,
    repo = 'melior-web',
  }: GithubPath): Promise<string> => {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Error fetching from GitHub: ${response.status} - ${response.statusText}`,
        );
      }

      const data = await response.json();

      if (!data || !data.content) {
        throw new Error('Invalid data format from GitHub API');
      }

      const content = atob(data.content);

      // Remove last empty line
      const contentSplit = content.split('\n');

      if (contentSplit[contentSplit.length - 1] === '') {
        contentSplit.pop();
      }

      return contentSplit.join('\n');
    } catch (error) {
      console.error('Error receiving a file from GitHub:', error);

      return error?.toString() || 'An unknown error has occurred';
    }
  },
);
