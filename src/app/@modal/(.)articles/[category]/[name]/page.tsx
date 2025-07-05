import type { ArticlePageProps } from '@/app/articles/[category]/[name]/page';
import ArticlePage from '@/app/articles/[category]/[name]/page';

import { ModalClient } from './modal';

import type { FC } from 'react';

const ModalServer: FC<ArticlePageProps> = ({ params }) => (
  <ModalClient>
    <ArticlePage params={params} />
  </ModalClient>
);

export default ModalServer;
