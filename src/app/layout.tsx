import { Suspense } from 'react';

import { FontDefault } from '@/shared/constants/fonts';
import { PortalEnum } from '@/shared/lib/react';
import { Light, PageLoader } from '@/shared/ui';
import { GlowingLine } from '@/shared/ui/client';

import { ScrollUp } from '@/features';
import { Footer, Navbar, Sidebar } from '@/widgets';

import { HeroUIProvider, MessageProvider, NextThemesProvider } from './providers';

import type { Metadata } from 'next';

import './globals.scss';
import '@/shared/styles/tailwind.css';

export const metadata: Metadata = {
  description: 'Small and modern pet-projects. Hi, I\'am Mark Melior - Frontend developer.',
  title: 'Simple App | Mark Melior',
};

type Props = {
  children: React.ReactNode
};

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <body className={FontDefault.className}>
        <NextThemesProvider>
          <HeroUIProvider>
            <MessageProvider>
              {/* TODO: Move to layout */}
              <Suspense
                fallback={(
                  <>
                    <Light />
                    <PageLoader fullScreen={true} />
                  </>
                )}
              >
                <Light />
                <ScrollUp />
                <GlowingLine className="fixed z-50 top-0" />
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-20 grid lg:grid-cols-[17.5rem,1fr] gap-10">
                  <div className="hidden lg:grid z-10 -mt-[var(--height-navbar)] sticky top-0 w-[17.5rem] max-h-screen h-screen gap-3 grid-rows-2">
                    <Sidebar />
                    <div id={PortalEnum.Headlines} />
                  </div>
                  <div className="xl:max-w-none xl:ml-0 min-h-[var(--height-screen)] flex flex-col justify-between">
                    {children}
                    <Footer />
                  </div>
                </div>
              </Suspense>
            </MessageProvider>
          </HeroUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
