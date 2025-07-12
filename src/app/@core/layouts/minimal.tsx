import { Header } from '@/widgets/Header';

import { Light } from '@/shared/ui';

import type { ReactNode } from 'react';

interface MinimalLayoutProps {
  children: ReactNode
}

export const MinimalLayout = ({ children }: MinimalLayoutProps) => (
  <>
    <Header />
    <Light />
    <div className="px-4 sm:px-6 md:px-8">
      {children}
    </div>
  </>
);
