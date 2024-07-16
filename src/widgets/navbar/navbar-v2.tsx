import { getProjects } from '@/entity/project';
import { Burger, LocaleSwitcher, ThemeSwitcher } from '@/features';
import { Logo } from '@/shared/assets/icon/Logo';
import { getDictionary, Link } from '@/shared/config/i18n';
import { DownloadCvButton, SidebarNavigation } from '@/shared/ui';
import { Button } from '@nextui-org/react';
import { BsGithub } from 'react-icons/bs';

export const Navbar = async () => {
	const dictionary = await getDictionary();
	const dict = dictionary.ui;

	const items = await getProjects();

	return (
		<div className='fixed w-screen h-screen p-3 flex z-50 pointer-events-none justify-center items-start'>
			<div className='bg-default-100/90 border border-default-900/10 rounded-lg top-0 gap-2 px-2 backdrop-filter backdrop-blur-lg h-min w-min flex items-center pointer-events-auto ml-72'>
				<Logo className='transform scale-80' changeOnClick />
				<Button
					as={Link}
					href='/'
					className='gap-0 ml-1 text-xs leading-5 font-medium text-primary-400 bg-primary-400/10 rounded-full py-1 px-3 flex items-center hover:bg-primary-400/20 h-min'
				>
					<span>🚀 {dict['navbar-title']}</span>
					<svg
						width='2'
						height='2'
						fill='currentColor'
						aria-hidden='true'
						className='mx-2 text-primary hidden md:inline'
					>
						<circle cx='1' cy='1' r='1' />
					</svg>
					<span className='hidden md:inline'>{dict['navbar-desc']}</span>
				</Button>
				<ThemeSwitcher />
				<LocaleSwitcher dict={dict} />
				<Button
					as={Link}
					target='_blank'
					href='https://github.com/MarkMelior/simple-app'
					className='hidden lg:flex text-default-500 hover:text-default-600'
					isIconOnly
					variant='light'
				>
					<span className='sr-only'>Simple App on GitHub</span>
					<BsGithub size={20} />
				</Button>
				<Burger>
					<Button
						as={Link}
						target='_blank'
						href='https://github.com/MarkMelior/simple-app'
						color='default'
						fullWidth
						radius='sm'
						className='mb-3 py-6 md:py-4'
						startContent={<BsGithub size={20} />}
					>
						GitHub
					</Button>
					<DownloadCvButton color='primary' className='mb-8' dict={dict} />
					<SidebarNavigation items={items} />
				</Burger>
			</div>
		</div>
	);
};
