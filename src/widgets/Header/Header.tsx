import Link from 'next/link';

import type { StackVariants } from '@/shared/constants';
import { cn } from '@/shared/lib/react';
import { StackButtons } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/client';

interface HeaderProps {
  className?: string
  classNames?: {
    title?: string
    description?: string
    note?: string
    tags?: string
  }
  description: string
  isCenter?: 'sm' | 'md' | 'lg' | boolean
  isLoading?: boolean
  note: string
  noteLink?: string
  tags?: StackVariants[]
  title: string
}

export const Header: React.FC<HeaderProps> = ({
  className,
  classNames,
  description,
  isCenter,
  isLoading,
  note,
  noteLink,
  tags,
  title,
}) => {
  if (isLoading) {
    return <HeaderSkeleton />;
  }

  return (
    <header
      className={cn(
        'relative z-20 mb-10',
        { 'text-center': isCenter },
        { 'sm:text-start': isCenter === 'sm' },
        { 'md:text-start': isCenter === 'md' },
        { 'lg:text-start': isCenter === 'lg' },
        className,
      )}
    >
      <div>
        <p
          className={cn(
            'mb-2 text-sm leading-6 font-semibold text-primary-400',
            classNames?.note,
          )}
        >
          {noteLink ? <Link href={noteLink}>{note}</Link> : note}
        </p>
        <div className="flex items-center">
          <h1
            className={cn(
              'inline-block text-2xl sm:text-3xl font-extrabold text-default-900 tracking-tight w-full',
              classNames?.title,
            )}
          >
            {title}
          </h1>
        </div>
      </div>
      <p
        className={cn('mt-2 text-lg text-default-600', classNames?.description)}
      >
        {description}
      </p>

      <StackButtons className={cn('mt-6', classNames?.tags)} tags={tags} />
    </header>
  );
};

const HeaderSkeleton = () => (
  <header className="flex flex-col gap-5 z-20 mb-10">
    <Skeleton className="h-5 w-14 rounded-full" />
    <Skeleton className="h-5 w-96 rounded-full" />
    <Skeleton className="h-5 w-64 rounded-full" />
  </header>
);
