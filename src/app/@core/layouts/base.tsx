import { Header } from '@/widgets/Header';

import type { ReactNode } from 'react';

interface BaseLayoutProps {
  children: ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => (
  <>
    <Header />
    {children}
    {/* <Footer /> */}
  </>
);
