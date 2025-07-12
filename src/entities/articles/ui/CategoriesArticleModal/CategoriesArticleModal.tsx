'use client';

import Link from 'next/link';
import { FaWindowRestore } from 'react-icons/fa';
import { FaFilter, FaSort } from 'react-icons/fa6';
import { TbSettings } from 'react-icons/tb';

import { AppRouteEnum } from '@/shared/constants';
import { useModals } from '@/shared/lib/common';
import { Emoji } from '@/shared/lib/emoji';
import { Flex, Text } from '@/shared/ui';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/shared/ui/client';

import { articlesSortName, useArticles } from '@/entities/articles';

import type { FC, ReactNode } from 'react';

interface CategoriesArticleModalProps {
  children: ReactNode
}

export const CategoriesArticleModal: FC<CategoriesArticleModalProps> = ({ children }) => {
  const { sort: { field } } = useArticles();
  const { isOpen, toggle } = useModals('articlesCategories');

  return (
    <Modal
      hideCloseButton={true}
      isOpen={isOpen}
      onClose={toggle}
      placement="center"
      scrollBehavior="inside"
      size="5xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <Flex
                align="items-center"
                className="sm:flex-row"
                gap="gap-3"
                justify="justify-between"
                vertical={true}
              >
                <Flex align="items-center" gap="gap-2">
                  <Button
                    color="primary"
                    isDisabled={true}
                    isIconOnly={true}
                    startContent={<TbSettings size={26} strokeWidth={1} />}
                    variant="light"
                  />
                  <Button
                    isDisabled={true}
                    startContent={<FaFilter />}
                    variant="flat"
                  >
                    Фильтры
                  </Button>
                  <Button
                    isDisabled={true}
                    startContent={<FaSort size={14} />}
                    variant="flat"
                  >
                    <Text>Сортировка:</Text>
                    <Text color="text-default-500">
                      {articlesSortName[field]}
                    </Text>
                  </Button>
                </Flex>
                <Button
                  as={Link}
                  color="primary"
                  endContent={<FaWindowRestore size={14} />}
                  href={AppRouteEnum.ARTICLES}
                  onPress={onClose}
                  variant="light"
                >
                  Открыть как страницу
                </Button>
              </Flex>
            </ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter>
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
