'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FaWindowRestore } from 'react-icons/fa6';

import { Emoji } from '@/shared/lib/emoji';
import { Text } from '@/shared/ui';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/shared/ui/client';

import type { FC, ReactNode } from 'react';

interface ModalClientProps {
  children: ReactNode
}

export const ModalClient: FC<ModalClientProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Modal
      hideCloseButton={true}
      isOpen={true}
      onClose={() => router.back()}
      scrollBehavior="outside"
      size="5xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex gap-2">
              <Button
                as="a"
                color="primary"
                href={pathname}
                startContent={<FaWindowRestore />}
                variant="shadow"
              >
                Открыть статью как страницу
              </Button>
              <Button
                className="ml-auto"
                color="danger"
                onPress={onClose}
                variant="light"
              >
                Закрыть
              </Button>
            </ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter>
              <Text color="text-default-500" size="text-sm">
                Конец статьи&nbsp;
                <Emoji emoji="👀" />
              </Text>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
