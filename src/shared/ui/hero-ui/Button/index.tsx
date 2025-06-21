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
>;

export const Button: FC<ButtonProps> = ({
  as,
  children,
  className,
  color,
  disabled,
  disableRipple,
  fullWidth,
  href,
  isDisabled,
  isIconOnly,
  isLoading,
  onPress,
  radius,
  size,
  startContent,
  target,
  type,
  variant,
}) => (
  <HeroButton
    as={as}
    className={className}
    color={color}
    disabled={disabled}
    disableRipple={disableRipple}
    fullWidth={fullWidth}
    href={href}
    isDisabled={isDisabled}
    isIconOnly={isIconOnly}
    isLoading={isLoading}
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
