import { NotFound as NotFoundContent } from '@/widgets/NotFound';

import { APP_NAME } from '@/shared/constants';

import { MinimalLayout } from '@/core/layouts/minimal';

import type { Metadata } from 'next';

export default async function NotFound() {
  return (
    <MinimalLayout>
      <NotFoundContent emoji="😔" />
    </MinimalLayout>
  );
}

export const metadata: Metadata = {
  description:
    `Страница не найдена на ${APP_NAME}. Возможно, вы ошиблись в URL или страница была удалена. Перейдите на главную или воспользуйтесь поиском по каталогу статей.`,
  title: `Страница не найдена :: ${APP_NAME}`,
};
