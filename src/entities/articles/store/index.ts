import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LocalStorageKeys } from '@/shared/constants';

interface ArticlesStore {
  addViewedArticleSlug: (slug: string) => void
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
      viewedArticleSlugs: [],
    }),
    {
      name: LocalStorageKeys.ARTICLES,
      partialize: (state) => ({ viewedArticleSlugs: state.viewedArticleSlugs }),
    },
  ));
