'use client';

import { Spinner, Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export const NavbarLoader = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted) return null;

	return (
		<Tooltip size='sm' content='Загрузка...' placement='bottom'>
			<Spinner size='sm' className='ml-3' />
		</Tooltip>
	);
};
