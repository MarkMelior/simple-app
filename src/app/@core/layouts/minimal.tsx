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
    {children}
  </>
);
