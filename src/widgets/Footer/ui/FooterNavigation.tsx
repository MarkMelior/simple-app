'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/shared/ui/client';

import type { ProjectsResponse } from '@/entities/articles';

import type { FC } from 'react';

interface FooterNavigationProps {
  projects: ProjectsResponse[]
}

type Page = { link: string, title: string };
const initialPage: Page = { link: '/', title: 'Главная' };

export const FooterNavigation: FC<FooterNavigationProps> = ({ projects }) => {
  const pathname = usePathname();

  const [prevPage, setPrevPage] = useState(initialPage);
  const [nextPage, setNextPage] = useState(initialPage);

  useEffect(() => {
    if (pathname) {
      determineNavigationLinks(pathname);
    }
  }, [pathname]);

  const determineNavigationLinks = (currentPath: string) => {
    const allPages = projects.flatMap((category) =>
      category.projects.map((project) => ({
        link: project.link,
        title: project.title,
      })),
    );

    const currentIndex = allPages.findIndex((page) =>
      currentPath.endsWith(page.link),
    );

    if (currentIndex > 0) {
      setPrevPage(allPages[currentIndex - 1]);
    } else {
      setPrevPage({ ...prevPage, ...initialPage });
    }

    if (currentIndex < allPages.length - 1) {
      setNextPage(allPages[currentIndex + 1]);
    } else {
      setNextPage({ ...nextPage, ...initialPage });
    }
  };

  return (
    <div className="mb-10 font-semibold flex items-center">
      <Button
        as={Link}
        className="bg-default-200/50 group flex items-center text-default-900 h-auto"
        href={prevPage.link}
        isDisabled={pathname === '/'}
        size="sm"
        variant="flat"
      >
        <svg
          className="mr-3 w-auto h-1.5 text-default-500 overflow-visible group-hover:text-default-500"
          viewBox="0 0 3 6"
        >
          <path
            d="M3 0L0 3L3 6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <div className="flex flex-col sm:flex-row my-2 text-wrap">
          <span className="text-default-600 mr-1">
            Назад:
          </span>
          {prevPage.title}
        </div>
      </Button>
      <Button
        as={Link}
        className="bg-default-200/50 group ml-auto flex items-center text-default-900 h-auto"
        href={nextPage.link}
        size="sm"
        variant="flat"
      >
        <div className="flex flex-col sm:flex-row my-2 text-wrap">
          <span className="text-default-600 mr-1">
            Далее:
          </span>
          {nextPage.title}
        </div>
        <svg
          className="ml-3 w-auto h-1.5 text-default-500 overflow-visible group-hover:text-default-500"
          viewBox="0 0 3 6"
        >
          <path
            d="M0 0L3 3L0 6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </Button>
    </div>
  );
};
