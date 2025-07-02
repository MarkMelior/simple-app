'use client';

import { VscEye } from 'react-icons/vsc';

import { Flex, Text } from '@/shared/ui';

import { useArticles } from '@/entities/articles';

import type { FC } from 'react';

interface IsViewProps {
  slug: string
}

export const IsView: FC<IsViewProps> = ({ slug }) => {
  const { viewedArticleSlugs } = useArticles();

  return (
    viewedArticleSlugs.includes(slug) ? (
      <Flex align="items-center" className="text-default-500" gap="gap-0.5">
        <VscEye size={16} />
        <Text size="text-xs">
          просмотрено
        </Text>
      </Flex>
    ) : null
  );
};
