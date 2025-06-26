import { clsx } from 'clsx';

import type {
  AsComponent,
  HeroTextColor,
  TwTextSize,
  TwWeight,
} from '@/shared/types';

import type { ReactNode } from 'react';

interface TextProps {
  align?: 'text-center'
  as?: AsComponent
  children: ReactNode
  className?: string
  color?: HeroTextColor
  customColor?: string
  decoration?: 'line-through'
  /**
   * Размер шрифта
   *
   * @size xs - 12px
   * @size sm - 14px
   * @size base - 16px
   * @size lg - 18px
   * @size xl - 20px
   * @size 2xl - 24px
   * @size 3xl - 30px
   */
  size?: TwTextSize | number
  uppercase?: boolean
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
  uppercase,
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
        ['uppercase']: uppercase,
      },
      className,
    )}
    style={{
      color: customColor,
      fontSize: typeof size === 'number' ? `${size}px` : undefined,
      lineHeight: typeof size === 'number' ? `${size + 8}px` : undefined,
    }}
  >
    {children}
  </Component>
);
