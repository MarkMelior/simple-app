'use client';

import { cn } from '@/shared/lib/common';
import { AboutSection, ArticlesSection } from '@/shared/ui';

import type { ArticlesListResponse } from '@/entities/articles';

import { headerSections } from '../../constants';
import { useHeader } from '../../store';

import styles from './headerMenu.module.scss';

import type { CSSProperties, FC } from 'react';

interface HeaderMenuProps {
  articlesList: ArticlesListResponse[]
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ articlesList }) => {
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
        {/* <AppsSection isVisible={isVisible('apps')} /> */}
        <ArticlesSection articlesList={articlesList} isVisible={isVisible('resources')} />
      </div>
    </div>
  );
};
