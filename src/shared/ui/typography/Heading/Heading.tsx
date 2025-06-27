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
      'pt-[h-articlesNavbar] -mt-[h-articlesNavbar] text-default-900',
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
