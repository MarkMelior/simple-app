import { Footer } from '@/widgets/(articles)/Footer';
import { Navbar } from '@/widgets/(articles)/Navbar';
import { Sidebar } from '@/widgets/(articles)/Sidebar';

import { Light, Spacer } from '@/shared/ui';

import { ScrollUp } from '@/features/ScrollUp';

import type { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode
}

const ArticlesLayout: FC<LayoutProps> = ({ children }) => (
  <>
    <Light />
    <ScrollUp />
    {/* <GlowingLine className="fixed top-0 z-50" /> */}
    <Navbar />
    <div className="z-20 mx-auto grid max-w-8xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[17.5rem,1fr]">
      <Sidebar />
      <div className="min-h-[calc(100vh - theme('spacing.articlesNavbar'))] flex flex-col xl:ml-0 xl:max-w-none">
        <Spacer y={16} />
        {children}
        <Footer />
      </div>
    </div>
  </>
);

export default ArticlesLayout;
