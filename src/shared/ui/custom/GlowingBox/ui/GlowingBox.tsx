'use client';

import { cn, useMouse } from '@/shared/lib/react';

import { glowingStyle } from '../constants';

import styles from './glowingBox.module.scss';

import type { FC } from 'react';

interface GlowingBoxClassnames {
  background?: string
  border?: string
  common?: string
}

interface GlowingBoxProps {
  children: React.ReactNode
  className?: string
  classNames?: GlowingBoxClassnames
}

export const GlowingBox: FC<GlowingBoxProps> = ({ children, classNames }) => {
  const [mousePosition, ref] = useMouse();

  const style = {
    '--mouse-x': `${mousePosition.elementX}px`,
    '--mouse-y': `${mousePosition.elementY}px`,
    ...glowingStyle,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        styles.glowingIconbox,
        'rounded-md p-[1px] bg-default-400',
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
