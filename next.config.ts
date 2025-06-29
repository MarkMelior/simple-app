import { version } from './package.json';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
  },
  experimental: {
    /** FIXED: Ломался порядок импортов стилей - tailwind был в приоритете */
    cssChunking: false,
  },
  /** FIXED: Лимит при сборке vercel 250 MB */
  outputFileTracingExcludes: {
    '*': ['**/.next/cache/**'],
  },
};

export default nextConfig;
