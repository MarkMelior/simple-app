'use client';

import { Dictionary } from '@/shared/config';
import { Button } from '@nextui-org/react';
import { RxExit } from 'react-icons/rx';
import { logout } from '../../services/logout';

export const LogoutButton = ({ dict }: { dict: Dictionary['ui'] }) => {
	return (
		<Button
			startContent={<RxExit size={18} />}
			color='danger'
			variant='flat'
			size='sm'
			onClick={async () => await logout()}
		>
			{dict['auth-logout']}
		</Button>
	);
};
