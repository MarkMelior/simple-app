import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LocalStorageKeys } from '@/shared/constants';
import type { FromTo, Sort } from '@/shared/types';

import type { ArticlesCategoryEnum } from '../types';

interface ArticlesFilters {
  categories?: ArticlesCategoryEnum[]
  createdAt?: FromTo
  isOnlyNotViewed?: boolean
  updatedAt?: FromTo
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ArticlesSettings {
  // TODO
}

export type ArticlesSortField = 'createdAt' | 'updatedAt' | 'title';

interface ArticlesStore {
  addViewedArticleSlug: (slug: string) => void
  filters: ArticlesFilters
  settings: ArticlesSettings
  sort: Sort<ArticlesSortField>
  viewedArticleSlugs: string[]
};

export const useArticles = create<ArticlesStore>()(
  persist(
    (set, get) => ({
      addViewedArticleSlug: (slug) => {
        if (get().viewedArticleSlugs.includes(slug)) {
          return;
        }
        set((state) => ({
          viewedArticleSlugs: [...state.viewedArticleSlugs, slug],
        }));
      },
      filters: {},
      settings: {},
      sort: { field: 'title', order: 'desc' },
      viewedArticleSlugs: [],
    }),
    {
      name: LocalStorageKeys.ARTICLES,
      partialize: (state) => ({
        viewedArticleSlugs: state.viewedArticleSlugs,
      }),
    },
  ));
