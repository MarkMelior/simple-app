import { cn } from '@/shared/lib/common';

import type { JSX, ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode
  className?: string
  id?: string
  Tag: keyof JSX.IntrinsicElements
}

export const Heading = ({
  children,
  className,
  id,
  Tag,
  ...props
}: HeadingProps) => (
  <Tag
    className={cn(
      'pt-[var(--articles-height-navbar)] -mt-[var(--articles-height-navbar)] text-default-900',
      className,
    )}
    data-headline-id={id}
    id={id}
    {...props}
  >
    <span
      className="relative whitespace-pre-wrap"
    >
      {children}
    </span>
  </Tag>
)
;
