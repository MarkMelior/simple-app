import { CategoryCard } from '@/widgets/(articles)/CategoryCard';

import { cn } from '@/shared/lib/common';

import type { ArticlesListResponse } from '@/entities/articles';

import { Flex } from '../../../Layout';
import { Text } from '../../../Text';

import styles from './articlesSection.module.scss';

import type { FC } from 'react';

interface ArticlesSectionProps {
  articlesList: ArticlesListResponse[]
  isVisible: boolean
}

export const ArticlesSection: FC<ArticlesSectionProps> = ({ articlesList, isVisible }) => (
  <div
    className={cn(
      styles.resources,
      { [styles.visible]: isVisible },
    )}
    id="resources"
    style={{ display: isVisible ? 'block' : 'none' }}
  >
    {articlesList.map(({ articles, title }) => (
      <Flex gap="gap-4" key={title} vertical={true}>
        <Text size="text-lg" weight="font-semibold">{title}</Text>
        <CategoryCard articles={articles} variant="small" />
      </Flex>
    ))}
  </div>
);
