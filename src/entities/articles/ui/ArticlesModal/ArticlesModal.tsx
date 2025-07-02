'use client';

import Link from 'next/link';
import { FaSort } from 'react-icons/fa6';

import { CategoryCard } from '@/widgets/(articles)/CategoryCard';

import { AppRouteEnum } from '@/shared/constants';
import { SettingsIcon } from '@/shared/icons';
import { useModals } from '@/shared/lib/common';
import { Emoji } from '@/shared/lib/emoji';
import { Flex, Text } from '@/shared/ui';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/shared/ui/client';

import type { ArticlesListResponse } from '../../types';
import type { FC } from 'react';

interface ArticlesModalProps {
  articlesList: ArticlesListResponse[]
}

export const ArticlesModal: FC<ArticlesModalProps> = ({ articlesList }) => {
  const { isOpen, options, toggle } = useModals('articles');

  return (
    <Modal
      backdrop={options?.backdrop}
      hideCloseButton={true}
      isOpen={isOpen}
      onOpenChange={() => toggle()}
      size="5xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <Flex align="items-center" gap="gap-2">
                <Button
                  startContent={<SettingsIcon />}
                  variant="flat"
                >
                  Фильтры
                </Button>
                <Button
                  startContent={<FaSort />}
                  variant="flat"
                >
                  Сортировка
                </Button>
                <Button
                  as={Link}
                  className="ml-auto"
                  color="primary"
                  href={AppRouteEnum.ARTICLES}
                  onPress={onClose}
                  variant="light"
                >
                  Перейти на страницу
                </Button>
              </Flex>
            </ModalHeader>
            <ModalBody>
              {articlesList.map(({ articles, title }) => (
                <Flex gap="gap-6" key={title} vertical={true}>
                  <Text size="text-lg" weight="font-bold">{title}</Text>
                  <CategoryCard articles={articles} variant="small" />
                </Flex>
              ))}
            </ModalBody>
            <ModalFooter className="flex justify-center py-6">
              <Text color="text-default-500" size="text-sm">
                Конец списка&nbsp;
                <Emoji emoji="👀" />
              </Text>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
