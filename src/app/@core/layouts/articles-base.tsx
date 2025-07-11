import { Navbar } from '@/widgets/(articles)/Navbar';

import { FooterContent, Light, Spacer } from '@/shared/ui';

import type { ReactNode } from 'react';

interface ArticlesBaseLayoutProps {
  children: ReactNode
}

export const ArticlesBaseLayout = ({ children }: ArticlesBaseLayoutProps) => (
  <>
    <Light />
    <Navbar maxWidth="max-w-6xl" />
    {/* TODO: Что за 168px ? Нужно убрать */}
    <div className="mx-auto min-h-[calc(100vh-168px)] max-w-6xl px-4 sm:px-6 md:px-8">
      <Spacer y={16} />
      {children}
    </div>
    <FooterContent className="mb-6 mt-12" />
  </>
);
