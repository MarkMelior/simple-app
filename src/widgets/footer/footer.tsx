'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Footer as MyFooter } from './navigation-button';

export const Footer = () => {
	// const {path} = await getProjectData()
	const pathname = usePathname();

	return (
		<footer className='text-sm leading-6 mt-12'>
			<MyFooter.NavigationButton />
			<div className='pt-10 pb-10 sm:pb-24 border-t border-default-200 dark:border-default-100 sm:flex text-center justify-between text-default-500'>
				<div className='mb-6 sm:mb-0 sm:flex'>
					<p>Copyright © 2024 Mark Melior.</p>
					<p className='sm:ml-4 sm:pl-4 sm:border-l sm:border-default-200 dark:border-default-100'>
						<Link className='hover:text-default-600' href='/'>
							Made with ❤️
						</Link>
					</p>
				</div>
				<Link
					className='hover:text-default-600'
					href={`https://github.com/MarkMelior/simple-app/blob/master${pathname}/page.mdx`}
					target='_blank'
				>
					Edit this page on GitHub
				</Link>
			</div>
		</footer>
	);
};
