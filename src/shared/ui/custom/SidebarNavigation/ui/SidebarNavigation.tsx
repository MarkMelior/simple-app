'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/common';

import type { ProjectsResponse } from '@/entities/articles';

import { SidebarLinks } from '../constants';

import type { FC } from 'react';

interface SidebarNavigationProps {
  items: ProjectsResponse[]
}

export const SidebarNavigation: FC<SidebarNavigationProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <ul>
      {SidebarLinks.map(({ color, icon, link, name }) => (
        <li key={name}>
          <Link
            className="group mb-4 flex items-center font-semibold text-default-600 transition hover:text-default-700 lg:text-sm lg:leading-6"
            href={link}
            target="_blank"
          >
            <div
              className={`dark:group-hover:highlight-white/10 group-hover:shadow- mr-4 rounded-md shadow-sm ring-1 ring-default-100/5 group-hover:shadow group-hover:ring-default-100/10 dark:shadow-none dark:ring-0 dark:group-hover:shadow-none${color}-200 dark:group-hover:bg-${color}-500 dark:highlight-white/10 dark:bg-default-200`}
            >
              {icon}
            </div>
            {name}
          </Link>
        </li>
      ))}
      {items.map(({ link, projects, title }) => (
        <li className="mt-12 lg:mt-8" key={title}>
          <Link
            className="mb-8 block font-semibold text-default-900 lg:mb-3"
            href={link}
          >
            {title}
          </Link>
          <ul className="space-y-6 border-l border-default-200 lg:space-y-2">
            {projects.map(({ link, title }) => (
              <li key={title}>
                <Link
                  className={cn(
                    'block border-l pl-4 -ml-px border-transparent transition',
                    {
                      ['hover:border-default-400 text-default-600 hover:text-default-700']: !pathname.endsWith(link),
                      ['text-primary-400 border-current font-semibold']: pathname.endsWith(link),
                    },
                  )}
                  href={link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
