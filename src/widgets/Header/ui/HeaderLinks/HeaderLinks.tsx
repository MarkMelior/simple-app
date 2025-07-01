'use client';

import Link from 'next/link';
import { TbMessageCircleUp } from 'react-icons/tb';

import { DownIcon } from '@/shared/icons';
import { cn, typedEntries } from '@/shared/lib/common';
import { useTheme } from '@/shared/lib/theme';
import type { SemanticColors } from '@/shared/types';
import { Card, Flex } from '@/shared/ui';
import { Button } from '@/shared/ui/client';

import { headerLinks, headerSections } from '../../constants';
import { useHeader } from '../../store';

import styles from './headerLinks.module.scss';

import type { FC } from 'react';

interface HeaderLinksProps {
  color?: SemanticColors
}

export const HeaderLinks: FC<HeaderLinksProps> = ({ color = 'primary' }) => {
  const { isAlertClosed, isVisible, setActiveSection, setIsAlertClosed } = useHeader();

  const { Icon, toggleTheme } = useTheme();

  const handleClose = () => {
    setActiveSection(null);
  };

  return (
    <div className={styles.wrapper}>
      <Card className={styles.header}>
        {typedEntries(headerSections).map(([key, { disabled, label }]) => {
          const isOpened = isVisible(key);

          return (
            <Button
              className={cn(styles.link, { [styles.opened]: isOpened })}
              data-menu={key}
              endContent={<DownIcon className="opacity-50" isActive={isOpened} />}
              isDisabled={disabled}
              key={key}
              onMouseEnter={() => setActiveSection(key)}
              onMouseLeave={handleClose}
            >
              {label}
            </Button>
          );
        })}

        {headerLinks.map(({ href, label }) => (
          <Link
            className={styles.link}
            href={href}
            key={label}
            onMouseEnter={handleClose}
          >
            <span>{label}</span>
          </Link>
        ))}
      </Card>
      <Flex align="items-center" className={styles.action}>
        <Button
          className={styles.button}
          color={color}
          isIconOnly={true}
          onPress={toggleTheme}
          variant="light"
        >
          <Icon size={24} />
        </Button>
        {isAlertClosed ? (
          <Button
            className={styles.button}
            color={color}
            isIconOnly={true}
            onPress={() => setIsAlertClosed(!isAlertClosed)}
            variant="light"
          >
            <TbMessageCircleUp size={22} strokeWidth={1} />
          </Button>
        ) : null}
      </Flex>
    </div>
  );
};
