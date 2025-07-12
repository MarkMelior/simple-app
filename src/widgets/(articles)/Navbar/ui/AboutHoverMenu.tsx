'use client';

import { cn } from '@/shared/lib/common';
import { AboutSection } from '@/shared/ui';

import { useArticleNavbar } from '../store';

import styles from './aboutHoverMenu.module.scss';

import type { FC } from 'react';

interface AboutHoverMenuProps {
  className?: string
}

export const AboutHoverMenu: FC<AboutHoverMenuProps> = ({ className }) => {
  const { isHoveredButton, isHoveredMenu, setIsHoveredMenu } = useArticleNavbar();

  const isVisible = isHoveredButton || isHoveredMenu;

  return (
    <div
      className={cn(styles.menu, { [styles.opened]: isVisible }, className)}
      onMouseEnter={() => setIsHoveredMenu(true)}
      onMouseLeave={() => setIsHoveredMenu(false)}
    >
      <AboutSection className={styles.content} isSupportMe={true} isVisible={isVisible} />
    </div>
  );
};
