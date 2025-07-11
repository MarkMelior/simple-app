import { Flex, Text } from '@/shared/ui';

import { Drawer } from './Drawer';

import styles from './headerButtons.module.scss';

export const HeaderButtons = () => (
  <Flex gap="gap-4" justify="justify-end">
    <Text className={styles.name} font="rouge">
      Melior Web
    </Text>
    <Drawer />
  </Flex>
);
