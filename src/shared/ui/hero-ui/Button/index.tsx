'use client';

import { Button as HeroButton } from '@heroui/react';

import { cn } from '@/shared/lib/common';

import type { ButtonProps as HeroButtonProps } from '@heroui/react';
import type { FC } from 'react';

export type ButtonProps = Pick<HeroButtonProps,
  | 'as'
  | 'children'
  | 'className'
  | 'color'
  | 'disabled'
  | 'disableRipple'
  | 'fullWidth'
  | 'href'
  | 'isDisabled'
  | 'isIconOnly'
  | 'isLoading'
  | 'onPress'
  | 'radius'
  | 'startContent'
  | 'target'
  | 'type'
  | 'variant'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'endContent'
  | 'style'
> & {
  'download'?: string
  'data-copied'?: boolean
  'data-menu'?: string
  'scroll'?: boolean
  'size'?: HeroButtonProps['size'] | 'xs'
};

export const Button: FC<ButtonProps> = ({
  as,
  children,
  className,
  color,
  disabled,
  disableRipple,
  download,
  endContent,
  fullWidth,
  href,
  isDisabled,
  isIconOnly,
  isLoading,
  onMouseEnter,
  onMouseLeave,
  onPress,
  radius,
  scroll,
  size,
  startContent,
  style,
  target,
  type,
  variant,
  ...props
}) => (
  <HeroButton
    as={as}
    className={cn(
      className,
      { 'text-[0.685rem] px-1.5 py-1 h-6 [&>svg]:max-w-[theme(spacing.4)] rounded-md gap-1.5': size === 'xs' },
    )}
    color={color}
    data-copied={props['data-copied']}
    disabled={disabled}
    disableRipple={disableRipple}
    download={download}
    endContent={endContent}
    fullWidth={fullWidth}
    href={href}
    isDisabled={isDisabled}
    isIconOnly={isIconOnly}
    isLoading={isLoading}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onPress={onPress}
    radius={radius}
    scroll={scroll}
    size={size === 'xs' ? 'sm' : size}
    startContent={startContent}
    style={style}
    target={target}
    type={type}
    variant={variant}
  >
    {children}
  </HeroButton>
);
