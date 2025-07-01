import { cn } from '../classNames';

import styles from './shading.module.scss';

import type { FC } from 'react';

interface ShadingProps {
  variant?: 'blur' | 'opaque'
}

// TODO
export const Shading: FC<ShadingProps> = ({ variant = 'opaque' }) => (
  <div
    className={cn(
      styles.wrapper,
      { [variant]: variant },
    )}
  />
);
