import 'server-only';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { SessionPayload } from './definitions';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('7d')
		.sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ['HS256'],
		});
		return payload;
	} catch (error) {
		// console.log('Failed to verify session');
		return null;
	}
}

// * ---

export async function createSession(userId: string) {
	const expiresAt = new Date(Date.now() + 7 * 60 * 60 * 1000);
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
