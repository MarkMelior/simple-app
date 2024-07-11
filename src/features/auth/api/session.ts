import 'server-only';

import { cookies } from 'next/headers';
import { decrypt, encrypt } from './jwt';

export async function createSession(userId: string) {
	const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
	const session = await encrypt({ userId, expiresAt });

	cookies().set('session', session, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: 'lax',
		path: '/',
	});

	// redirect('/dashboard');
}

export async function verifySession() {
	const cookie = cookies().get('session')?.value;
	const session = await decrypt(cookie);

	if (!session?.userId) {
		// redirect('/login');
		return null;
	}

	return { isAuth: true, userId: Number(session.userId) };
}

export function deleteSession() {
	cookies().delete('session');
	// redirect('/login');
}
