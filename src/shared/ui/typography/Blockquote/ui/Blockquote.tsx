import { BiSolidQuoteRight } from 'react-icons/bi';
import { CiStickyNote } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa6';
import { IoMdInformationCircle } from 'react-icons/io';

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
    divider: 'dark:bg-default-700 bg-default-400',
    icon: 'dark:text-default-700 text-default-400',
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
};

const iconsBlockquote: Record<Variants, JSX.Element> = {
  idea: <FaRegLightbulb size={22} />,
  info: <IoMdInformationCircle size={22} />,
  note: <CiStickyNote size={22} />,
  quote: <BiSolidQuoteRight size={20} />,
};

type Variants = 'idea' | 'info' | 'note' | 'quote';

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
  color = 'warning',
  icon,
  ref,
  variant = 'note',
}) => {
  const { background, divider, icon: iconColor } = blockquoteColors[color];

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
