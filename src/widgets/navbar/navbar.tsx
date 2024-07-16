import { getProjects } from '@/entity/project';
import { Burger, LocaleSwitcher, ThemeSwitcher } from '@/features';
import { Logo } from '@/shared/assets/icon/Logo';
import { getDictionary, Link } from '@/shared/config/i18n';
import { DownloadCvButton, GlowingLine, SidebarNavigation } from '@/shared/ui';
import { Button } from '@nextui-org/react';
import { BsGithub } from 'react-icons/bs';
import cls from './navbar.module.scss';

export const Navbar = async () => {
	const dictionary = await getDictionary();
	const dict = dictionary.ui;

	const items = await getProjects();

	return (
		<div className={cls.wrapper}>
			<div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8 flex items-center h-full'>
				{/* <Link className='mr-1 sm:mr-3 flex-none' href='/'> */}
				<span className='sr-only'>Simple App home page</span>
				<Logo className='transform scale-85 sm:scale-100' changeOnClick />
				{/* </Link> */}
				<Button
					as={Link}
					href='/'
					className='gap-0 h-auto ml-3 sm:ml-5 text-xs leading-5 font-medium text-primary-400 bg-primary-400/10 rounded-full py-1 px-3 flex items-center hover:bg-primary-400/20'
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
				{/* <NavbarLoader /> */}
				<div className='gap-2 relative flex items-center ml-auto'>
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
			<GlowingLine />
		</div>
	);
};
