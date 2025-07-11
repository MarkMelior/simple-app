import { type FC } from 'react';
import { IoIosCode } from 'react-icons/io';
import { TbFileUnknown } from 'react-icons/tb';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Fonts } from '@/shared/constants/fonts';
import { StackData } from '@/shared/constants/stack-data';
import type { StackVariants } from '@/shared/constants/stack-data';
import { cn } from '@/shared/lib/common';
import { GlowingBox } from '@/shared/ui/client';
import { Text } from '@/shared/ui/custom';

import { CodeBlockButtons } from './CodeBlockButtons';
import { SyntaxHighlighter } from './SyntaxHighlighter';

import './codeBlock.scss';

export interface CodeBlockProps {
  className?: string
  copiedText?: string
  disableLineNumbers?: boolean
  exampleLink?: string
  filename?: string
  hideHeader?: boolean
  hideLangIcon?: boolean
  lang?: StackVariants
  signature?: string
  text: string
}

export const CodeBlock: FC<CodeBlockProps> = ({
  className,
  copiedText,
  disableLineNumbers,
  exampleLink,
  filename,
  hideHeader,
  hideLangIcon,
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
          <Text
            className="m-0 flex-1"
            color="text-default-800"
            font="default"
            weight="font-semibold"
          >
            {signature}
          </Text>
        </div>
      )}
      <GlowingBox
        classNames={{
          background: cn('grid h-fit group/buttons code-block__wrapper', Fonts.default),
          foreground: className,
        }}
        rounded="rounded-none"
      >
        {hideHeader ? (
          <CodeBlockButtons
            copiedText={copiedText}
            exampleLink={exampleLink}
            hoverButton={true}
            text={text}
          />
        ) : (
          <div className="sticky top-0 flex items-center justify-between gap-3 whitespace-normal break-all bg-default-200 px-3 py-0.5 text-[0.825rem] text-default-600">
            {hideLangIcon ? null : (StackData[lang]?.icon || <TbFileUnknown size={20} />)}
            {filename ? filename : StackData[lang]?.name}
            <CodeBlockButtons
              copiedText={copiedText}
              exampleLink={exampleLink}
              text={text}
            />
          </div>
        )}
        <SyntaxHighlighter
          className={cn(
            'max-h-[28rem] text-sm overflow-auto !bg-default-100 !text-default-700',
            { 'border-0': hideHeader },
          )}
          codeTagProps={{
            className: 'bg-inherit',
          }}
          customStyle={{
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
