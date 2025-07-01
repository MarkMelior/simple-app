import { FontRouge } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import { Text } from '@/shared/ui';

import styles from './headerButtons.module.scss';

export const HeaderButtons = () => (
  <Text className={cn(styles.wrapper, FontRouge.className)}>
    Melior Web
  </Text>
);
