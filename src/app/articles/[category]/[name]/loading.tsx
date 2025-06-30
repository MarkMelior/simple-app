import { Header } from '@/widgets/(articles)/Header';

import { Spacer } from '@/shared/ui';

export default async function ArticleLoading() {
  return (
    <>
      <Header
        description=""
        isLoading={true}
        note=""
        title=""
      />
      <Spacer y={32} />
    </>
  );
}
