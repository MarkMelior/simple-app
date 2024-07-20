'use client';

import { Dictionary } from '@/shared/config/i18n';
import { FontDefault } from '@/shared/const/fonts';
import { StackData, StackVariants } from '@/shared/const/stack-data';
import { cn, gitHubRepoLink } from '@/shared/lib';
import { GitHubPath } from '@/shared/types/github-path';
import { Button, Link, Tooltip } from '@nextui-org/react';
import { FC } from 'react';
import { IoIosCode } from 'react-icons/io';
import { LuEye } from 'react-icons/lu';
import { TbFileUnknown } from 'react-icons/tb';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyButton } from '../copy-button/copy-button';
import './code-block.scss';

export interface CodeBlockProps {
	text: string;
	filename?: string;
	lang?: StackVariants;
	github?: GitHubPath;
	className?: string;
	disableLineNumbers?: boolean;
	hideHeader?: boolean;
	dict: Dictionary['ui'];
	signature?: string;
}

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('markdown', markdown);

export const CodeBlock: FC<CodeBlockProps> = ({
	text,
	filename,
	github,
	lang = 'typescript',
	hideHeader,
	className,
	disableLineNumbers,
	dict,
	signature,
}) => {
	text = text.trimEnd();

	return (
		<>
			{signature && (
				<div className='flex items-start my-6 space-x-4'>
					<div className='relative mt-1 w-4 h-4 rounded-full text-default-900 flex items-center justify-center ring-2 bg-primary-500 ring-primary-500'>
						<IoIosCode size={18} />
						<div className='absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] rounded-full bg-primary-400/30' />
					</div>
					<p
						className={cn(
							'm-0 flex-1 font-semibold text-default-800',
							FontDefault.className,
						)}
					>
						{signature}
					</p>
				</div>
			)}
			<div
				className={cn(
					'grid rounded-md overflow-hidden border border-default-200 h-fit relative group/buttons code-block__wrapper',
					FontDefault.className,
					className,
				)}
			>
				{!hideHeader && (
					<div className='bg-default-100 text-[0.825rem] text-default-600 py-0.5 px-3 flex justify-between items-center break-all whitespace-normal text-center'>
						{StackData[lang]?.icon || <TbFileUnknown size={20} />}
						{filename ? filename : StackData[lang]?.name}
						<CodeBlockButtons dict={dict} text={text} github={github} />
					</div>
				)}

				<>
					{hideHeader && (
						<CodeBlockButtons
							dict={dict}
							text={text}
							github={github}
							hoverButton
						/>
					)}
					<SyntaxHighlighter
						language={lang}
						showLineNumbers={!disableLineNumbers}
						style={oneDark}
						className={cn(
							'border-t-1 border-default-200 max-h-[28rem] text-sm sm:text-base overflow-auto !bg-default-100 !text-default-700',
							{
								'border-0': hideHeader,
							},
						)}
						customStyle={{
							textShadow: 'none',
							margin: 0,
							borderRadius: 0,
						}}
						codeTagProps={{
							className: 'bg-inherit',
						}}
					>
						{text}
					</SyntaxHighlighter>
				</>
			</div>
		</>
	);
};

interface CodeBlockButtonsProps {
	hoverButton?: boolean;
	github?: GitHubPath;
	dict: Dictionary['ui'];
	text: string;
}

function CodeBlockButtons({
	hoverButton,
	github,
	dict,
	text,
}: CodeBlockButtonsProps) {
	return (
		<div
			className={cn('flex gap-1 items-center', {
				'absolute right-2 top-2 opacity-0 group-hover/buttons:opacity-100 transition-opacity':
					hoverButton,
			})}
		>
			{github?.path && (
				<Tooltip content={dict['code-view-github']} placement='top'>
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
			<CopyButton text={text} dict={dict} />
		</div>
	);
}
