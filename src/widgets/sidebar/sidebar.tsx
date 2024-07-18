import { getProjects } from '@/entity/project';
import { PortalEnum } from '@/shared/components';
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
				'hidden lg:flex z-10 -mt-[var(--height-navbar)] sticky top-0 w-[17.5rem] max-h-screen h-screen flex-col gap-3',
				cls.wrapper,
			)}
		>
			<nav className='lg:text-sm lg:leading-6 h-full overflow-y-auto pr-6'>
				<div className='sticky top-0 -ml-0.5 pointer-events-none'>
					<div className='h-10 bg-default-100 dark:bg-default-50' />
					<div className='relative pointer-events-auto'>
						<DownloadCvButton dict={dict} />
					</div>
					<div className='h-8 bg-gradient-to-b from-default-100 dark:from-default-50' />
				</div>
				<SidebarNavigation items={items} />
			</nav>

			<div id={PortalEnum.Headlines} />
		</div>
	);
};
