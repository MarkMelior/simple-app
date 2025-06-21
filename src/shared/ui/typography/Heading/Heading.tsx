import { cn } from '@/shared/lib/react';

import type { JSX } from 'react';

interface HeadingProps {
  children: React.ReactNode
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
      'pt-[var(--height-navbar)] -mt-[var(--height-navbar)] text-default-900',
      className,
    )}
    data-headline-id={id}
    id={id}
    {...props} // TODO
  >
    <span
      className="whitespace-pre-wrap relative"
    >
      {children}
    </span>
  </Tag>
)
;
