import { Suspense } from 'react';

import { Fonts } from '@/shared/constants';
import { Light, PageLoader } from '@/shared/ui';
import { ScrollShadow } from '@/shared/ui/client';

import { ScrollUp } from '@/features/ScrollUp';

import { ModalRoot } from '@/core/modal-root';
import { HeroUIProvider, NextThemesProvider } from '@/core/providers';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.scss';
import '@/shared/styles/tailwind.css';
import '@/shared/styles/animations.scss';

export const metadata: Metadata = {
  description: '❤️ Лучший сайт-портфолио, мини-приложения, блог на mdx. Я Frontend-разработчик из Сбер, здесь я делюсь своим опытом из разных сфер и вдохновляю людей на новые идеи (:',
  title: 'Melior :: Frontend',
};

type Props = {
  children: ReactNode
};

const RootLayout = async ({ children }: Readonly<Props>) => (
  <html lang="ru" suppressHydrationWarning={true}>
    <body className={Fonts.default}>
      <NextThemesProvider>
        <HeroUIProvider>
          <ScrollShadow>
            <Suspense
              fallback={(
                <>
                  <Light />
                  <PageLoader fullScreen={true} />
                </>
              )}
            >
              {children}
            </Suspense>

            <ScrollUp />
            <div id="message-root" />
            <ModalRoot />

          </ScrollShadow>
        </HeroUIProvider>
      </NextThemesProvider>
    </body>
  </html>
);

export default RootLayout;
