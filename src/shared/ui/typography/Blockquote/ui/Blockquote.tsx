import { CiStickyNote } from 'react-icons/ci';
import { FcIdea } from 'react-icons/fc';
import { IoMdInformationCircle } from 'react-icons/io';

import { cn } from '@/shared/lib/common';

import type { FC, JSX, ReactNode } from 'react';

type Variants = 'idea' | 'info' | 'note';

interface BlockquoteProps {
  children: ReactNode
  className?: string
  variant?: Variants
}

interface Variants2 {
  color?: string
  icon: JSX.Element
}

const variants: Record<Variants, Variants2> = {
  idea: {
    icon: <FcIdea size={22} />,
  },
  info: {
    color: 'text-blue-500',
    icon: <IoMdInformationCircle size={22} />,
  },
  note: {
    color: 'text-yellow-300',
    icon: <CiStickyNote size={22} />,
  },
};

export const Blockquote: FC<BlockquoteProps> = ({
  children,
  className,
  variant = 'note',
  ...props
}) => (
  <blockquote
    className={cn(
      'bg-default-100/30 backdrop-blur-sm rounded-md border border-default-200/50 mt-5 mb-12 text-sm flex items-center gap-4 px-5 overflow-hidden relative',
      className,
    )}
    {...props}
  >
    <span className={variants[variant]?.color}>{variants[variant].icon}</span>
    <span className="pointer-events-none absolute left-0 h-full w-60 bg-gradient-to-r from-yellow-400/10 to-transparent" />
    <span className="absolute left-0 h-full w-1 bg-yellow-300" />
    {children}
  </blockquote>
);
