import { cn } from '@heroui/react';
import NextLink from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

import { Flex } from '../Layout';

import styles from './link.module.scss';

import type { FC, ReactNode } from 'react';

interface LinkProps {
  children: ReactNode
  className?: string
  href?: string
  isExternal?: boolean
  scroll?: boolean
  variant?: 'default' | 'hovered'
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  href,
  isExternal,
  scroll,
  variant = 'hovered',
}) => (
  <NextLink
    className={cn({ [styles.link]: variant === 'hovered' }, className)}
    href={href ?? '#'}
    scroll={scroll}
    target={isExternal ? '_blank' : undefined}
  >
    {isExternal ? (
      <Flex>
        {children}
        <MdArrowOutward size={12} />
      </Flex>
    ) : children}
  </NextLink>
);
