'use client';

import { useCopy } from '@/shared/hooks';
import { ProgrammingLanguage } from '@/shared/types/programming-language';
import { Theme } from '@/shared/types/theme';
import { Button, Skeleton, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
	atomOneDark,
	atomOneLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeProps {
	text: string;
	language?: ProgrammingLanguage;
}

export const Code: FC<CodeProps> = ({ text, language = 'TypeScript' }) => {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();
	const { handleCopy } = useCopy();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Skeleton className='!bg-default-100 h-[25px] w-28 rounded-md inline-block' />
		);
	}

	return (
		<Tooltip content='Copy code' size='sm'>
			<Button
				as={'code'}
				className='bg-default-100 py-0.5 px-1 h-fit rounded-md -top-0.5 select-text'
				onClick={() => handleCopy(text)}
				disableRipple
			>
				<SyntaxHighlighter
					language={language}
					style={theme === Theme.DARK ? atomOneDark : atomOneLight}
					PreTag={React.Fragment}
					CodeTag={React.Fragment}
				>
					{text}
				</SyntaxHighlighter>
			</Button>
		</Tooltip>
	);
};
