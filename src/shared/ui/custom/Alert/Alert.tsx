import clsx from 'clsx';

import { CopyIcon, CrossIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/shared/icons';
import { copyToClipboard } from '@/shared/lib/text';
import { Card, Flex, Text } from '@/shared/ui';
import { Button } from '@/shared/ui/client';

import styles from './alert.module.scss';

const getIcon = (type: IAlert['type']) => {
  switch (type) {
    case 'success':
      return <SuccessIcon />;
    case 'info':
      return <InfoIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return <InfoIcon />;
  }
};

export interface IAlert {
  className?: string
  closable?: boolean
  content: string
  description?: string
  isCopy?: boolean
  onClose?: () => void
  type?: 'success' | 'info' | 'warning' | 'error' | 'base'
}

export const Alert = ({
  className,
  closable = true,
  content,
  description,
  isCopy,
  onClose,
  type = 'success',
}: IAlert) => (
  <Card
    className={clsx(styles.wrapper, styles[type], className)}
    rounded="rounded-2xl"
  >
    <Flex align="items-center" gap="gap-4">
      <div className={styles.icon}>
        {getIcon(type)}
      </div>
      <div>
        <Text weight="font-semibold">{content}</Text>
        {description && <Text as="p" size="text-sm">{description}</Text>}
      </div>
    </Flex>
    <Flex className={styles.rightAction} gap="gap-1">
      {isCopy ? (
        <Button
          className={styles.button}
          isIconOnly={true}
          onPress={() => copyToClipboard(`${content} ${description}`)}
          // variant="none"
        >
          <CopyIcon height={22} width={22} />
        </Button>
      ) : null}
      {closable ? (
        <Button
          className={styles.button}
          isIconOnly={true}
          onPress={onClose}
        >
          <CrossIcon />
        </Button>
      ) : null}
    </Flex>
  </Card>
);
