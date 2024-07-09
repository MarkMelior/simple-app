'use client';

import { cn } from '@/shared/lib';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaDownload } from 'react-icons/fa6';
import { SidebarItems, SidebarLinks } from './model/data';
import cls from './sidebar.module.scss';

export const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div
			className={cn(
				'hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto',
				cls.wrapper,
			)}
		>
			<nav className='lg:text-sm lg:leading-6 relative'>
				<div className='sticky top-0 -ml-0.5 pointer-events-none'>
					<div className='h-10 bg-main-50 dark:bg-main-950' />
					<div className='relative pointer-events-auto'>
						<Button
							as={Link}
							href='/files/cv.pdf'
							target='_blank'
							download='Frontend разработчик - Завгородний Марк'
							fullWidth
							startContent={<FaDownload />}
							className='bg-white text-main-400 border border-main-200 dark:bg-main-800 dark:border-none hover:text-main-900 hover:dark:text-main-50'
							radius='sm'
						>
							Download CV
						</Button>
					</div>
					<div className='h-8 bg-gradient-to-b from-main-50 dark:from-main-950' />
				</div>
				<ul>
					{SidebarLinks.map(({ name, link, icon, color }) => (
						<li key={name}>
							<Link
								className={`group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-main-500 dark:text-main-400 dark:hover:text-main-300 hover:text-main-700`}
								href={link}
								target='_blank'
							>
								<div
									className={`mr-4 rounded-md ring-1 ring-main-900/5 shadow-sm group-hover:shadow group-hover:ring-main-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-${color}-200 dark:group-hover:bg-${color}-500 dark:bg-main-800 dark:highlight-white/10`}
								>
									{icon}
								</div>
								{name}
							</Link>
						</li>
					))}
					{SidebarItems.map(({ item, title }) => (
						<li className='mt-12 lg:mt-8' key={title}>
							<h5 className='mb-8 lg:mb-3 font-semibold text-main-900 dark:text-main-200'>
								{title}
							</h5>
							<ul className='space-y-6 lg:space-y-2 border-l border-main-200 dark:border-main-800'>
								{item.map(({ link, name }) => (
									<li key={name}>
										<Link
											className={cn(
												'block border-l pl-4 -ml-px border-transparent',
												{
													['text-primary-500 border-current font-semibold dark:text-primary-400']:
														pathname === link,
													['hover:border-main-400 dark:hover:border-main-500 text-main-700 hover:text-main-900 dark:text-main-400 dark:hover:text-main-300']:
														pathname !== link,
												},
											)}
											href={link}
										>
											{name}
										</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
