'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SidebarItems } from '../../shared/ui/sidebar-navigation/model/data';

export const Footer = () => {
	const pathname = usePathname();
	const [prevPage, setPrevPage] = useState('/');
	const [nextPage, setNextPage] = useState('/');
	const [gitPath, setGitPath] = useState<string | undefined>();

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
			setGitPath(allPages[currentIndex]?.gitPath);
		} else {
			setPrevPage('/');
		}

		if (currentIndex < allPages.length - 1) {
			setNextPage(allPages[currentIndex + 1].link);
			setGitPath(allPages[currentIndex]?.gitPath);
		} else {
			setNextPage('/');
		}
	};

	return (
		<footer className='text-sm leading-6 mt-12'>
			<div className='mb-10 font-semibold flex items-center'>
				<Button
					as={Link}
					className='bg-default-200/50 group flex items-center text-default-900'
					href={prevPage}
					isDisabled={pathname === '/'}
					size='sm'
					variant='flat'
				>
					<svg
						viewBox='0 0 3 6'
						className='mr-3 w-auto h-1.5 text-default-500 overflow-visible group-hover:text-default-500'
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
					className='bg-default-200/50 group ml-auto flex items-center text-default-900'
					href={nextPage}
					size='sm'
					variant='flat'
				>
					Next
					<svg
						viewBox='0 0 3 6'
						className='ml-3 w-auto h-1.5 text-default-500 overflow-visible group-hover:text-default-500'
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
			<div className='pt-10 pb-10 sm:pb-24 border-t border-default-200 dark:border-default-100 sm:flex text-center justify-between text-default-500'>
				<div className='mb-6 sm:mb-0 sm:flex'>
					<p>Copyright © 2024 Mark Melior.</p>
					<p className='sm:ml-4 sm:pl-4 sm:border-l sm:border-default-200 dark:border-default-100'>
						<Link className='hover:text-default-600' href='/'>
							Made with ❤️
						</Link>
					</p>
				</div>
				{gitPath && (
					<Link
						className='hover:text-default-600'
						href={`https://github.com/MarkMelior/simple-app/blob/master${gitPath}`}
						target='_blank'
					>
						Edit this page on GitHub
					</Link>
				)}
			</div>
		</footer>
	);
};
