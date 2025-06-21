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
>;

export const Input: FC<InputProps> = ({
  children,
  errorMessage,
  isDisabled,
  isInvalid,
  name,
  placeholder,
  type,
}) => (
  <HeroInput
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
