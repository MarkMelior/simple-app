'use client';

import { Progress as HeroProgress } from '@heroui/react';

import type { ProgressProps as HeroProgressProps } from '@heroui/react';
import type { FC } from 'react';

export type ProgressProps = Pick<HeroProgressProps,
  | 'className'
  | 'color'
  | 'size'
>;

export const Progress: FC<ProgressProps> = ({
  className,
  color,
  size,
}) => (
  <HeroProgress
    className={className}
    color={color}
    size={size}
  />
);
