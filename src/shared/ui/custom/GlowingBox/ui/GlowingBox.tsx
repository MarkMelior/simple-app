'use client';

import { cn } from '@/shared/lib/common';
import { useMouse } from '@/shared/lib/react';

import { glowingStyle } from '../constants';

import styles from './glowingBox.module.scss';

import type { CSSProperties, FC, ReactNode } from 'react';

interface GlowingBoxClassnames {
  background?: string
  border?: string
  common?: string
}

interface GlowingBoxProps {
  children: ReactNode
  classNames?: GlowingBoxClassnames
}

export const GlowingBox: FC<GlowingBoxProps> = ({ children, classNames }) => {
  const [mousePosition, ref] = useMouse();

  const style = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
    ...glowingStyle,
  } as CSSProperties;

  return (
    <div
      className={cn(
        styles.glowingIconbox,
        'rounded-md p-[1px] bg-default-100',
        classNames?.common,
        classNames?.border,
      )}
      ref={ref}
      style={style}
    >
      <div
        className={cn(
          'rounded-md relative transition z-10',
          classNames?.common,
          classNames?.background,
        )}
      >
        {children}
      </div>
    </div>
  );
};
