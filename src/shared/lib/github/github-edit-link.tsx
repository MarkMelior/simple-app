'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/react';

import type { FC } from 'react';

interface GithubEditLinkProps {
  className?: string
}

export const GithubEditLink: FC<GithubEditLinkProps> = ({ className }) => {
  const pathname = usePathname();

  const hrefGithub = `https://github.com/MarkMelior/simple-app/blob/master${pathname}/index.mdx`;

  return (
    <Link
      className={cn('hover:text-default-600 transition', className)}
      href={hrefGithub}
      target="_blank"
    >
      Редактировать страницу на GitHub
    </Link>
  );
};
