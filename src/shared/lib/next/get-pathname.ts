'use server';

import { headers } from 'next/headers';

export const getPathname = async () => {
  const headersList = await headers();
  const fullUrl = headersList.get('x-url') || '';

  const url = new URL(fullUrl);
  const pathname = url.pathname;

  return pathname;
};
