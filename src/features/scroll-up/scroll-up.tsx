'use client';

import { Button, cn } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { GoArrowUp } from 'react-icons/go';

export const ScrollUp = () => {
	const [isScrolled, setIsScrolled] = useState(false);

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

	const scrollToTop = () => {
		if (!isScrolled) return;

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Button
			className={cn(
				'bg-default-100 hover:bg-primary-500 fixed bottom-4 right-4 text-default-500 hover:text-default-900',
				{
					'opacity-0': !isScrolled,
				},
			)}
			onClick={scrollToTop}
			radius='lg'
			isIconOnly
		>
			<GoArrowUp size={22} />
		</Button>
	);
};
