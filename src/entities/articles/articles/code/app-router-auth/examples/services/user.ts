import 'server-only';

import { cache } from 'react';

import { usersExample } from './data';
import { verifySession } from '../features/auth/api/session'; // TODO

export const getUserExample = cache(async () => {
  const session = await verifySession();

  if (!session) {
    return null;
  }

  try {
    const user = usersExample.find((user) => user.id === session.userId);

    return user;
  } catch (error) { // TODO
    console.log('Failed to fetch user');

    return null;
  }
});
