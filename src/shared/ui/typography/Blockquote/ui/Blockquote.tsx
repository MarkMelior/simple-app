import { BiSolidQuoteRight } from 'react-icons/bi';
import { CiStickyNote } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa6';
import { IoMdInformationCircle } from 'react-icons/io';

import { cn } from '@/shared/lib/common';
import type { SemanticColors } from '@/shared/types';

import type { FC, JSX, ReactNode } from 'react';

type Variants = 'idea' | 'info' | 'note' | 'quote';

type Color = SemanticColors | 'yellow';

interface BlockquoteProps {
  children: ReactNode
  className?: string
  color?: Color
  variant?: Variants
}

const blockquoteColors: Record<
  Color,
  { divider: string, background: string, icon: string }
> = {
  danger: {
    background: 'from-red-600/10',
    divider: 'bg-red-500',
    icon: 'text-red-500',
  },
  default: {
    background: 'from-default-400/10',
    divider: 'bg-default-700',
    icon: 'text-default-700',
  },
  primary: {
    background: 'from-primary-600/10',
    divider: 'bg-primary-500',
    icon: 'text-primary-500',
  },
  secondary: {
    background: 'from-purple-600/10',
    divider: 'bg-purple-500',
    icon: 'text-purple-500',
  },
  success: {
    background: 'from-success-600/10',
    divider: 'bg-success-500',
    icon: 'text-success-500',
  },
  warning: {
    background: 'from-warning-600/10',
    divider: 'bg-warning-500',
    icon: 'text-warning-500',
  },
  yellow: {
    background: 'from-yellow-400/10',
    divider: 'bg-yellow-300',
    icon: 'text-yellow-300',
  },
};

const iconsBlockquote: Record<Variants, JSX.Element> = {
  idea: <FaRegLightbulb size={22} />,
  info: <IoMdInformationCircle size={22} />,
  note: <CiStickyNote size={22} />,
  quote: <BiSolidQuoteRight size={20} />,
};

export const Blockquote: FC<BlockquoteProps> = ({
  children,
  className,
  color = 'yellow',
  variant = 'note',
  ...props
}) => {
  const { background, divider, icon } = blockquoteColors[color];

  return (
    <blockquote
      className={cn(
        'bg-default-100/30 backdrop-blur-sm rounded-md border border-default-200/50 text-sm flex items-center gap-4 px-5 py-5 overflow-hidden relative',
        className,
      )}
      {...props}
    >
      <span className={icon}>{iconsBlockquote[variant]}</span>
      <span className={cn('pointer-events-none absolute left-0 h-full w-60 bg-gradient-to-r to-transparent', background)} />
      <span className={cn('absolute left-0 h-full w-1', divider)} />
      {children}
    </blockquote>
  );
};
