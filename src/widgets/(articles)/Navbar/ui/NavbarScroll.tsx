'use client';

import { cn } from '@/shared/lib/common';
import { useScrolled } from '@/shared/lib/react';

import styles from './navbar.module.scss';

import type { FC, ReactNode } from 'react';

interface NavbarScrollProps {
  children: ReactNode
}

export const NavbarScroll: FC<NavbarScrollProps> = ({ children }) => {
  const isScrolled = useScrolled();

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbarWrapper}>
        <div className={cn(styles.navbar, { [styles.navbarOpen]: isScrolled })}>
          {children}
        </div>
      </div>
    </div>
  );
};
