'use client';

import { usePerformance } from '@/shared/lib/performance';

import styles from './bluredLight.module.scss';

export const BluredLight = () => {
  const { isDisabledAnimation } = usePerformance();

  if (isDisabledAnimation) {
    return null;
  }

  return (
    <div>
      <span className={styles.ellipse1} />
      <span className={styles.ellipse2} />
      <span className={styles.ellipse3} />
    </div>
  );
};
