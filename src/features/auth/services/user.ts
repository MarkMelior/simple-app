import 'server-only';

import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import { verifySession } from '../api/session';

const prisma = new PrismaClient();

export const getUser = cache(async () => {
	const session = await verifySession();
	if (!session) return null;

	try {
		const user = await prisma.user.findFirst({
			where: {
				id: session.userId,
			},
			select: {
				id: true,
				username: true,
				name: true,
			},
		});

		return user;
	} catch (error) {
		console.log('Failed to fetch user');
		return null;
	}
});
