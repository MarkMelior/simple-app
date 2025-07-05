import { ArticlesListContent, CategoriesArticleModal } from '@/entities/articles';

/**
 * Регистрируем все будущие клиентские модалки здесь
 */
export const ModalRoot = () => (
  <>
    <CategoriesArticleModal>
      <ArticlesListContent />
    </CategoriesArticleModal>
  </>
);
