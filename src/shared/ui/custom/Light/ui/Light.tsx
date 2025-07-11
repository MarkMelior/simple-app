import { PublicImages } from '@/shared/constants';
import { cn } from '@/shared/lib/common';

import styles from './light.module.scss';

import type { FC } from 'react';

interface LightProps {
  classNames?: {
    background?: string
    blink?: string
  }
  variant?: 'first' | 'second' | 'two'
}

export const Light: FC<LightProps> = ({ classNames }) => (
  <div className="pointer-events-none z-light select-none">
    <div
      className={cn(
        'absolute top-0 inset-x-0 flex justify-center overflow-hidden max-h-screen',
        styles.fadeIn,
        classNames?.blink,
      )}
    >
      <div className="flex w-[108rem] flex-none justify-end">
        <picture>
          <source srcSet={PublicImages.interface.Light} type="image/avif" />
          <img
            alt=""
            className="w-[71.75rem] max-w-none flex-none dark:hidden"
            decoding="async"
            src={PublicImages.interface.Light}
          />
        </picture>

        <picture>
          <source srcSet={PublicImages.interface.LightDark} type="image/avif" />
          <img
            alt=""
            className="hidden w-[90rem] max-w-none flex-none dark:block"
            decoding="async"
            src={PublicImages.interface.LightDark}
          />
        </picture>
      </div>
    </div>
    <div className={classNames?.background}>
      <span className={styles.ellipse1} />
      <span className={styles.ellipse2} />
      <span className={styles.ellipse3} />
    </div>
  </div>
);
