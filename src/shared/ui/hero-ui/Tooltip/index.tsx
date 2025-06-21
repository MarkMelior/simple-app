'use client';

import { Tooltip as HeroTooltip } from '@heroui/react';

import type { TooltipProps as HeroTooltipProps } from '@heroui/react';
import type { FC } from 'react';

export type TooltipProps = Pick<HeroTooltipProps,
  | 'children'
  | 'content'
  | 'placement'
  | 'size'
>;

export const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  placement,
  size,
}) => (
  <HeroTooltip
    content={content}
    placement={placement}
    size={size}
  >
    {children}
  </HeroTooltip>
);
