'use client';

import Link from 'next/link';
import { type FC, useCallback, useMemo } from 'react';

import { CategoryCard } from '@/widgets/(articles)/CategoryCard';

import { useModals } from '@/shared/lib/common';
import { Text } from '@/shared/ui';

import { type ArticleData, useArticles } from '@/entities/articles';

interface PrepareArticlesProps {
  articles: ArticleData[]
  isFullPage?: boolean
  link: string
  title: string
}

export const PrepareArticles: FC<PrepareArticlesProps> = ({ articles, isFullPage, link, title }) => {
  const { } = useArticles();
  const { close } = useModals('articlesCategories');

  const prepareArticlesData = useMemo(() => articles, [articles]);

  const handleClick = useCallback(() => {
    if (isFullPage) return;
    close();
  }, []);

  return (
    <>
      <Text
        as={Link}
        href={link ?? ''}
        onClick={handleClick}
        size={isFullPage ? 'text-2xl' : 'text-lg'}
        weight="font-bold"
      >
        {title}
      </Text>
      <CategoryCard
        articles={prepareArticlesData}
        cols={isFullPage ? '3' : '2'}
        onClick={handleClick}
      />
    </>
  );
};
