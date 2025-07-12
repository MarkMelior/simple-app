'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/common';

import type { FC } from 'react';

interface GithubEditLinkProps {
  className?: string
}

export const GithubEditLink: FC<GithubEditLinkProps> = ({ className }) => {
  const pathname = usePathname();

  const hrefGithub = `https://github.com/MarkMelior/melior-web/blob/master/src/entities/articles${pathname}/index.mdx`;

  return (
    <Link
      className={cn('hover:text-default-600 transition font-light', className)}
      href={hrefGithub}
      target="_blank"
    >
      Редактировать страницу на GitHub
    </Link>
  );
};
