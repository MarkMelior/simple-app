import { CategoryCard } from '@/widgets/(articles)/CategoryCard';
import { Header } from '@/widgets/(articles)/Header';

import { getMetadataTitle } from '@/shared/lib/text';

import type { ArticlesCategoryEnum } from '@/entities/articles';
import { getArticleList, getArticleListByCategory } from '@/entities/articles';

import type { Metadata } from 'next';

type ArticleCategoryPageProps = {
  params: Promise<{ category: ArticlesCategoryEnum }>
};

export default async function ArticleCategoryPage({ params }: ArticleCategoryPageProps) {
  const { category: categoryParams } = await params;
  const { articles, category } = await getArticleListByCategory(categoryParams);

  return (
    <div>
      <Header
        description="Здесь находятся все проекты из данной категории"
        note="Категория"
        title={category.title}
      />

      <CategoryCard articles={articles} />
    </div>
  );
}

export async function generateStaticParams() {
  const categories = await getArticleList();

  return categories.map(({ slug }) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }: ArticleCategoryPageProps): Promise<Metadata> {
  const { category: categoryParams } = await params;
  const { articles, category } = await getArticleListByCategory(categoryParams);

  return {
    description: `Категория: ${category.title}. Статьи: ${articles
      .map((article) => article.title)
      .join(', ')}.`,
    title: getMetadataTitle(category.title),
  };
}
