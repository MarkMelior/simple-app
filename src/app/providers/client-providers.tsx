'use client';

import { MessageProvider } from '@/shared/hooks';
import { Theme } from '@/shared/types/theme';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

export function ClientProviders({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme={Theme.DARK}
			disableTransitionOnChange
		>
			<NextUIProvider>
				<MessageProvider>{children}</MessageProvider>
			</NextUIProvider>
		</ThemeProvider>
	);
}
