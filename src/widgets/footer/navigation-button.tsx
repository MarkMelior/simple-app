'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SidebarItems } from '../../shared/ui/sidebar-navigation/model/data';

export const Footer = {
	NavigationButton: () => {
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
		);
	},
};
