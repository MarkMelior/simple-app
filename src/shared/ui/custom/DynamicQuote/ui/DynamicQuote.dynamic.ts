'use client';

import dynamic from 'next/dynamic';

import { DynamicQuote } from './DynamicQuote';

export const DynamicQuoteDynamic = dynamic(() => Promise.resolve(DynamicQuote), { ssr: false });
