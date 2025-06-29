import { PublicImages } from '@/shared/constants';
import { cn } from '@/shared/lib/common';

import styles from './light.module.scss';

import type { FC } from 'react';

interface LightProps {
  variant?: 'first' | 'second' | 'two'
}

export const Light: FC<LightProps> = ({ variant = 'two' }) => (
  <>
    {(variant === 'first' || variant === 'two') && (
      <div
        className={cn(
          'absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none max-h-screen',
          styles.fadeIn,
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
    )}
    {(variant === 'second' || variant === 'two') && (
      <div className={cn(styles.light)}>
        <span className={styles.ellipse1} />
        <span className={styles.ellipse2} />
        <span className={styles.ellipse3} />
      </div>
    )}
  </>
);
