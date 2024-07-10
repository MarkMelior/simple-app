import { Burger, ThemeSwitcher } from '@/features';
import { Logo } from '@/shared/assets/icon/Logo';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import cls from './navbar.module.scss';

export const Navbar = () => {
	return (
		<div className={cls.wrapper}>
			<div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8 flex items-center h-full'>
				<Link className='mr-1 sm:mr-3 flex-none' href='/'>
					<span className='sr-only'>Simple App home page</span>
					<Logo className='transform scale-85 sm:scale-100' />
				</Link>
				<Button
					as={Link}
					href='/'
					className='gap-0 h-auto ml-3 text-xs leading-5 font-medium text-primary-400 bg-primary-400/10 rounded-full py-1 px-3 flex items-center hover:bg-primary-400/20'
				>
					<span>Simple App</span>
					<svg
						width='2'
						height='2'
						fill='currentColor'
						aria-hidden='true'
						className='mx-2 text-primary hidden md:inline'
					>
						<circle cx='1' cy='1' r='1' />
					</svg>
					<span className='hidden md:inline'>
						Small and modern pet-projects
					</span>
				</Button>
				<div className='gap-2 relative flex items-center ml-auto'>
					<ThemeSwitcher />
					<Button
						as={Link}
						target='_blank'
						href='https://github.com/MarkMelior/simple-app'
						className='text-default-500 hover:text-default-600'
						isIconOnly
						variant='light'
					>
						<span className='sr-only'>Simple App on GitHub</span>
						<BsGithub size={20} />
					</Button>
					<Burger />
				</div>
			</div>
		</div>
	);
};
