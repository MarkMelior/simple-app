'use client';

import { cn } from '@/shared/lib/common';
import { AboutSection, MiniAppSection } from '@/shared/ui';

import { headerSections } from '../../constants';
import { useHeader } from '../../store';

import styles from './headerMenu.module.scss';

import type { CSSProperties } from 'react';

export const HeaderMenu = () => {
  const { activeSection, isHoveredMenu, isVisible, lastActiveSection, setIsHoveredMenu } = useHeader();

  const style = lastActiveSection ? {
    '--menu-width': `${headerSections[lastActiveSection].width}px`,
  } as CSSProperties : {};

  return (
    <div
      className={cn(styles.menu, { [styles.opened]: activeSection || isHoveredMenu })}
      onMouseEnter={() => setIsHoveredMenu(true)}
      onMouseLeave={() => setIsHoveredMenu(false)}
      style={style}
    >
      <div className={styles.content}>
        <AboutSection isVisible={isVisible('about')} />
        <MiniAppSection isVisible={isVisible('apps')} />
      </div>
    </div>
  );
};
