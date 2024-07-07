'use client';

import { Theme } from '@/shared/types/theme';
import { Button } from 'antd';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Button
			onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
			type='text'
			icon={
				theme === Theme.DARK ? (
					<CiLight size={24} className='text-sky-600' />
				) : (
					<CiDark size={24} className='text-sky-600' />
				)
			}
		/>
	);
};
