'use client';

import { LuCheck, LuCopy } from 'react-icons/lu';

import { cn } from '@/shared/lib/common';
import { useCopy } from '@/shared/lib/text';

import styles from './copyText.module.scss';

import type { FC } from 'react';

interface CopyTextProps {
  children: string
  className?: string
  copiedText?: string
}

export const CopyText: FC<CopyTextProps> = ({ children, className, copiedText }) => {
  const { copy, isCopied } = useCopy();

  return (
    <span
      className={cn(styles.copy, 'group', { [styles.copied]: isCopied }, className)}
      data-copied={isCopied}
      onClick={() => copy(children, { content: copiedText })}
    >
      {children}
      <LuCheck
        className="fade-in absolute right-2 scale-50 text-success-600 opacity-0 transition-all group-data-[copied=true]:scale-100 group-data-[copied=true]:opacity-100"
        size={18}
      />
      <LuCopy
        className="fade-out absolute right-2 scale-100 text-default-500 opacity-100 transition-all group-hover:text-default-600 group-data-[copied=true]:scale-50 group-data-[copied=true]:opacity-0"
        size={18}
      />
    </span>
  );
};
