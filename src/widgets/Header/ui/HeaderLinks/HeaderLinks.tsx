'use client';

import Link from 'next/link';
import { type FC } from 'react';
import { TbMessageCircleUp } from 'react-icons/tb';

import { AppRouteEnum } from '@/shared/constants';
import { DownIcon } from '@/shared/icons';
import { cn, typedEntries, useModals } from '@/shared/lib/common';
import { ScrollThresholdEnum, useScrolled } from '@/shared/lib/react';
import { useTheme } from '@/shared/lib/theme';
import type { SemanticColors } from '@/shared/types';
import { Card, Flex } from '@/shared/ui';
import { Button } from '@/shared/ui/client';

import { headerSections } from '../../constants';
import { useHeader } from '../../store';

import styles from './headerLinks.module.scss';

interface HeaderLinksProps {
  color?: SemanticColors
}

export const HeaderLinks: FC<HeaderLinksProps> = ({ color = 'primary' }) => {
  const isScrolled = useScrolled(ScrollThresholdEnum.MAIN_HEADER);
  const { isAlertClosed, isVisible, setActiveSection, setIsAlertClosed } = useHeader();
  const { toggle } = useModals('articlesCategories');

  const { Icon, toggleTheme } = useTheme();

  const handleClose = () => {
    setActiveSection(null);
  };

  return (
    <div className={styles.wrapper}>
      <Card className={styles.header}>
        {typedEntries(headerSections).map(([key, { label }]) => {
          const isOpened = isVisible(key);

          return (
            <Button
              className={cn(styles.link, { [styles.opened]: isOpened })}
              data-menu={key}
              endContent={<DownIcon className="opacity-50" isActive={isOpened} />}
              key={key}
              onMouseEnter={() => setActiveSection(key)}
              onMouseLeave={handleClose}
            >
              {label}
            </Button>
          );
        })}
        <Button
          className={styles.link}
          onMouseEnter={handleClose}
          onPress={() => toggle()}
          scroll={false}
        >
          Статьи
        </Button>
        <Button
          as={Link}
          className={styles.link}
          href={AppRouteEnum.HELP}
          onMouseEnter={handleClose}
          scroll={false}
        >
          Помощь
        </Button>
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
        {isAlertClosed && isScrolled ? (
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
