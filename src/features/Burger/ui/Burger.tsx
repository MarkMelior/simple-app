'use client';

import { DrawerBody, DrawerContent, DrawerHeader, Drawer as HeroDrawer } from '@heroui/react';
import Link from 'next/link';
import { LuFolderTree } from 'react-icons/lu';
import { TbMessageCircleUp } from 'react-icons/tb';

import { AppRouteEnum } from '@/shared/constants';
import { CrossIcon } from '@/shared/icons';
import { useModals } from '@/shared/lib/common';
import { Emoji } from '@/shared/lib/emoji';
import { useTheme } from '@/shared/lib/theme';
import { AboutLinks, AboutServices, Flex } from '@/shared/ui';
import { Button, DynamicQuote } from '@/shared/ui/client';

import { useBurger } from '../store';

import styles from './burger.module.scss';

import type { FC } from 'react';

interface BurgerProps {
  isAlertClosed?: boolean
  page?: 'main' | 'articles'
  setIsAlertClosed?: (value: boolean) => void
}

export const Burger: FC<BurgerProps> = ({
  isAlertClosed,
  page = 'main',
  setIsAlertClosed,
}) => {
  const { Icon, themeName, toggleTheme } = useTheme();
  const { isOpen, setIsOpen } = useBurger();
  const { toggle: toggleArticlesCategories } = useModals('articlesCategories');
  const { toggle: toggleSupport } = useModals('support');

  const isMainPage = page === 'main';

  return (
    <HeroDrawer
      hideCloseButton={true}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="bottom"
      size="2xl"
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="absolute inset-x-0 top-0 z-50 flex flex-row items-center justify-between gap-2 border-b border-default-200/50 bg-content1/50 p-2 pl-3 backdrop-blur-lg backdrop-saturate-150">
              <Button
                className="text-default-400"
                isIconOnly={true}
                onPress={onClose}
                size="sm"
                variant="light"
              >
                <CrossIcon />
              </Button>
              <Flex align="items-center" className={styles.action} gap="gap-1">
                {isAlertClosed ? (
                  <Button
                    className={styles.button}
                    color="primary"
                    onPress={() => setIsAlertClosed?.(!isAlertClosed)}
                    size="sm"
                    startContent={<TbMessageCircleUp size={20} strokeWidth={1} />}
                    variant="light"
                  >
                    Уведомление
                  </Button>
                ) : null}
                {isMainPage ? null : (
                  <Button
                    className={styles.button}
                    color="primary"
                    onPress={() => {
                      onClose();
                      toggleArticlesCategories();
                    }}
                    radius="md"
                    startContent={<LuFolderTree size={16} />}
                    variant="light"
                  >
                    Все статьи
                  </Button>
                )}
                <Button
                  className={styles.button}
                  color="primary"
                  onPress={toggleTheme}
                  radius="md"
                  startContent={<Icon size={22} />}
                  variant="shadow"
                >
                  {themeName}
                </Button>
              </Flex>
            </DrawerHeader>
            <DrawerBody className="pt-14">
              <div className="flex flex-col gap-6 pb-8 pt-4 sm:mx-auto">
                <Flex full={true} gap="gap-2">
                  {isMainPage ? (
                    <Button
                      className="w-full"
                      onPress={() => {
                        onClose();
                        toggleArticlesCategories();
                      }}
                      radius="sm"
                      variant="flat"
                    >
                      Мои статьи
                    </Button>
                  ) : (
                    <Button
                      as={Link}
                      className="w-full"
                      href={AppRouteEnum.MAIN}
                      onPress={onClose}
                      radius="sm"
                      variant="flat"
                    >
                      Главная
                    </Button>
                  )}
                  <Button
                    className="w-full"
                    onPress={() => {
                      onClose();
                      toggleSupport();
                    }}
                    variant="flat"
                  >
                    <Emoji emoji="💕" size={20} />
                    Поддержать
                  </Button>
                </Flex>
                <Flex
                  className="sm:flex-row"
                  full={true}
                  gap="gap-2"
                  justify="justify-between"
                  vertical={true}
                >
                  <AboutLinks onClick={onClose} />
                </Flex>
                <div className={styles.services}>
                  <AboutServices />
                </div>
                <DynamicQuote />
              </div>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </HeroDrawer>
  );
};
