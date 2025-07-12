import { clsx } from 'clsx';

import type { AsComponent, HeroBackgroundColor, TwRounded, TwSize } from '@/shared/types';

import type { ReactNode } from 'react';

interface CardProps {
  as?: AsComponent
  background?: HeroBackgroundColor
  children: ReactNode
  className?: string
  full?: boolean
  paddingHorizontal?: `px-${TwSize}`
  paddingVertical?: `py-${TwSize}`
  rounded?: TwRounded
}

export const Card = ({
  as: Component = 'div',
  background = 'bg-default-200',
  children,
  className,
  full,
  paddingHorizontal = 'px-1',
  paddingVertical = 'py-2',
  rounded = 'rounded-lg',
}: CardProps) => (
  <Component
    className={clsx(
      {
        [background]: background,
        [paddingHorizontal]: paddingHorizontal,
        [paddingVertical]: paddingVertical,
        [rounded]: rounded,
        ['w-full']: full,
      },
      className,
    )}
  >
    {children}
  </Component>
);
