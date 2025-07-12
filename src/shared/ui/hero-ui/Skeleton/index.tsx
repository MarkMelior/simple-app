'use client';

import { Skeleton as HeroSkeleton } from '@heroui/react';

import type { SkeletonProps as HeroSkeletonProps } from '@heroui/react';
import type { FC } from 'react';

type SkeletonProps = Pick<HeroSkeletonProps,
  | 'className'
  | 'style'
>;

export const Skeleton: FC<SkeletonProps> = ({
  className,
  style,
}) => (
  <HeroSkeleton
    className={className}
    style={style}
  />
);
