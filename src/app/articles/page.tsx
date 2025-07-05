import { ArticlesListContent } from '@/entities/articles';

import { ArticlesBaseLayout } from '@/core/layouts/articles-base';

import type { Metadata } from 'next';

export default async function ArticlePage() {
  return (
    <ArticlesBaseLayout>
      <ArticlesListContent isFullPage={true} />
    </ArticlesBaseLayout>
  );
}

export const metadata: Metadata = {
  description: 'Каталог технических статей на MeliorWeb: гайды, лучшие практики и решения для фронтенда, TypeScript, React, SSR, архитектуры и разработки. Удобная навигация по категориям и проектам. Всё, что нужно разработчику — в одном месте.',
  title: 'Melior :: Каталог статей',
};
