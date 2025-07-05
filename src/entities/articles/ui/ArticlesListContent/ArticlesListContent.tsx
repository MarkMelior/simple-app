import { Flex, Text } from '@/shared/ui';

import { getArticlesList } from '@/entities/articles';

import { PrepareArticles } from './PrepareArticles';

import type { FC } from 'react';

interface ArticlesListContentProps {
  isFullPage?: boolean
}

export const ArticlesListContent: FC<ArticlesListContentProps> = async ({ isFullPage }) => {
  const articlesList = await getArticlesList();

  return (
    articlesList.map(({ articles, title }) => (
      <Flex gap="gap-6" key={title} vertical={true}>
        <Text size={isFullPage ? 'text-2xl' : 'text-lg'} weight="font-bold">{title}</Text>
        <PrepareArticles articles={articles} isFullPage={isFullPage} />
      </Flex>
    ))
  );
};
