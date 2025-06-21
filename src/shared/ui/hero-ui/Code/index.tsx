import { Code as HeroCode } from '@heroui/react';

import type { CodeProps as HeroCodeProps } from '@heroui/react';
import type { FC } from 'react';

export type CodeProps = Pick<HeroCodeProps,
  | 'children'
  | 'className'
>;

export const Code: FC<CodeProps> = ({
  children,
  className,
}) => (
  <HeroCode
    className={className}
  >
    {children}
  </HeroCode>
);
