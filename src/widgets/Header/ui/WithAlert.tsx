import type { TwBackgroundColor } from '@/shared/types';
import { Flex, Text } from '@/shared/ui';

import styles from './withAlert.module.scss';

import type { ReactNode } from 'react';

interface WithAlertProps {
  action: ReactNode
  children: ReactNode
  color: TwBackgroundColor
  icon: ReactNode
  title: string
}

export const WithAlert = ({
  action,
  children,
  color,
  icon,
  title,
}: WithAlertProps) => {
  const test = '';

  return (
    <Flex className={styles.wrapper}>
      {children}
      <div className={styles.alert}>
        {icon}
        <Text>{title}</Text>
      </div>
    </Flex>
  );
};
