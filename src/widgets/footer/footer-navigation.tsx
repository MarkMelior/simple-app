'use client';

import { ProjectsResponse } from '@/entity/project';
import { Dictionary } from '@/shared/config';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const FooterNavigation = ({
	dict,
	projects,
}: {
	dict: Dictionary['ui'];
	projects: ProjectsResponse[];
}) => {
	const pathname = usePathname();
	const [prevPage, setPrevPage] = useState('/');
	const [nextPage, setNextPage] = useState('/');

	useEffect(() => {
		if (pathname) {
			determineNavigationLinks(pathname);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const determineNavigationLinks = (currentPath: string) => {
		const allPages = projects.flatMap((category) =>
			category.projects.map((project) => ({
				link: project.link,
				title: project.title,
			})),
		);

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
				{dict['footer-prev']}
			</Button>
			<Button
				as={Link}
				className='bg-default-200/50 group ml-auto flex items-center text-default-900'
				href={nextPage}
				size='sm'
				variant='flat'
			>
				{dict['footer-next']}
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
};
