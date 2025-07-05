import { cn } from '@heroui/react';
import NextLink from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

import { Flex } from '../Layout';

import styles from './link.module.scss';

import type { FC, MouseEventHandler, ReactNode } from 'react';

interface LinkProps {
  children: ReactNode
  className?: string
  href?: string
  isExternal?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
  scroll?: boolean
  variant?: 'default' | 'hovered'
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  href,
  isExternal,
  onClick,
  scroll,
  variant = 'hovered',
}) => (
  <NextLink
    className={cn({ [styles.link]: variant === 'hovered' }, className)}
    href={href ?? '#'}
    onClick={onClick}
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
