import Link from 'next/link';

import type { StackVariants } from '@/shared/constants';
import type { IconNames } from '@/shared/icons/types';
import { cn } from '@/shared/lib/common';
import { formatDate } from '@/shared/lib/text';
import { Blockquote, Flex, IconComponent, StackButtons } from '@/shared/ui';
import { Skeleton } from '@/shared/ui/client';

import type { FC, ReactNode } from 'react';

interface HeaderProps {
  className?: string
  classNames?: {
    title?: string
    description?: string
    note?: string
    tags?: string
  }
  createdAt?: string
  description: ReactNode
  icon?: IconNames
  isCenter?: 'sm' | 'md' | 'lg' | boolean
  isLoading?: boolean
  note?: string
  noteLink?: string
  tags?: StackVariants[]
  title: ReactNode
  updatedAt?: string
}

const isStale = (dateStr?: string): boolean => {
  if (!dateStr) return false;
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) return false;

  const now = new Date();
  const sixMonthsAgo = new Date();

  sixMonthsAgo.setMonth(now.getMonth() - 12);

  return date < sixMonthsAgo;
};

export const Header: FC<HeaderProps> = ({
  className,
  classNames,
  createdAt,
  description,
  icon,
  isCenter,
  isLoading,
  note,
  noteLink,
  tags,
  title,
  updatedAt,
}) => {
  if (isLoading) {
    return <HeaderSkeleton />;
  }

  const formattedCreatedAt = formatDate(createdAt);
  const formattedUpdatedAt = formatDate(updatedAt);
  const formattedCreatedAtWithTime = formatDate(createdAt, { hasTime: true });
  const formattedUpdatedAtWithTime = formatDate(updatedAt, { hasTime: true });

  const showWarning = isStale(createdAt) || isStale(updatedAt);

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
      <Flex align="items-center" justify="justify-between">
        <div>
          <div
            className={cn(
              'mb-2 text-sm leading-6 font-semibold text-primary-600',
              classNames?.note,
            )}
          >
            {noteLink ? <Link href={noteLink}>{note}</Link> : note}
          </div>
          <h1
            className={cn(
              'inline-block text-2xl sm:text-3xl font-extrabold text-default-900 tracking-tight w-full',
              classNames?.title,
            )}
          >
            {title}
          </h1>
          <div className={cn('mt-2 text-lg text-default-600', classNames?.description)}>
            {description}
          </div>
          {(formattedCreatedAt || formattedUpdatedAt) && (
            <p className={cn('mt-2 text-sm text-default-400', classNames?.description)}>
              {formattedCreatedAt && (
                <span title={formattedCreatedAtWithTime}>
                  Опубликовано:&nbsp;
                  {formattedCreatedAt}
                </span>
              )}
              {formattedUpdatedAt && (
                <>
                  {formattedCreatedAt && ' / '}
                  <span title={formattedUpdatedAtWithTime}>
                    Обновлено:&nbsp;
                    {formattedUpdatedAt}
                  </span>
                </>
              )}
            </p>
          )}
        </div>
        <IconComponent
          className="mr-8 text-primary-600"
          height={64}
          icon={icon}
          width={64}
        />
      </Flex>
      <StackButtons className={cn('mt-6', classNames?.tags)} tags={tags} />
      {showWarning ? (
        <Blockquote className="mt-6" variant="warning">
          <strong>Осторожно:</strong>
          Статья была обновлена более года назад -&nbsp;
          {formattedCreatedAt || formattedUpdatedAt}
          . Информация может быть не актуальной.
        </Blockquote>
      ) : null}
    </header>
  );
};

const HeaderSkeleton = () => (
  <header className="z-20 flex flex-col gap-5">
    <Skeleton className="h-5 w-14 rounded-full" />
    <Skeleton className="h-5 w-96 rounded-full" />
    <Skeleton className="h-5 w-64 rounded-full" />
  </header>
);
