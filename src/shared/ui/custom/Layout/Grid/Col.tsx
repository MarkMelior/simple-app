import { clsx } from 'clsx';

import type { AsComponent, TwJustify } from '@/shared/types';

import type { ReactNode } from 'react';

interface ColProps {
  as?: AsComponent
  children: ReactNode
  className?: string
  justify?: TwJustify
  span?: number // span: 1–24
}

export const Col = ({
  as: Component = 'div',
  children,
  className,
  justify,
  span = 24,
}: ColProps) => (
  <Component
    className={clsx(
      className,
      'flex',
      {
        [String(justify)]: justify,
      },
    )}
    style={{ width: `${(span / 24) * 100}%` }}
  >
    {children}
  </Component>
);
