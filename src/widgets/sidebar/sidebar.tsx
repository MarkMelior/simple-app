import { getProjects } from '@/entity/project';
import { getDictionary } from '@/shared/config/i18n';
import { cn } from '@/shared/lib';
import { DownloadCvButton, SidebarNavigation } from '@/shared/ui';
import cls from './sidebar.module.scss';

export const Sidebar = async () => {
	const dictionary = await getDictionary();
	const dict = dictionary.ui;

	const items = await getProjects();

	return (
		<div
			className={cn(
				'hidden lg:block z-10 w-full overflow-y-auto -mt-[var(--height-navbar)] h-screen sticky top-0 pr-6',
				cls.wrapper,
			)}
		>
			<nav className='lg:text-sm lg:leading-6'>
				<div className='sticky top-0 -ml-0.5 pointer-events-none'>
					<div className='h-[var(--height-navbar)] bg-default-100 dark:bg-default-50' />
					<div className='relative pointer-events-auto'>
						<DownloadCvButton dict={dict} />
					</div>
					<div className='h-8 bg-gradient-to-b from-default-100 dark:from-default-50' />
				</div>
				<SidebarNavigation items={items} />
			</nav>
		</div>
	);
};
