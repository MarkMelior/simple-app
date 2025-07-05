import { cn } from '@/shared/lib/common';

import styles from './miniAppSection.module.scss';

import type { FC } from 'react';

interface MiniAppSectionProps {
  isVisible: boolean
}

export const MiniAppSection: FC<MiniAppSectionProps> = ({ isVisible }) => (
  <div
    className={cn(
      styles.resources,
      { [styles.visible]: isVisible },
    )}
    id="resources"
    style={{ display: isVisible ? 'block' : 'none' }}
  >
    Скоро во всех кинотеатрах страны
  </div>
);
