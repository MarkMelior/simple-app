import { ThemeSwitcher } from '@/features';
import { Logo } from '@/shared/assets/icon/Logo';
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
				<Link
					href='/'
					className='ml-3 text-xs leading-5 font-medium text-blue-600 dark:text-blue-400 bg-blue-400/10 rounded-full py-1 px-3 flex items-center hover:bg-blue-400/20'
				>
					<strong className='font-semibold'>Simple App</strong>
					<svg
						width='2'
						height='2'
						fill='currentColor'
						aria-hidden='true'
						className='ml-2 text-blue-600 dark:text-blue-400/70'
					>
						<circle cx='1' cy='1' r='1' />
					</svg>
					<span className='ml-2'>Small and modern pet-projects</span>
					{/* <svg
						width='3'
						height='6'
						className='ml-3 overflow-visible text-blue-300 dark:text-blue-400'
						aria-hidden='true'
					>
						<path
							d='M0 0L3 3L0 6'
							fill='none'
							stroke='currentColor'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg> */}
				</Link>
				<div className='gap-4 relative flex items-center ml-auto'>
					<ThemeSwitcher />
					<Link
						target='_blank'
						href='https://github.com/MarkMelior'
						className='text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
					>
						<span className='sr-only'>Simple App on GitHub</span>
						<BsGithub size={20} />
					</Link>
				</div>
			</div>
		</div>
	);
};
