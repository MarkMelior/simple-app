'use client';

import { Theme } from '@/shared/types/theme';
import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Button variant='light' isIconOnly color='primary' isLoading />;
	}

	return (
		<Button
			onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
			variant='light'
			isIconOnly
			color='primary'
		>
			{theme === Theme.DARK ? (
				<CiLight size={24} className='text-primary' />
			) : (
				<CiDark size={24} className='text-primary' />
			)}
		</Button>
	);
};
