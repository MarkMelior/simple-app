'use client';

import { NotFound as NotFoundContent } from '@/widgets/NotFound';

import { APP_NAME } from '@/shared/constants';
import { CodeBlock } from '@/shared/ui';

import { MinimalLayout } from '@/core/layouts/minimal';

import type { Metadata } from 'next';

interface ErrorProps {
  error: Error & { digest?: string }
}

export default function Error({ error }: ErrorProps) {
  return (
    <MinimalLayout>
      <NotFoundContent
        buttonText="Вернуться на главную"
        description={(
          <CodeBlock
            className="max-w-xl"
            copiedText="Текст ошибки скопирован"
            disableLineNumbers={true}
            filename="Текст ошибки"
            hideLangIcon={true}
            text={error.message}
          />
        )}
        title={error.name ?? 'Неизвестная ошибка'}
      />
    </MinimalLayout>
  );
}

export const metadata: Metadata = {
  description: `Произошла ошибка при загрузке страницы на ${APP_NAME}. Возможно, страница временно недоступна или произошёл сбой. Попробуйте обновить страницу или вернитесь на главную.`,
  title: `Ошибка :: ${APP_NAME}`,
};
