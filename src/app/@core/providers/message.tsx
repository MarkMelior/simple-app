'use client';

import type { MessageProviderProps } from '@/shared/lib/common';
import { MessageProvider as Provider } from '@/shared/lib/common';

import type { FC } from 'react';

export const MessageProvider: FC<MessageProviderProps> = ({ children }) => (
  <Provider>
    {children}
  </Provider>
);
