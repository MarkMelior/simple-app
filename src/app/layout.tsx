import { Suspense } from 'react';

import { FontDefault } from '@/shared/constants';
import { Light, PageLoader } from '@/shared/ui';

import { HeroUIProvider, NextThemesProvider } from './@core/providers';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.scss';
import '@/shared/styles/tailwind.css';

export const metadata: Metadata = {
  description: 'Small and modern pet-projects. Hi, I\'am Mark Melior - Frontend developer.',
  title: 'Melior | Frontend',
};

type Props = {
  children: ReactNode
};

const RootLayout = async ({ children }: Readonly<Props>) => (
  <html lang="ru" suppressHydrationWarning={true}>
    <body className={FontDefault.className}>
      <NextThemesProvider>
        <HeroUIProvider>
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
          {/* <div id="modal-root" /> */}
          <div id="message-root" />
        </HeroUIProvider>
      </NextThemesProvider>

    </body>
  </html>
);

export default RootLayout;
