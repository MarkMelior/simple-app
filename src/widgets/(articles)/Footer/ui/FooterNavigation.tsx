'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/shared/ui/client';

import type { ArticleListResponse } from '@/entities/articles';

import type { FC } from 'react';

interface FooterNavigationProps {
  articleList: ArticleListResponse[]
}

type Page = { link: string, title: string };
const initialPage: Page = { link: '/', title: 'Главная' };

export const FooterNavigation: FC<FooterNavigationProps> = ({ articleList }) => {
  const pathname = usePathname();

  const [prevPage, setPrevPage] = useState(initialPage);
  const [nextPage, setNextPage] = useState(initialPage);

  useEffect(() => {
    if (pathname) {
      determineNavigationLinks(pathname);
    }
  }, [pathname]);

  const determineNavigationLinks = (currentPath: string) => {
    const allPages = articleList.flatMap((category) =>
      category.articles.map((article) => ({
        link: article.link,
        title: article.title,
      })),
    );

    const currentIndex = allPages.findIndex((page) =>
      currentPath.endsWith(page.link ?? ''),
    );

    if (currentIndex > 0) {
      setPrevPage(allPages[currentIndex - 1] as Page);
    } else {
      setPrevPage({ ...prevPage, ...initialPage });
    }

    if (currentIndex < allPages.length - 1) {
      setNextPage(allPages[currentIndex + 1] as Page);
    } else {
      setNextPage({ ...nextPage, ...initialPage });
    }
  };

  return (
    <div className="mb-10 flex items-center font-semibold">
      <Button
        as={Link}
        className="group flex h-auto items-center bg-default-200/50 text-default-900"
        href={prevPage.link}
        isDisabled={pathname === '/'}
        size="sm"
        variant="flat"
      >
        <svg
          className="mr-3 h-1.5 w-auto overflow-visible text-default-500 group-hover:text-default-500"
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
        <div className="my-2 flex flex-col text-wrap sm:flex-row">
          <span className="mr-1 text-default-600">
            Назад:
          </span>
          {prevPage.title}
        </div>
      </Button>
      <Button
        as={Link}
        className="group ml-auto flex h-auto items-center bg-default-200/50 text-default-900"
        href={nextPage.link}
        size="sm"
        variant="flat"
      >
        <div className="my-2 flex flex-col text-wrap sm:flex-row">
          <span className="mr-1 text-default-600">
            Далее:
          </span>
          {nextPage.title}
        </div>
        <svg
          className="ml-3 h-1.5 w-auto overflow-visible text-default-500 group-hover:text-default-500"
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
