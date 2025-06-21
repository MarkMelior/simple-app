'use client';

import type { MessageProviderProps } from '@/shared/lib/react';
import { MessageProvider as Provider } from '@/shared/lib/react';

import type { FC } from 'react';

export const MessageProvider: FC<MessageProviderProps> = ({ children }) => (
  <Provider>
    {children}
  </Provider>
);
