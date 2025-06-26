'use client';

import { Button as HeroButton } from '@heroui/react';

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
  | 'size'
  | 'startContent'
  | 'target'
  | 'type'
  | 'variant'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'endContent'
> & {
  'download'?: string
  'data-copied'?: boolean
  'data-menu'?: string
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
  size,
  startContent,
  target,
  type,
  variant,
  ...props
}) => (
  <HeroButton
    as={as}
    className={className}
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
    size={size}
    startContent={startContent}
    target={target}
    type={type}
    variant={variant}
  >
    {children}
  </HeroButton>
);
