import { cn } from '@/shared/lib/common';
import { Blockquote } from '@/shared/ui';

import type { ComponentPropsWithoutRef } from 'react';

// INFO: Исключаем color из ...props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BlockquoteMDX = ({ children, className, color, ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
  <Blockquote className={cn('mb-8 mt-5 py-2', className)} {...props}>
    {children}
  </Blockquote>
);
