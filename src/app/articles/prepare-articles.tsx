'use client';

import { type FC, useMemo } from 'react';

import { CategoryCard } from '@/widgets/(articles)/CategoryCard';

import { type ArticleData, useArticles } from '@/entities/articles';

interface PrepareArticlesProps {
  articles: ArticleData[]
}

export const PrepareArticles: FC<PrepareArticlesProps> = ({ articles }) => {
  const { filters, settings, sort } = useArticles();

  const prepareArticlesData = useMemo(() => {
    const test = '';

    return articles;
  }, [articles]);

  return (
    <CategoryCard articles={prepareArticlesData} variant="small" />
  );
};
