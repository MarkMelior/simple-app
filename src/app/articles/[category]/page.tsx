import { CategoryCard } from '@/widgets/(articles)/CategoryCard';
import { Header } from '@/widgets/(articles)/Header';

import { getMetadataTitle } from '@/shared/lib/text';

import type { ArticlesCategoryEnum } from '@/entities/articles';
import { getProjectListByCategory } from '@/entities/articles';

import type { Metadata } from 'next';

export type ProjectCategoryPageProps = {
  params: Promise<{ category: ArticlesCategoryEnum }>
};

export default async function ProjectCategoryPage({ params }: ProjectCategoryPageProps) {
  const { category: categoryParams } = await params;
  const { category, projects } = await getProjectListByCategory(categoryParams);

  return (
    <div>
      <Header
        description="Здесь находятся все проекты из данной категории"
        note="Категория"
        title={category.title}
      />

      <CategoryCard projects={projects} />
    </div>
  );
}

export async function generateMetadata({ params }: ProjectCategoryPageProps): Promise<Metadata> {
  const { category: categoryParams } = await params;
  const { category, projects } = await getProjectListByCategory(categoryParams);

  return {
    description: `Category: ${category.title}. Projects: ${projects
      .map((project) => project.title)
      .join(', ')}.`,
    title: getMetadataTitle(category.title),
  };
}
