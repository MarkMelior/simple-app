'use client';

// import { Link } from '@heroui/react'; // TODO
import Link from 'next/link';
import { IoIosCode } from 'react-icons/io';
import { LuEye } from 'react-icons/lu';
import { TbFileUnknown } from 'react-icons/tb';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FontDefault } from '@/shared/constants/fonts';
import { StackData } from '@/shared/constants/stack-data';
import type { StackVariants } from '@/shared/constants/stack-data';
import { gitHubRepoLink } from '@/shared/lib/github';
import type { GithubPath } from '@/shared/lib/github/types';
import { cn } from '@/shared/lib/react';
import { Button, Tooltip } from '@/shared/ui/client';

import { CopyButton } from '../../CopyButton';

import type { FC } from 'react';

import './codeBlock.scss';

export interface CodeBlockProps {
  className?: string
  disableLineNumbers?: boolean
  filename?: string
  github?: GithubPath
  hideHeader?: boolean
  lang?: StackVariants
  signature?: string
  text: string
}

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('markdown', markdown);

export const CodeBlock: FC<CodeBlockProps> = ({
  className,
  disableLineNumbers,
  filename,
  github,
  hideHeader,
  lang = 'typescript',
  signature,
  text,
}) => {
  text = text.trimEnd();

  return (
    <>
      {signature && (
        <div className="flex items-start my-6 space-x-4">
          <div className="relative mt-1 w-4 h-4 rounded-full text-white flex items-center justify-center ring-2 bg-primary-500 ring-primary-500">
            <IoIosCode size={18} />
            <div className="absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] rounded-full bg-primary-400/30" />
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
          <div className="bg-default-100 text-[0.825rem] text-default-600 py-0.5 px-3 flex justify-between items-center break-all whitespace-normal text-center">
            {StackData[lang]?.icon || <TbFileUnknown size={20} />}
            {filename ? filename : StackData[lang]?.name}
            <CodeBlockButtons github={github} text={text} />
          </div>
        )}

        <>
          {hideHeader && (
            <CodeBlockButtons
              github={github}
              hoverButton={true}
              text={text}
            />
          )}
          <SyntaxHighlighter
            className={cn(
              'border-t-1 border-default-200 max-h-[28rem] text-sm sm:text-base overflow-auto !bg-default-100 !text-default-700',
              {
                'border-0': hideHeader,
              },
            )}
            codeTagProps={{
              className: 'bg-inherit',
            }}
            customStyle={{
              borderRadius: 0,
              margin: 0,
              textShadow: 'none',
            }}
            language={lang}
            showLineNumbers={!disableLineNumbers}
            style={oneDark}
          >
            {text}
          </SyntaxHighlighter>
        </>
      </div>
    </>
  );
};

interface CodeBlockButtonsProps {
  github?: GithubPath
  hoverButton?: boolean
  text: string
}

function CodeBlockButtons({
  github,
  hoverButton,
  text,
}: CodeBlockButtonsProps) {
  return (
    <div
      className={cn('flex gap-1 items-center', {
        'absolute right-2 top-2 opacity-0 group-hover/buttons:opacity-100 transition-opacity': hoverButton,
      })}
    >
      {github?.path && (
        <Tooltip content="Посмотреть код на GitHub" placement="top">
          <Button
            as={Link}
            href={gitHubRepoLink(github)}
            isIconOnly={true}
            radius="sm"
            size="sm"
            target="_blank"
            variant="light"
          >
            <LuEye
              className="text-default-400 group-hover:text-default-600 transition-colors"
              size={20}
            />
          </Button>
        </Tooltip>
      )}
      <CopyButton text={text} />
    </div>
  );
}
