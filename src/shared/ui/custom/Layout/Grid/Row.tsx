import { clsx } from 'clsx';

import type { AsComponent, TwAlignItems, TwGap, TwJustify } from '@/shared/types';

import type { ReactNode } from 'react';

interface RowProps {
  align?: TwAlignItems
  as?: AsComponent
  children: ReactNode
  className?: string
  gap?: TwGap
  justify?: TwJustify
}

export const Row = ({
  align = 'items-stretch',
  as: Component = 'div',
  children,
  className,
  gap,
  justify = 'justify-start',
}: RowProps) => (
  <Component
    className={clsx(
      'flex',
      align,
      justify,
      gap,
      className,
    )}
  >
    {children}
  </Component>
);
