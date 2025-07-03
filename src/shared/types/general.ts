import type { ElementType, JSX } from 'react';

export type AsComponent = keyof JSX.IntrinsicElements | ElementType;

export interface FromTo<T extends string | number = string> {
  from: T
  to: T
}

export interface Sort<T extends string = string> {
  field: T
  order: 'asc' | 'desc'
}
