'use client';

import { Skeleton as HeroSkeleton } from '@heroui/react';

import type { SkeletonProps as HeroSkeletonProps } from '@heroui/react';
import type { FC } from 'react';

type SkeletonProps = Pick<HeroSkeletonProps,
  | 'className'
>;

export const Skeleton: FC<SkeletonProps> = ({
  className,
}) => (
  <HeroSkeleton
    className={className}
  />
);
