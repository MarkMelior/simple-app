'use client';

import { cn } from '@/shared/lib/common';
import { useScrolled } from '@/shared/lib/react';
import { Flex } from '@/shared/ui';

import styles from './navbar.module.scss';

import type { FC, ReactNode } from 'react';

interface NavbarScrollProps {
  children: ReactNode
  className?: string
}

export const NavbarScroll: FC<NavbarScrollProps> = ({ children, className }) => {
  const isScrolled = useScrolled();

  return (
    <Flex
      align="items-center"
      className={cn(styles.wrapper, 'max-w-8xl', className)}
      justify="justify-end"
    >
      <div className={cn(styles.navbar, { [styles.navbarOpen]: isScrolled })}>
        {children}
      </div>
    </Flex>
  );
};
