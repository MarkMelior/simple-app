import { CategoryCard } from '@/widgets/(articles)/CategoryCard';
import { Header } from '@/widgets/(articles)/Header';

import { getMetadataTitle } from '@/shared/lib/text';

import type { ArticlesCategoryEnum } from '@/entities/articles';
import { getArticleListByCategory, getArticlesList } from '@/entities/articles';

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
  const categories = await getArticlesList();

  return categories.map(({ slug }) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }: ArticleCategoryPageProps): Promise<Metadata> {
  const { category: categoryParams } = await params;
  const { articles, category } = await getArticleListByCategory(categoryParams);

  return {
    description: `Статьи по теме "${category.title}" — практические гайды, рекомендации и разборы: ${articles
      .map((article) => article.title)
      .join(', ')}. Изучайте современные подходы, улучшайте навыки и находите решения для своих проектов.`,
    title: getMetadataTitle(category.title),
  };
}
