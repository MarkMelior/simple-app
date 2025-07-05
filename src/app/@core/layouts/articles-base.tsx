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
    <Navbar />
    {/* TODO: Что за 173px ? Нужно убрать */}
    <div className="mx-auto min-h-[calc(100vh-173px)] max-w-6xl">
      <Spacer y={16} />
      {children}
    </div>
    <Footer />
  </>
);
