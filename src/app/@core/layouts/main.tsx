import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import { Light } from '@/shared/ui';

import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Light />
    <Header />
    {children}
    <Footer />
  </>
);
