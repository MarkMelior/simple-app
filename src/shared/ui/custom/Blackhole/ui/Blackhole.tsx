import { cn } from '@/shared/lib/common';

import styles from './blackhole.module.scss';

import type { FC } from 'react';

interface BlackholeProps {
  className?: string
  disabledOnMobile?: boolean
  flip?: boolean
}

export const Blackhole: FC<BlackholeProps> = ({ className, flip }) => (
  <div
    className={cn(
      'select-none pointer-events-none',
      styles.wrapper,
      { [styles.flip]: flip },
      className,
    )}
  >
    <div className={styles.circles}>
      <div />
      <div />
      <div />
    </div>
    <video
      autoPlay={true}
      className={styles.video}
      loop={true}
      muted={true}
      playsInline={true}
    >
      <source src="/videos/blackhole.webm" />
    </video>
  </div>
);
