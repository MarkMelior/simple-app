import { Flex } from '@/shared/ui';

import { getArticlesList } from '@/entities/articles';

import { PrepareArticles } from './PrepareArticles';

import type { FC } from 'react';

interface ArticlesListContentProps {
  isFullPage?: boolean
}

export const ArticlesListContent: FC<ArticlesListContentProps> = async ({ isFullPage }) => {
  const articlesList = await getArticlesList();

  return (
    articlesList.map(({ articles, link, title }) => (
      <Flex gap="gap-6" key={title} vertical={true}>
        <PrepareArticles
          articles={articles}
          isFullPage={isFullPage}
          link={link}
          title={title}
        />
      </Flex>
    ))
  );
};
