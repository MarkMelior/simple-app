'use client';

import { Dictionary } from '@/shared/config';
import { cn, gitHubRepoLink } from '@/shared/lib';
import { GitHubPath } from '@/shared/types/github-path';
import { Theme } from '@/shared/types/theme';
import { Button, Link, Tooltip } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { FC, useCallback, useEffect, useState } from 'react';
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
	hideHeader?: boolean;
	dict: Dictionary['ui'];
}

const inter = Inter({ subsets: ['latin'] });
const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] });

export const CodeBlock: FC<CodeBlockProps> = ({
	text,
	fileName,
	github,
	language = 'TypeScript',
	linesLength = 10,
	hideHeader,
	className,
	disableLineNumbers,
	dict,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const lines = text.split('\n');
	const isLong = lines.length > linesLength;

	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const buttons = useCallback(
		({ hoverButton }: { hoverButton?: boolean } = {}) => (
			<div
				className={cn('flex gap-1 items-center', {
					'absolute flex-col-reverse right-2 top-2 opacity-0 group-hover/buttons:opacity-100 transition-opacity':
						hoverButton,
				})}
			>
				{github?.path && (
					<Tooltip
						content={dict['code-view-github']}
						placement={hoverButton ? 'left' : 'top'}
					>
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
								className='text-default-400 group-hover:text-default-600 transition-colors'
							/>
						</Button>
					</Tooltip>
				)}
				<CopyButton
					text={text}
					dict={dict}
					tooltipPlaceman={hoverButton ? 'left' : 'top'}
				/>
			</div>
		),
		[dict, github, text],
	);

	return (
		<div
			className={cn(
				'my-4 rounded-md overflow-hidden border border-default-200 h-fit relative group/buttons code-block__wrapper',
				inter.className,
				className,
			)}
		>
			{!hideHeader && (
				<div className='bg-default-100 text-sm text-default-600 py-1 px-3 flex justify-between items-center'>
					{StackButtonData[language]?.icon || <TbFileUnknown size={20} />}
					{fileName ? fileName : language}
					{buttons()}
				</div>
			)}

			<>
				{hideHeader && buttons({ hoverButton: true })}
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
					className={cn('!bg-default-100 border-t-1 border-default-200', {
						'border-0': hideHeader,
					})}
					codeTagProps={{
						className: cn('text-[0.85rem]', jetBrains_Mono.className),
					}}
				>
					{isExpanded || !isLong
						? text
						: lines.slice(0, linesLength).join('\n')}
				</SyntaxHighlighter>
			</>

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
						{isExpanded ? dict['code-hide'] : dict['code-show']}
					</Button>
				</div>
			)}
		</div>
	);
};
