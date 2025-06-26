'use client';

import { Link } from '@heroui/react';
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
import { cn } from '@/shared/lib/common';
import { Button, GlowingBox, Tooltip } from '@/shared/ui/client';

import { CopyButton } from '../../CopyButton';

import type { FC } from 'react';

import './codeBlock.scss';

export interface CodeBlockProps {
  className?: string
  disableLineNumbers?: boolean
  exampleLink?: string
  filename?: string
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
  exampleLink,
  filename,
  hideHeader,
  lang = 'typescript',
  signature,
  text,
}) => {
  text = text.trimEnd();

  return (
    <>
      {signature && (
        <div className="my-6 flex items-start space-x-4">
          <div className="relative mt-1 flex size-4 items-center justify-center rounded-full bg-primary-500 text-white ring-2 ring-primary-500">
            <IoIosCode size={18} />
            <div className="absolute left-[0.46875rem] top-full mt-1 h-[1.375rem] w-px rounded-full bg-primary-600/30" />
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
      <GlowingBox
        classNames={{
          background: cn(
            'grid rounded-md overflow-hidden border border-default-100 h-fit relative group/buttons code-block__wrapper',
            FontDefault.className,
          ),
          border: cn(className, 'bg-default-200'),
        }}
      >
        {!hideHeader && (
          <div className="flex items-center justify-between whitespace-normal break-all bg-default-100 px-3 py-0.5 text-center text-[0.825rem] text-default-600">
            {StackData[lang]?.icon || <TbFileUnknown size={20} />}
            {filename ? filename : StackData[lang]?.name}
            <CodeBlockButtons exampleLink={exampleLink} text={text} />
          </div>
        )}
        <>
          {hideHeader && (
            <CodeBlockButtons
              exampleLink={exampleLink}
              hoverButton={true}
              text={text}
            />
          )}
          <SyntaxHighlighter
            className={cn(
              'border-t-1 border-default-200 max-h-[28rem] text-sm overflow-auto !bg-default-100 !text-default-700',
              { 'border-0': hideHeader },
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
      </GlowingBox>
    </>
  );
};

interface CodeBlockButtonsProps {
  exampleLink?: string
  hoverButton?: boolean
  text: string
}

function CodeBlockButtons({
  exampleLink,
  hoverButton,
  text,
}: CodeBlockButtonsProps) {
  return (
    <div
      className={cn('flex gap-1 items-center', {
        'absolute right-2 top-2 opacity-0 group-hover/buttons:opacity-100 transition-opacity': hoverButton,
      })}
    >
      {exampleLink ? (
        <Tooltip content="Посмотреть код на GitHub" placement="top">
          <Button
            as={Link}
            href={exampleLink}
            isIconOnly={true}
            radius="sm"
            size="sm"
            target="_blank"
            variant="light"
          >
            <LuEye
              className="text-default-400 transition-colors group-hover:text-default-600"
              size={20}
            />
          </Button>
        </Tooltip>
      ) : null}
      <CopyButton text={text} />
    </div>
  );
}

export default CodeBlock;
