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
    <div className="mx-auto mb-4 max-w-6xl px-4 sm:px-6 md:px-8">
      <Spacer y={20} />
      {children}
    </div>
    <FooterContent className="mb-6 mt-12" />
  </>
);
