import { getProjects } from '@/entity/project';
import { getDictionary } from '@/shared/config/i18n';
import { DownloadCvButton, SidebarNavigation } from '@/shared/ui';

export const Sidebar = async () => {
	const dictionary = await getDictionary();
	const dict = dictionary.ui;

	const items = await getProjects();

	return (
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
	);
};
