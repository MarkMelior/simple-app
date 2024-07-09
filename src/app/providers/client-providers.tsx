'use client';

import { MessageProvider } from '@/shared/hooks';
import { Theme } from '@/shared/types/theme';
import { ThemeProvider } from 'next-themes';

export function ClientProviders({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme={Theme.DARK}
			disableTransitionOnChange
		>
			<MessageProvider>{children}</MessageProvider>
		</ThemeProvider>
	);
}
