'use client';

import { LongArrowRightIcon } from '@/shared/icons';
import { useModals } from '@/shared/lib/common';
import { Text } from '@/shared/ui';

import styles from './myArticlesButton.module.scss';

export const MyArticlesButton = () => {
  const { toggle } = useModals('articlesCategories');

  return (
    <Text
      className={styles.button}
      color="text-default-400"
      onClick={toggle}
      size="text-3xl"
      weight="font-extralight"
    >
      Мои статьи
      <LongArrowRightIcon className="-mb-1" />
    </Text>
  );
};
