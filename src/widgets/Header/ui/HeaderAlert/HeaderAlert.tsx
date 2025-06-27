'use client';

import { type FC, type ReactNode, useState } from 'react';

import { CrossIcon, FlaskIcon } from '@/shared/icons';
import { cn } from '@/shared/lib/common';
import type { SemanticColors } from '@/shared/types';
import { Flex, Link } from '@/shared/ui';
import { Button } from '@/shared/ui/client';

import { useHeader } from '../../store';

import styles from './headerAlert.module.scss';

interface HeaderAlertProps {
  children: ReactNode
  color?: SemanticColors
  link?: {
    href: string
    text: string
  }
  title?: string
}

export const HeaderAlert: FC<HeaderAlertProps> = ({
  children,
  color,
  link,
  title,
}) => {
  const { isAlertClosed, setIsAlertClosed } = useHeader();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    const timer = setTimeout(() => {
      setIsAlertClosed(true);
      setIsClosing(false);
    }, 600);

    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.wrapper}>
      {children}
      <Flex
        align="items-end"
        className={cn(
          styles.alert,
          { [styles[color!]]: color },
          { [styles.closing]: isClosing },
          { [styles.closed]: isAlertClosed },
        )}
      >
        <div className={styles.alertRow}>
          <div className={cn(styles.alertWrapper, 'gap-1')}>
            <FlaskIcon className={`text-${color}`} />
            <div className={styles.alertTitle}>
              {title}
            </div>
          </div>
          <div className={cn(styles.alertWrapper, 'gap-4')}>
            {link ? (
              <Link className={cn(styles.alertLink, styles.alertWrapper)} href={link.href}>
                {link.text}
              </Link>
            ) : null}
            <Button
              className="opacity-40"
              isIconOnly={true}
              onPress={handleClose}
              size="sm"
              startContent={(
                <CrossIcon
                  className="text-default-700"
                  height={12}
                  strokeWidth={2}
                  width={12}
                />
              )}
              variant="light"
            />
          </div>
        </div>
      </Flex>
    </div>
  );
};
