'use client';

import { useRouter } from 'next/navigation';
import { FaWindowRestore } from 'react-icons/fa';
import { FaFilter, FaSort } from 'react-icons/fa6';
import { TbSettings } from 'react-icons/tb';

import { AppRouteEnum } from '@/shared/constants';
import { Emoji } from '@/shared/lib/emoji';
import { Flex, Text } from '@/shared/ui';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/shared/ui/client';

import type { FC, ReactNode } from 'react';

interface ModalClientProps {
  children: ReactNode
}

export const ModalClient: FC<ModalClientProps> = ({ children }) => {
  const router = useRouter();

  return (
    <Modal
      hideCloseButton={true}
      isOpen={true}
      onClose={() => router.back()}
      size="5xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <Flex align="items-center" gap="gap-2">
                <Button
                  color="primary"
                  isIconOnly={true}
                  startContent={<TbSettings size={26} strokeWidth={1} />}
                  variant="light"
                />
                <Button
                  startContent={<FaFilter />}
                  variant="flat"
                >
                  Фильтры
                </Button>
                <Button
                  startContent={<FaSort size={14} />}
                  variant="flat"
                >
                  Сортировка
                </Button>
                <Button
                  as="a"
                  className="ml-auto"
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
