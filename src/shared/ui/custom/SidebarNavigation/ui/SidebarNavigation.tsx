'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/react';

import type { ProjectsResponse } from '@/entities/articles';

import { SidebarLinks } from '../constants';

export const SidebarNavigation = ({ items }: { items: ProjectsResponse[] }) => {
  const pathname = usePathname();

  return (
    <ul>
      {SidebarLinks.map(({ color, icon, link, name }) => (
        <li key={name}>
          <Link
            className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-default-600 hover:text-default-700 transition"
            href={link}
            target="_blank"
          >
            <div
              className={`mr-4 rounded-md ring-1 ring-default-100/5 shadow-sm group-hover:shadow group-hover:ring-default-100/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-${color}-200 dark:group-hover:bg-${color}-500 dark:bg-default-200 dark:highlight-white/10`}
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
            className="block mb-8 lg:mb-3 font-semibold text-default-900"
            href={link}
          >
            {title}
          </Link>
          <ul className="space-y-6 lg:space-y-2 border-l border-default-200">
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
