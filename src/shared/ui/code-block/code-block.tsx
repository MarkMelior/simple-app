'use client';

import { Dictionary } from '@/shared/config/i18n';
import { FontDefault } from '@/shared/const/fonts';
import { cn, gitHubRepoLink } from '@/shared/lib';
import { GitHubPath } from '@/shared/types/github-path';
import { Button, Link, Tooltip } from '@nextui-org/react';
import { FC } from 'react';
import { LuEye } from 'react-icons/lu';
import { TbFileUnknown } from 'react-icons/tb';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { StackData, StackVariants } from '../../const/stack-data';
import { CopyButton } from '../copy-button/copy-button';
import './code-block.scss';

interface CodeBlockProps {
	text: string;
	fileName?: string;
	language?: StackVariants;
	github?: GitHubPath;
	className?: string;
	disableLineNumbers?: boolean;
	hideHeader?: boolean;
	dict: Dictionary['ui'];
}

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('markdown', markdown);

export const CodeBlock: FC<CodeBlockProps> = ({
	text,
	fileName,
	github,
	language = 'typescript',
	hideHeader,
	className,
	disableLineNumbers,
	dict,
}) => {
	text = text.trimEnd();

	return (
		<div
			className={cn(
				'grid mt-4 mb-12 rounded-md overflow-hidden border border-default-200 h-fit relative group/buttons code-block__wrapper',
				FontDefault.className,
				className,
			)}
		>
			{!hideHeader && (
				<div className='bg-default-100 text-sm text-default-600 py-1 px-3 flex justify-between items-center break-all whitespace-normal text-center'>
					{StackData[language]?.icon || <TbFileUnknown size={20} />}
					{fileName ? fileName : language}
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
					language={language}
					showLineNumbers={!disableLineNumbers}
					style={oneDark}
					className={cn(
						'border-t-1 border-default-200 max-h-96 text-sm sm:text-base overflow-auto !bg-default-100 !text-default-700',
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
				'absolute flex-col-reverse right-1 top-1 opacity-0 group-hover/buttons:opacity-100 transition-opacity':
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
	);
}
