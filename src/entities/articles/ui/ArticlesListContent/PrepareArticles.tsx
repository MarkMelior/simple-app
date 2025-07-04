'use client';

import { type FC, useMemo } from 'react';

import { CategoryCard } from '@/widgets/(articles)/CategoryCard';

import { useModals } from '@/shared/lib/common';

import { type ArticleData, useArticles } from '@/entities/articles';

interface PrepareArticlesProps {
  articles: ArticleData[]
  isFullPage?: boolean
}

export const PrepareArticles: FC<PrepareArticlesProps> = ({ articles, isFullPage }) => {
  const { filters, settings, sort } = useArticles();
  const { close } = useModals('articlesCategories');

  const prepareArticlesData = useMemo(() => {
    const test = '';

    return articles;
  }, [articles]);

  return (
    <CategoryCard
      articles={prepareArticlesData}
      cols={isFullPage ? '3' : '2'}
      {...(isFullPage ? {} : { onClick: close })}
    />
  );
};
