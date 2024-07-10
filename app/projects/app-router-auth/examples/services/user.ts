import 'server-only';

import { verifySession } from '@/features';
import { cache } from 'react';
import { usersExample } from './data';

export const getUserExample = cache(async () => {
	const session = await verifySession();
	if (!session) return null;

	try {
		const user = usersExample.find((user) => user.id === session.userId);

		return user;
	} catch (error) {
		console.log('Failed to fetch user');
		return null;
	}
});
