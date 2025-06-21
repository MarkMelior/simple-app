'use client';

import { Card as HeroCard } from '@heroui/react';

import type { CardProps as HeroCardProps } from '@heroui/react';
import type { FC } from 'react';

export type CardProps = Pick<HeroCardProps,
  | 'children'
  | 'className'
>;

export const Card: FC<CardProps> = ({
  children,
  className,
}) => (
  <HeroCard
    className={className}
  >
    {children}
  </HeroCard>
);
