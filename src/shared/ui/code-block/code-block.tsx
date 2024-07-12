'use client';

import { cn, gitHubRepoLink } from '@/shared/lib';
import { GitHubPath } from '@/shared/types/github-path';
import { Theme } from '@/shared/types/theme';
import { Button, Link, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { LuEye } from 'react-icons/lu';
import { TbFileUnknown } from 'react-icons/tb';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
	atomOneDark,
	atomOneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyButton } from '../copy-button/copy-button';
import { StackButtonData, StackVariants } from '../stack-buttons/model/data';
import './code-block.scss';

interface CodeBlockProps {
	text: string;
	fileName?: string;
	language?: StackVariants;
	linesLength?: number;
	github?: GitHubPath;
	className?: string;
	disableLineNumbers?: boolean;
	showHeader?: boolean;
}

export const CodeBlock: FC<CodeBlockProps> = ({
	text,
	fileName,
	github,
	language = 'TypeScript',
	linesLength = 10,
	showHeader = true,
	className,
	disableLineNumbers,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const lines = text.split('\n');
	const isLong = lines.length > linesLength;

	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div
			className={cn(
				'my-4 rounded-md overflow-hidden border border-default-200 h-fit code-block__wrapper',
				className,
			)}
		>
			<div className='bg-default-100 text-sm text-default-600 py-1 px-3 flex justify-between items-center'>
				{StackButtonData[language]?.icon || <TbFileUnknown size={20} />}
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
				showLineNumbers={!disableLineNumbers}
				style={
					mounted
						? theme === Theme.DARK
							? atomOneDark
							: atomOneLight
						: atomOneDark
				}
				className='!bg-default-100 border-t-1 border-default-200 text-sm'
			>
				{isExpanded || !isLong ? text : lines.slice(0, linesLength).join('\n')}
			</SyntaxHighlighter>

			{isLong && (
				<div className='relative'>
					{!isExpanded && (
						<div className='absolute pointer-events-none w-full -top-24 h-24 bg-gradient-to-t from-default-100' />
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
