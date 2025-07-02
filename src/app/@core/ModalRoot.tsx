'use client';

import { useModals } from '@/shared/lib/common';

import { ArticlesModal } from '@/entities/articles';

/**
 * Регистрируем все модалки здесь
 */
export const ModalRoot = () => {
  const { isOpen: isArticlesOpen, options: articlesOptions, toggle: toggleArticles } = useModals('articles');

  return (
    <>
      <ArticlesModal isOpen={isArticlesOpen} options={articlesOptions} toggle={toggleArticles} />
    </>
  );
};
