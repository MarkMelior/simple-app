'use client';

import { Spinner as HeroSpinner } from '@heroui/react';

import type { SpinnerProps as HeroSpinnerProps } from '@heroui/react';
import type { FC } from 'react';

export type SpinnerProps = Pick<HeroSpinnerProps,
  | 'size'
  | 'className'
>;

export const Spinner: FC<SpinnerProps> = ({
  className,
  size,
}) => (
  <HeroSpinner
    className={className}
    size={size}
  />
);
