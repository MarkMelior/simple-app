import { cn } from '@/shared/lib/common';
import { formatDate } from '@/shared/lib/text';
import { Flex, IconComponent, Link, StackButtons, Text } from '@/shared/ui';
import { GlowingBox } from '@/shared/ui/client';

import type { ArticleData } from '@/entities/articles';

import { IsView } from './IsView';

import styles from './categoryCard.module.scss';

import type { FC } from 'react';

interface CategoryCardProps {
  articles: ArticleData[]
  className?: string
  cols?: '2' | '3'
  glowingSize?: number
  openWithoutModal?: boolean
}

export const CategoryCard: FC<CategoryCardProps> = ({
  articles,
  className,
  cols = '2',
  glowingSize,
  openWithoutModal,
}) => (
  <div className={cn(
    'grid gap-4',
    {
      'sm:grid-cols-2': cols === '2',
      'sm:grid-cols-2 lg:grid-cols-3': cols === '3',
    },
    className,
  )}
  >
    {articles.map(({ createdAt, description, icon, link, slug, tags, title, updatedAt }) => (
      <GlowingBox
        borderStrengthHover={1}
        classNames={{ background: 'h-full', foreground: 'h-full transition hover:scale-[1.01] active:scale-[0.99]' }}
        key={title}
        rounded="rounded-lg"
        size={glowingSize}
      >
        <Link
          className="flex h-full flex-col gap-2 px-6 py-4"
          href={link ?? '#'}
          isHardOpen={openWithoutModal}
          scroll={false}
          variant="default"
        >
          <Flex gap="gap-2" justify="justify-between">
            <Text className={styles.title}>{title}</Text>
            <IconComponent height={20} icon={icon} width={20} />
          </Flex>
          <Text color="text-default-600" size="text-sm">
            {description}
          </Text>
          <StackButtons className="my-1" size="xs" tags={tags} />
          <Flex align="items-center" className="mt-auto">
            <IsView slug={slug} />
            <Text className="ml-auto" color="text-default-500" size="text-xs">
              {formatDate(updatedAt ?? createdAt)}
            </Text>
          </Flex>
        </Link>
      </GlowingBox>
    ))}
  </div>
);
