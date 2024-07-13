import { getProjects } from '@/entity/project';
import { getDictionary } from '@/shared/config';
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
				'hidden lg:block fixed z-10 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto',
				cls.wrapper,
			)}
		>
			<nav className='lg:text-sm lg:leading-6 relative'>
				<div className='sticky top-0 -ml-0.5 pointer-events-none'>
					<div className='h-10 bg-default-50' />
					<div className='relative pointer-events-auto'>
						<DownloadCvButton dict={dict} />
					</div>
					<div className='h-8 bg-gradient-to-b from-default-50' />
				</div>
				<SidebarNavigation items={items} />
			</nav>
		</div>
	);
};
