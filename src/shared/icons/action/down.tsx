import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

import { cn } from '../../lib/common';

interface DownIcon extends IIcon {
  isActive?: boolean
}

export const DownIcon = ({
  className,
  fill = 'currentColor',
  height = 16,
  isActive,
  strokeWidth = 4,
  width = 16,
}: DownIcon) => (
  <Icon
    className={cn({ 'rotate-180': isActive }, 'transition-transform ease-in-out', className)}
    height={height}
    viewBox="0 0 48 48"
    width={width}
  >
    <svg
      height="48"
      viewBox="0 0 48 48"
      width="48"
      x="0"
      xmlns="http://www.w3.org/2000/svg"
      y="0"
    >
      <path
        d="M36 18L24 30L12 18"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  </Icon>
);
