import LinkNext from 'next/link';
import { FiLink } from 'react-icons/fi';

import { Link } from '@/shared/ui';

import type { ComponentPropsWithoutRef } from 'react';

export const LinkMDX = ({ children, href, isTitle, ...props }: ComponentPropsWithoutRef<'a'> & { isTitle: boolean }) => {
  if (isTitle) {
    return (
      <LinkNext
        className="group relative border-none lg:-ml-2 lg:pl-2"
        href={href ?? ''}
        id={href}
        {...props}
      >
        <span className="absolute top-1/2 -ml-8 hidden -translate-y-1/2 items-center border-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
          <span className="flex size-6 items-center justify-center rounded-md bg-default-100 text-default-500 shadow-sm ring-1 ring-default-900/10 hover:bg-default-200 hover:text-default-600 hover:shadow hover:ring-default-900/10 dark:shadow-none">
            <FiLink size={16} />
          </span>
        </span>
        {children}
      </LinkNext>
    );
  }

  return (
    <Link
      className="text-primary-600"
      href={href || ''}
      isExternal={true}
      {...props}
    >
      {children}
    </Link>
  );
};
