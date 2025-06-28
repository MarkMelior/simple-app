import 'server-only';

import { cookies } from 'next/headers';

import { decrypt, encrypt } from './jwt';

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ expiresAt, userId });

  (await cookies()).set('session', session, {
    expires: expiresAt,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: true,
  });

  // redirect('/dashboard');
}

export async function verifySession() {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    // redirect('/login');
    return null;
  }

  return { isAuth: true, userId: Number(session.userId) };
}

export async function deleteSession() {
  (await cookies()).delete('session');
  // redirect('/login');
}
