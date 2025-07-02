'use client'; // TODO
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'; // TODO

import type { BaseModalProps } from '@/shared/lib/common';
import { Button, Modal } from '@/shared/ui/client';

import type { FC } from 'react';

export const ArticlesModal: FC<BaseModalProps> = ({ isOpen, options, toggle }) => (
  <Modal backdrop={options?.backdrop} isOpen={isOpen} onOpenChange={() => toggle()}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
              risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
              quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
              risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
              quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
              adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
              nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
              deserunt nostrud ad veniam.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onPress={onClose} variant="light">
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Action
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
);
