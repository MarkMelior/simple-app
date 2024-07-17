'use client';

import { cn } from '@/shared/lib';
import { useEffect, useState } from 'react';
import cls from './navbar.module.scss';

export const NavbarScroll = ({ children }: { children: React.ReactNode }) => {
	const [isScrolled, setIsScrolled] = useState(true);

	useEffect(() => {
		setIsScrolled(false);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 30) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={cls.wrapper}>
			<div className={cls['navbar-wrapper']}>
				<div className={cn(cls.navbar, { [cls['navbar-open']]: isScrolled })}>
					{children}
				</div>
			</div>
		</div>
	);
};
