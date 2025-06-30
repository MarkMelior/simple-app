'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/common';
import { Flex, IconComponent } from '@/shared/ui';

import type { ArticleListResponse } from '@/entities/articles';

import type { FC } from 'react';

interface SidebarNavigationProps {
  items: ArticleListResponse[]
}

export const SidebarNavigation: FC<SidebarNavigationProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <ul>
      {items.map(({ articles, link, title }) => (
        <li className="mt-12 lg:mt-8" key={title}>
          <Link
            className="mb-8 block text-base font-semibold text-default-900 lg:mb-3"
            href={link}
          >
            {title}
          </Link>
          <ul className="space-y-6 border-l border-default-200 lg:space-y-2">
            {articles.map(({ icon, link: articleLink, title }) => {
              const link = articleLink ?? '';

              return (
                <li key={title}>
                  <Link
                    className={cn(
                      'block border-l pl-4 -ml-px border-transparent transition',
                      {
                        ['hover:border-default-400 text-default-600 hover:text-default-700']: !pathname.endsWith(link),
                        ['text-primary-600 border-current font-semibold']: pathname.endsWith(link),
                      },
                    )}
                    href={link}
                  >
                    <Flex align="items-center" gap="gap-2">
                      <IconComponent
                        className="text-primary"
                        height={16}
                        icon={icon}
                        width={16}
                      />
                      {title}
                    </Flex>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};
