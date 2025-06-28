'use client';

import { Input as HeroInput } from '@heroui/react';

import type { InputProps as HeroInputProps } from '@heroui/react';
import type { FC } from 'react';

export type InputProps = Pick<HeroInputProps,
  | 'children'
  | 'errorMessage'
  | 'isDisabled'
  | 'isInvalid'
  | 'name'
  | 'placeholder'
  | 'type'
  // FIXED: Нужен для корректной работы useActionState
  | 'defaultValue'
>;

export const Input: FC<InputProps> = ({
  children,
  defaultValue,
  errorMessage,
  isDisabled,
  isInvalid,
  name,
  placeholder,
  type,
}) => (
  <HeroInput
    defaultValue={defaultValue}
    errorMessage={errorMessage}
    isDisabled={isDisabled}
    isInvalid={isInvalid}
    name={name}
    placeholder={placeholder}
    type={type}
  >
    {children}
  </HeroInput>
);
