import type { ArticlesSortField } from '../store';

export const articlesSortName: Record<ArticlesSortField, string> = {
  createdAt: 'Дата создания',
  title: 'Название',
  updatedAt: 'Дата обновления',
};

export const articlesDirectory = 'src/entities/articles/articles';
