import { Flex, Text } from '@/shared/ui';

import { getArticlesList } from '@/entities/articles';

import { PrepareArticles } from './prepare-articles';

export const ArticleListContent = async () => {
  const articlesList = await getArticlesList();

  return (
    articlesList.map(({ articles, title }) => (
      <Flex gap="gap-6" key={title} vertical={true}>
        <Text size="text-lg" weight="font-bold">{title}</Text>
        <PrepareArticles articles={articles} />
      </Flex>
    ))
  );
};
