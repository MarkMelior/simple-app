import { clsx } from 'clsx';

import type {
  AsComponent,
  TwTextColor,
  TwTextSize,
  TwWeight,
} from '@/shared/types';

import type { ReactNode } from 'react';

interface TextProps {
  align?: 'text-center'
  as?: AsComponent
  children: ReactNode
  className?: string
  color?: TwTextColor
  customColor?: string
  decoration?: 'line-through'
  size?: TwTextSize | number
  weight?: TwWeight
}

export const Text = ({
  align,
  as: Component = 'span',
  children,
  className,
  color,
  customColor,
  decoration,
  size,
  weight,
}: TextProps) => (
  <Component
    className={clsx(
      {
        [`${align}`]: align,
        [`${color}`]: color,
        [`${decoration}`]: decoration,
        [`${size}`]: typeof size === 'string',
        [`${weight}`]: weight,
      },
      className,
    )}
    style={{
      color: customColor,
      fontSize: typeof size === 'number' ? `${size}rem` : undefined,
      lineHeight: typeof size === 'number' ? `${size + 0.5}rem` : undefined,
    }}
  >
    {children}
  </Component>
);
