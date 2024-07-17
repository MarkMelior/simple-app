import { getProjects } from '@/entity/project';
import { Burger, LocaleSwitcher, ThemeSwitcher } from '@/features';
import { Logo } from '@/shared/assets/icon/Logo';
import { getDictionary, Link } from '@/shared/config/i18n';
import { DownloadCvButton, SidebarNavigation } from '@/shared/ui';
import { Button } from '@nextui-org/react';
import { BsGithub } from 'react-icons/bs';
import { NavbarScroll } from './navbar-scroll';

export const Navbar = async () => {
	const dictionary = await getDictionary();
	const dict = dictionary.ui;

	const items = await getProjects();

	return (
		<NavbarScroll>
			<Logo className='transform scale-80' changeOnClick />
			<Button
				as={Link}
				href='/'
				className='flex gap-0 ml-1 text-xs leading-5 font-medium text-primary-400 bg-primary-400/10 rounded-full py-1 px-3 items-center hover:bg-primary-400/20 h-min'
			>
				<span>🚀 {dict['navbar-title']}</span>
				{/* <svg
					width='2'
					height='2'
					fill='currentColor'
					aria-hidden='true'
					className='mx-2 text-primary inline md:hidden'
				>
					<circle cx='1' cy='1' r='1' />
				</svg>
				<span className='inline md:hidden'>{dict['navbar-desc']}</span> */}
			</Button>
			<div className='gap-2 flex items-center ml-auto'>
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
						radius='md'
						className='mb-3 py-6 md:py-4'
						startContent={<BsGithub size={20} />}
					>
						GitHub
					</Button>
					<DownloadCvButton color='primary' className='mb-8' dict={dict} />
					<SidebarNavigation items={items} />
				</Burger>
			</div>
		</NavbarScroll>
	);
};
