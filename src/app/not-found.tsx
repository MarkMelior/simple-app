import { APP_NAME } from '@/shared/constants';

import type { Metadata } from 'next';

export default async function NotFound() {
  return <>Страница не существует</>;
}

export const metadata: Metadata = {
  description:
    `Страница не найдена на ${APP_NAME}. Возможно, вы ошиблись в URL или страница была удалена. Перейдите на главную или воспользуйтесь поиском по каталогу статей.`,
  title: `Страница не найдена — ${APP_NAME}`,
};
