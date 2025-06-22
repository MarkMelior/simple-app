'use client';

import { Progress as HeroProgress } from '@heroui/react';

import type { ProgressProps as HeroProgressProps } from '@heroui/react';
import type { FC } from 'react';

export type ProgressProps = Pick<HeroProgressProps,
  | 'className'
  | 'color'
  | 'size'
  | 'style'
>;

export const Progress: FC<ProgressProps> = ({
  className,
  color,
  size,
  style,
}) => (
  <HeroProgress
    className={className}
    color={color}
    size={size}
    style={style}
  />
);
