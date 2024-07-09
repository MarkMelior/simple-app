import { ThemeSwitcher } from '@/features';
import { Logo } from '@/shared/assets/icon/Logo';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import cls from './navbar.module.scss';

export const Navbar = () => {
	return (
		<div className={cls.wrapper}>
			<div className='max-w-8xl mx-auto px-8 flex items-center h-full'>
				<Link
					className='mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto'
					href='/'
				>
					<span className='sr-only'>Simple App home page</span>
					<Logo />
				</Link>
				<Button
					as={Link}
					href='/'
					className='gap-0 h-auto ml-3 text-xs leading-5 font-medium text-primary-500 dark:text-primary-400 bg-primary-400/10 rounded-full py-1 px-3 flex items-center hover:bg-primary-400/20'
				>
					<strong className='font-semibold'>Simple App</strong>
					<svg
						width='2'
						height='2'
						fill='currentColor'
						aria-hidden='true'
						className='ml-2 text-primary-600 dark:text-primary-400/70'
					>
						<circle cx='1' cy='1' r='1' />
					</svg>
					<span className='ml-2'>Small and modern pet-projects</span>
					{/* <svg
						width='3'
						height='6'
						className='ml-3 overflow-visible text-primary-300 dark:text-primary-400'
						aria-hidden='true'
					>
						<path
							d='M0 0L3 3L0 6'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg> */}
				</Button>
				<div className='gap-2 relative flex items-center ml-auto'>
					<ThemeSwitcher />
					<Button
						as={Link}
						target='_blank'
						href='https://github.com/MarkMelior'
						className='text-main-500 hover:text-main-500 dark:hover:text-main-400'
						isIconOnly
						variant='light'
					>
						<span className='sr-only'>Simple App on GitHub</span>
						<BsGithub size={20} />
					</Button>
				</div>
			</div>
		</div>
	);
};
