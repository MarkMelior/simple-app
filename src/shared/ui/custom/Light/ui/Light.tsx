import { cn } from '@/shared/lib/react';

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
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source srcSet="/images/light.avif" type="image/avif" />
            <img
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              decoding="async"
              src="/images/light.avif"
            />
          </picture>

          <picture>
            <source srcSet="/images/light-dark.avif" type="image/avif" />
            <img
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
              src="/images/light-dark.avif"
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
