import 'server-only';

import { PrismaClient } from '@prisma/client';
import { cache } from 'react';

import { verifySession } from '../api/session';

const prisma = new PrismaClient();

export const getUser = cache(async () => {
  const session = await verifySession();

  if (!session) {
    return null;
  }

  try {
    const user = await prisma.user.findFirst({
      select: {
        id: true,
        name: true,
        username: true,
      },
      where: {
        id: session.userId,
      },
    });

    return user;
  } catch (error) { // TODO
    console.log('Failed to fetch user');

    return null;
  }
});
