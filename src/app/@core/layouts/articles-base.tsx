import { Navbar } from '@/widgets/(articles)/Navbar';
import { Footer } from '@/widgets/Footer';

import { Light, Spacer } from '@/shared/ui';

import type { ReactNode } from 'react';

interface ArticlesBaseLayoutProps {
  children: ReactNode
}

export const ArticlesBaseLayout = ({ children }: ArticlesBaseLayoutProps) => (
  <>
    <Light />
    {/* TODO: Что за 173px ? Нужно убрать */}
    <Navbar className="max-w-6xl" />
    <div className="mx-auto min-h-[calc(100vh-173px)] max-w-6xl px-4 sm:px-6 md:px-8">
      <Spacer y={16} />
      {children}
    </div>
    <Footer />
  </>
);
