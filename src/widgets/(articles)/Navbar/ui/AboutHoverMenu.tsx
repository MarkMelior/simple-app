'use client';

import { cn } from '@/shared/lib/common';
import { AboutSection } from '@/shared/ui';

import { useArticleNavbar } from '../store';

import styles from './aboutHoverMenu.module.scss';

export const AboutHoverMenu = () => {
  const { isHoveredButton, isHoveredMenu, setIsHoveredMenu } = useArticleNavbar();

  const isVisible = isHoveredButton || isHoveredMenu;

  return (
    <div
      className={cn(styles.menu, { [styles.opened]: isVisible })}
      onMouseEnter={() => setIsHoveredMenu(true)}
      onMouseLeave={() => setIsHoveredMenu(false)}
    >
      {/* // ? Может убрать content */}
      <div className={styles.content}>
        <AboutSection isVisible={isVisible} />
      </div>
    </div>
  );
};
