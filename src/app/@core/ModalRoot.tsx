import { ArticlesModal, getArticlesList } from '@/entities/articles';

/**
 * Регистрируем все модалки здесь
 */
export const ModalRoot = async () => {
  const articlesList = await getArticlesList();

  return (
    <>
      <ArticlesModal articlesList={articlesList} />
    </>
  );
};
