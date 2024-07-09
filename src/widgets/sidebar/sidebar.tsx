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
				'hidden lg:block fixed z-10 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto',
				cls.wrapper,
			)}
		>
			<nav className='lg:text-sm lg:leading-6 relative'>
				<div className='sticky top-0 -ml-0.5 pointer-events-none'>
					<div className='h-10 bg-default-50' />
					<div className='relative pointer-events-auto'>
						<Button
							as={Link}
							href='/files/cv.pdf'
							target='_blank'
							download='Frontend разработчик - Завгородний Марк'
							fullWidth
							startContent={<FaDownload />}
							className='bg-white dark:bg-default-200 text-default-600 border border-default-200 dark:border-0 hover:text-default-700'
							radius='sm'
						>
							Download CV
						</Button>
					</div>
					<div className='h-8 bg-gradient-to-b from-default-50' />
				</div>
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
					{SidebarItems.map(({ item, title }) => (
						<li className='mt-12 lg:mt-8' key={title}>
							<h5 className='mb-8 lg:mb-3 font-semibold text-default-900'>
								{title}
							</h5>
							<ul className='space-y-6 lg:space-y-2 border-l border-default-200'>
								{item.map(({ link, name }) => (
									<li key={name}>
										<Link
											className={cn(
												'block border-l pl-4 -ml-px border-transparent',
												{
													['text-primary-400 border-current font-semibold']:
														pathname === link,
													['hover:border-default-400 text-default-600 hover:text-default-700']:
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
