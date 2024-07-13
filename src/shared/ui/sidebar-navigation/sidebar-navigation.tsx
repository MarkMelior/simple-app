'use client';

import { ProjectsResponse } from '@/entity/project';
import { SidebarLinks } from '@/shared/const/sidebar-links';
import { cn } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SidebarNavigation = ({ items }: { items: ProjectsResponse[] }) => {
	const pathname = usePathname();

	return (
		<ul>
			{SidebarLinks.map(({ name, link, icon, color }) => (
				<li key={name}>
					<Link
						className={`group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-default-600 hover:text-default-700`}
						href={link}
						target='_blank'
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
			{items.map(({ title, link, projects }) => (
				<li className='mt-12 lg:mt-8' key={title}>
					<Link
						href={link}
						className='block mb-8 lg:mb-3 font-semibold text-default-900'
					>
						{title}
					</Link>
					<ul className='space-y-6 lg:space-y-2 border-l border-default-200'>
						{projects.map(({ title, link }) => (
							<li key={title}>
								<Link
									className={cn(
										'block border-l pl-4 -ml-px border-transparent',
										{
											['text-primary-400 border-current font-semibold']:
												pathname.endsWith(link),
											['hover:border-default-400 text-default-600 hover:text-default-700']:
												!pathname.endsWith(link),
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
