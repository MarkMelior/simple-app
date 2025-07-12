'use client';

import { useModals } from '@/shared/lib/common';
import { Emoji } from '@/shared/lib/emoji';
import { Text } from '@/shared/ui';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/shared/ui/client';

import type { FC, ReactNode } from 'react';

interface SupportMeProps {
  children: ReactNode
}

export const SupportMeModal: FC<SupportMeProps> = ({ children }) => {
  const { close, isOpen } = useModals('support');

  return (
    <Modal
      hideCloseButton={true}
      isOpen={isOpen}
      onClose={close}
      placement="center"
      scrollBehavior="inside"
      size="sm"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center gap-2">
              <Emoji emoji="💕" size={28} />
              <Text>
                Поддержи меня
              </Text>
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
                Буду благодарен любой поддержке! :D
              </Text>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
