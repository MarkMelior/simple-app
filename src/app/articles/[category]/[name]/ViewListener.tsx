'use client';

import { type FC, useEffect } from 'react';

import { useArticles } from '@/entities/articles';

interface ViewListenerProps {
  slug: string
}

export const ViewListener: FC<ViewListenerProps> = ({ slug }) => {
  const { addViewedArticleSlug } = useArticles();

  useEffect(() => {
    addViewedArticleSlug(slug);
  }, [slug]);

  return null;
};
