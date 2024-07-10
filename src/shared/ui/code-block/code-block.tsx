'use client';

import { Theme } from '@/shared/types/theme';
import { Skeleton } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { FC, useEffect, useMemo, useState } from 'react';
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { TbFileUnknown } from 'react-icons/tb';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
	atomOneDark,
	atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyButton } from '../copy-button/copy-button';

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

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderIcon = useMemo(() => {
		switch (language) {
			case 'TypeScript':
				return <BiLogoTypescript size={20} />;
			case 'JavaScript':
				return <BiLogoJavascript size={20} />;
			default:
				return <TbFileUnknown size={20} />;
		}
	}, [language]);

	if (!mounted) {
		return <Skeleton className='!bg-default-100 my-4 h-96 w-full rounded-md' />;
	}

	return (
		<div className='my-4 rounded-md overflow-hidden border border-default-200'>
			<div className='bg-default-100 text-sm text-default-600 py-2 px-3 flex justify-between items-center'>
				{/* <Tooltip placement='top' content={language}> */}
				{renderIcon}
				{/* </Tooltip> */}
				{fileName ? fileName : language}
				<CopyButton text={text} />
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
