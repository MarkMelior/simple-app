'use client';

import { cn } from '@/shared/lib/common';
import { usePerformance } from '@/shared/lib/performance';
import { useMouse } from '@/shared/lib/react';
import type { HeroBackgroundColor, TwBackgroundColor, TwRounded } from '@/shared/types';

import styles from './glowingBox.module.scss';

import type { CSSProperties, FC, ReactNode } from 'react';

interface GlowingBoxClassnames {
  background?: string
  foreground?: string
}

interface GlowingBoxProps {
  backgroundColor?: TwBackgroundColor | HeroBackgroundColor
  borderColor?: TwBackgroundColor | HeroBackgroundColor
  /** Сила свечения границ при наведении (от 0 до 1) */
  borderStrengthHover?: number
  borderWidth?: number
  children: ReactNode
  classNames?: GlowingBoxClassnames
  rounded?: TwRounded
  size?: number
  variant?: 'purple-gradient' | 'soft-orange'
}

export const GlowingBox: FC<GlowingBoxProps> = ({
  backgroundColor = 'bg-default-100',
  borderColor = 'bg-default-200',
  borderStrengthHover = 0.7,
  borderWidth = 1,
  children,
  classNames,
  rounded = 'rounded-md',
  size = 100,
  variant = 'purple-gradient',
}) => {
  const { isDisabledAnimation } = usePerformance();
  const [mousePosition, ref] = useMouse(isDisabledAnimation);

  const style = {
    '--mouse-x': isDisabledAnimation ? '0px' : `${mousePosition.x}px`,
    '--mouse-y': isDisabledAnimation ? '0px' : `${mousePosition.y}px`,
    '--spotlight-bg-size': `${size * 15}px`,
    '--spotlight-bg-strength': 0,
    '--spotlight-bg-strength-hover': 0.04,
    '--spotlight-border-size': `${size * 6}px`,
    '--spotlight-border-strength': 0,
    '--spotlight-border-strength-hover': borderStrengthHover,
    'padding': `${borderWidth}px`,
  } as CSSProperties;

  return (
    <div
      className={cn(
        styles.wrapper,
        styles[variant],
        rounded,
        borderColor,
        classNames?.foreground,
      )}
      ref={isDisabledAnimation ? undefined : ref}
      style={style}
    >
      <div
        className={cn(
          'relative transition z-10',
          backgroundColor,
          rounded,
          classNames?.background,
        )}
      >
        {children}
      </div>
    </div>
  );
};
