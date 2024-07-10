'use client';

import { gitHubRepoLink } from '@/shared/lib';
import { GitHubPath } from '@/shared/types/github-path';
import { ProgrammingLanguage } from '@/shared/types/programming-language';
import { Theme } from '@/shared/types/theme';
import { Button, Skeleton, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FC, useEffect, useMemo, useState } from 'react';
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { LuEye } from 'react-icons/lu';
import { TbFileUnknown } from 'react-icons/tb';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
	atomOneDark,
	atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyButton } from '../copy-button/copy-button';
import './code-block.scss';

interface CodeBlockProps {
	text: string;
	fileName?: string;
	language?: ProgrammingLanguage;
	linesLength?: number;
	github?: GitHubPath;
}

export const CodeBlock: FC<CodeBlockProps> = ({
	text,
	fileName,
	github,
	language = 'TypeScript',
	linesLength = 15,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const lines = text.split('\n');
	const isLong = lines.length > linesLength;

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
		<div className='my-4 rounded-md overflow-hidden border border-default-200 code-block__wrapper'>
			<div className='bg-default-100 text-sm text-default-600 py-2 px-3 flex justify-between items-center'>
				{/* <Tooltip placement='top' content={language}> */}
				{renderIcon}
				{/* </Tooltip> */}
				{fileName ? fileName : language}
				<div className='flex gap-1 items-center'>
					{github?.path && (
						<Tooltip content='View code on GitHub'>
							<Button
								as={Link}
								href={gitHubRepoLink(github)}
								target='_blank'
								variant='light'
								isIconOnly
								radius='sm'
								size='sm'
							>
								<LuEye
									size={20}
									className='text-default-400 group-hover:text-default-600'
								/>
							</Button>
						</Tooltip>
					)}
					<CopyButton text={text} />
				</div>
			</div>

			<SyntaxHighlighter
				language={language}
				showLineNumbers
				style={theme === Theme.DARK ? atomOneDark : atomOneLight}
				className='!bg-default-100 border-t-1 border-default-200 text-sm'
			>
				{isExpanded || !isLong ? text : lines.slice(0, linesLength).join('\n')}
			</SyntaxHighlighter>

			{isLong && (
				<div className='relative'>
					{!isExpanded && (
						<div className='absolute pointer-events-none w-full -top-32 h-32 bg-gradient-to-t from-default-100' />
					)}
					<Button
						radius='none'
						onClick={() => setIsExpanded(!isExpanded)}
						className='bg-default-100 text-default-600 py-2 px-3 w-full text-left data-[pressed=true]:scale-100 hover:bg-default-200'
					>
						{isExpanded ? 'Hide' : 'Show more'}
					</Button>
				</div>
			)}
		</div>
	);
};
