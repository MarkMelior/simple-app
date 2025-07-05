import { Header } from '@/widgets/(articles)/Header';

import { APP_NAME } from '@/shared/constants';
import { Spacer } from '@/shared/ui';

import type { Metadata } from 'next';

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

export const metadata: Metadata = {
  description:
    `Загрузка статьи на ${APP_NAME}: скоро вы получите доступ к подробному гайду, практическим примерам и обзорам современных технологий. Подождите немного — контент уже в пути!`,
  title: `Загрузка статьи — ${APP_NAME}`,
};
