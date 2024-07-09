'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SidebarItems } from '../sidebar/model/data';

export const Footer = () => {
	const pathname = usePathname();
	const [prevPage, setPrevPage] = useState('/');
	const [nextPage, setNextPage] = useState('/');

	useEffect(() => {
		if (pathname) {
			determineNavigationLinks(pathname);
		}
	}, [pathname]);

	const determineNavigationLinks = (currentPath: string) => {
		const allPages = SidebarItems.flatMap((category) => category.item);
		const currentIndex = allPages.findIndex(
			(page) => page.link === currentPath,
		);

		if (currentIndex > 0) {
			setPrevPage(allPages[currentIndex - 1].link);
		} else {
			setPrevPage('/');
		}

		if (currentIndex < allPages.length - 1) {
			setNextPage(allPages[currentIndex + 1].link);
		} else {
			setNextPage('/');
		}
	};

	return (
		<footer className='text-sm leading-6 mt-12'>
			<div className='mb-10 font-semibold flex items-center'>
				<Button
					as={Link}
					className='group flex items-center text-black dark:text-white'
					href={prevPage}
					isDisabled={pathname === '/'}
					size='sm'
					variant='flat'
				>
					<svg
						viewBox='0 0 3 6'
						className='mr-3 w-auto h-1.5 text-main-400 overflow-visible group-hover:text-main-600 dark:group-hover:text-main-300'
					>
						<path
							d='M3 0L0 3L3 6'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Previous
				</Button>
				<Button
					as={Link}
					className='group ml-auto flex items-center text-black dark:text-white'
					href={nextPage}
					size='sm'
					variant='flat'
				>
					Next
					<svg
						viewBox='0 0 3 6'
						className='ml-3 w-auto h-1.5 text-main-400 overflow-visible group-hover:text-main-600 dark:group-hover:text-main-300'
					>
						<path
							d='M0 0L3 3L0 6'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</Button>
			</div>
			<div className='pt-10 pb-28 border-t border-main-200 sm:flex justify-between text-main-500 dark:border-main-200/5'>
				<div className='mb-6 sm:mb-0 sm:flex'>
					<p>Copyright © 2024 Mark Melior.</p>
					<p className='sm:ml-4 sm:pl-4 sm:border-l sm:border-main-200 dark:sm:border-main-200/5'>
						<a
							className='hover:text-main-900 dark:hover:text-main-400'
							href='/brand'
						>
							Made with ❤️
						</a>
					</p>
				</div>
				<a
					className='hover:text-main-900 dark:hover:text-main-400'
					href='https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/customizing-colors.mdx'
				>
					Edit this page on GitHub
				</a>
			</div>
		</footer>
	);
};
