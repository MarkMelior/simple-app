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
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  href,
  isExternal,
}) => (
  <NextLink className={cn(styles.link, className)} href={href ?? '#'} target={isExternal ? '_blank' : undefined}>
    {isExternal ? (
      <Flex>
        {children}
        <MdArrowOutward size={12} />
      </Flex>
    ) : children}
  </NextLink>
);
