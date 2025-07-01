import { Header } from '@/widgets/Header';

import { Light } from '@/shared/ui';

import type { ReactNode } from 'react';

interface BaseLayoutProps {
  children: ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => (
  <>
    <Light />
    <Header />
    {children}
    {/* <Footer /> */}
  </>
);
