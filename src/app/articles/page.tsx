import { ArticlesListContent } from '@/entities/articles';

import { ArticlesBaseLayout } from '@/core/layouts/articles-base';

export default async function ArticlePage() {
  return (
    <ArticlesBaseLayout>
      <ArticlesListContent isFullPage={true} />
    </ArticlesBaseLayout>
  );
}
