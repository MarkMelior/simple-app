import { cn } from '@/shared/lib/common';
import type { CodeBlockProps } from '@/shared/ui/client';
import { CodeBlock } from '@/shared/ui/client';

import type { FC, JSX } from 'react';

export interface ICodeStep {
  body: () => JSX.Element
  code: CodeBlockProps
  title: string
}

interface CodeStepProps {
  isLast?: boolean
  step: ICodeStep
}

export const CodeStep: FC<CodeStepProps> = async ({ isLast, step }) => (
  <li
    className={cn(
      'relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:rounded-md  before:ring-default-100/5 before:bg-default-200 before:text-default-800 before:shadow-none before:highlight-white/5',
      {
        'pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-default-800/10': !isLast,
      },
    )}
    style={{ counterIncrement: 'step 1' }}
  >
    <div className="col-span-2 mb-6 xl:mb-0">
      <h4 className="mb-2 text-sm font-semibold leading-6 text-default-800">
        {step.title}
      </h4>
      <div className="text-sm">{step.body()}</div>
    </div>
    <CodeBlock
      {...step.code}
      className="relative z-10 col-span-3 my-0 -ml-10 xl:ml-0"
    />
  </li>
);
