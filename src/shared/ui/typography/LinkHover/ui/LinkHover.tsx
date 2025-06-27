import { FiLink } from 'react-icons/fi';

import { Link } from '@/shared/ui/custom';

import type { FC, ReactNode } from 'react';

interface LinkHoverProps {
  children: ReactNode
  href?: string
  isTitle?: boolean
}

export const LinkHover: FC<LinkHoverProps> = ({
  children,
  href,
  isTitle,
}) => {
  if (isTitle) {
    return (
      <Link
        className="group relative border-none lg:-ml-2 lg:pl-2"
        href={href || ''}
      >
        <span className="absolute -ml-8 hidden items-center border-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus:opacity-100 lg:flex">
          <span className="mt-0.5 flex size-6 items-center justify-center rounded-md bg-default-100 text-default-500 shadow-sm ring-1 ring-default-900/10 hover:bg-default-200 hover:text-default-600 hover:shadow hover:ring-default-900/10 dark:shadow-none">
            <FiLink size={16} />
          </span>
        </span>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href || ''} isExternal={true}>
      {children}
    </Link>
  );
};
