import { type FC } from 'react';
import { IoIosCode } from 'react-icons/io';
import { TbFileUnknown } from 'react-icons/tb';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FontDefault } from '@/shared/constants/fonts';
import { StackData } from '@/shared/constants/stack-data';
import type { StackVariants } from '@/shared/constants/stack-data';
import { cn } from '@/shared/lib/common';
import { GlowingBox } from '@/shared/ui/client';

import { CodeBlockButtons } from './CodeBlockButtons';
import { SyntaxHighlighter } from './SyntaxHighlighter';

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
          background: cn('grid h-fit group/buttons code-block__wrapper', FontDefault.className),
          foreground: className,
        }}
      >
        {hideHeader ? (
          <CodeBlockButtons
            exampleLink={exampleLink}
            hoverButton={true}
            text={text}
          />
        ) : (
          <div className="sticky top-0 flex items-center justify-between whitespace-normal break-all rounded-t-md bg-default-200 px-3 py-0.5 text-center text-[0.825rem] text-default-600">
            {StackData[lang]?.icon || <TbFileUnknown size={20} />}
            {filename ? filename : StackData[lang]?.name}
            <CodeBlockButtons exampleLink={exampleLink} text={text} />
          </div>
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
            borderRadius: hideHeader ? '6px' : '0 0 6px 6px',
            margin: 0,
            textShadow: 'none',
          }}
          language={lang}
          showLineNumbers={!disableLineNumbers}
          style={oneDark}
        >
          {text}
        </SyntaxHighlighter>
      </GlowingBox>
    </>
  );
};
