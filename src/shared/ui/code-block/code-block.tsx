'use client';

import { useMessage } from '@/shared/hooks';
import { Theme } from '@/shared/types/theme';
import { Button } from '@nextui-org/button';
import { Skeleton } from '@nextui-org/skeleton';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
	atomOneDark,
	atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeBlockProps {
	text: string;
	fileName?: string;
	language?: 'TypeScript' | 'JavaScript';
}

export const CodeBlock: FC<CodeBlockProps> = ({
	text,
	fileName,
	language = 'TypeScript',
}) => {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();
	const { showMessage } = useMessage();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleCopy = () => {
		navigator.clipboard.writeText(text);
		showMessage({
			content: 'Copied to clipboard!',
			type: 'success',
		});
	};

	if (!mounted) {
		return <Skeleton className='!bg-default-100 my-4 h-96 w-full rounded-md' />;
	}

	return (
		<div className='my-4 rounded-md overflow-hidden border border-default-200'>
			<div className='bg-default-100 text-sm text-default-600 py-2 px-3 flex justify-between items-center'>
				{fileName ? fileName : language}
				<Button
					variant='light'
					isIconOnly
					onClick={handleCopy}
					radius='sm'
					size='sm'
					className='text-default-400 hover:text-default-200'
				>
					<FaRegCopy
						size={18}
						className='text-default-400 group-hover:text-default-600'
					/>
				</Button>
			</div>
			<SyntaxHighlighter
				language={language}
				showLineNumbers
				style={theme === Theme.DARK ? atomOneDark : atomOneLight}
				className='!bg-default-100 border-t-1 border-default-200'
			>
				{text}
			</SyntaxHighlighter>
		</div>
	);
};
