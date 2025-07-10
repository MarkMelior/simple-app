import { BiSolidQuoteRight } from 'react-icons/bi';
import { CiStickyNote } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa6';
import { IoMdInformationCircle } from 'react-icons/io';

import { ErrorIcon } from '@/shared/icons';
import { cn } from '@/shared/lib/common';
import type { SemanticColors } from '@/shared/types';
import { Flex } from '@/shared/ui/custom';

import styles from './blockquote.module.scss';

import type { FC, JSX, ReactNode, Ref } from 'react';

const blockquoteColors: Record<
  SemanticColors,
  { divider: string, background: string, icon: string }
> = {
  danger: {
    background: 'from-red-600/10',
    divider: 'bg-red-500',
    icon: 'text-red-500',
  },
  default: {
    background: 'from-default-400/15',
    divider: 'dark:bg-default-700 bg-default-500',
    icon: 'dark:text-default-700 text-default-500',
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
    background: 'from-orange-400/10',
    divider: 'bg-orange-300',
    icon: 'text-orange-300',
  },
};

const variantDefaultColors: Record<Variants, SemanticColors> = {
  exclamation: 'danger',
  idea: 'warning',
  info: 'primary',
  note: 'warning',
  quote: 'default',
};

const iconsBlockquote: Record<Variants, JSX.Element> = {
  exclamation: <ErrorIcon height={22} width={22} />,
  idea: <FaRegLightbulb size={24} />,
  info: <IoMdInformationCircle size={24} />,
  note: <CiStickyNote size={24} />,
  quote: <BiSolidQuoteRight size={22} />,
};

type Variants = 'idea' | 'info' | 'note' | 'quote' | 'exclamation';

interface BlockquoteProps {
  children: ReactNode
  className?: string
  color?: SemanticColors
  icon?: ReactNode
  ref?: Ref<HTMLDivElement>
  variant?: Variants
}

export const Blockquote: FC<BlockquoteProps> = ({
  children,
  className,
  color,
  icon,
  ref,
  variant = 'note',
}) => {
  const { background, divider, icon: iconColor } = blockquoteColors[color ?? variantDefaultColors[variant]];

  return (
    <Flex
      align="items-center"
      as="blockquote"
      className={cn(styles.wrapper, className)}
      gap="gap-4"
      ref={ref}
    >
      <span className={iconColor}>{icon ? icon : iconsBlockquote[variant]}</span>
      <span className={cn(styles.background, 'bg-gradient-to-r to-transparent', background)} />
      <span className={cn(styles.divider, divider)} />
      {children}
    </Flex>
  );
};
