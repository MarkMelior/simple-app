import { ArticleListContent } from '@/app/articles/content';

import { ModalClient } from './modal';

const ModalServer = () => (
  <ModalClient>
    <ArticleListContent />
  </ModalClient>
);

export default ModalServer;
