'use client';

import { Button } from '@nextui-org/button';
import { FC } from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeBlockProps {
	text: string;
	language?: 'TypeScript' | 'JavaScript';
}

export const CodeBlock: FC<CodeBlockProps> = ({
	text,
	language = 'TypeScript',
}) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(text);
	};

	return (
		<div className='my-4 rounded-md overflow-hidden border border-default-200'>
			<div className='bg-default-100 text-sm text-default-400 py-2 px-3 flex justify-between items-center'>
				{language}
				<Button
					variant='light'
					isIconOnly
					onClick={handleCopy}
					className='text-default-400 hover:text-default-200'
				>
					<FaRegCopy size={18} className='text-default-400' />
				</Button>
			</div>
			<SyntaxHighlighter
				language={language}
				wrapLongLines
				showLineNumbers
				style={atomOneDark}
				className='!bg-default-100 border-t-1 border-default-200'
			>
				{text}
			</SyntaxHighlighter>
		</div>
	);
};
