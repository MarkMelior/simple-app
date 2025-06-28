import Link from 'next/link';

import { cn } from '@/shared/lib/common';
import type { ArticleMetadata } from '@/shared/lib/mdx';
import { Flex, IconComponent } from '@/shared/ui';

import type { FC } from 'react';

interface CategoryCardProps {
  articles: ArticleMetadata[]
  className?: string
}

export const CategoryCard: FC<CategoryCardProps> = ({
  articles,
  className,
}) => (
  <div className={cn('grid sm:grid-cols-2 gap-4', className)}>
    {articles.map(({ description, icon, link, title }) => (
      <Link
        className="flex flex-col gap-2 rounded-md border border-default-200 bg-default-100 px-6 py-4 transition hover:border-default-300 hover:bg-default-100/50 active:scale-[0.98]"
        href={link ?? '#'}
        key={title}
      >
        <Flex justify="justify-between">
          {title}
          <IconComponent height={20} icon={icon} width={20} />
        </Flex>
        <span className="text-sm text-default-600">
          {description}
        </span>
      </Link>
    ))}
  </div>
);
