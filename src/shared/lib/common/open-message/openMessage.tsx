'use client';

import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import type { IAlert } from '@/shared/ui';
import { Alert } from '@/shared/ui';

import styles from './openMessage.module.scss';

import './openMessage.global.scss';

export interface IOpenMessage extends IAlert {
  duration?: number | 'infinite'
}

const MessageContainer = ({
  closable,
  content,
  description,
  duration = 5,
  isCopy,
  onClose,
  type,
}: IOpenMessage & { onClose: () => void }) => {
  useEffect(() => {
    if (duration === 'infinite') {
      return;
    }

    const timer = setTimeout(onClose, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <Alert
      className={styles.message}
      closable={closable}
      content={content}
      description={description}
      isCopy={isCopy}
      onClose={onClose}
      type={type}
    />
  );
};

export const openMessage = (message: IOpenMessage) => {
  const rootContainer = document.getElementById('message-root');

  if (!rootContainer) {
    console.error('Root container #message-root not found!');

    return;
  }

  // Проверяем, есть ли сообщение с таким же содержимым
  const existingMessage = Array.from(
    rootContainer.querySelectorAll('[data-message="open"]'),
  ).find((msg) => msg.textContent?.includes(message.content));

  if (existingMessage) {
    // Если сообщение уже существует, добавляем класс тряски
    existingMessage.classList.add(styles.shake);

    setTimeout(() => {
      existingMessage.classList.remove(styles.shake);
    }, 500); // Длительность совпадает с shake анимацией

    return;
  }

  const container = document.createElement('div');

  container.setAttribute('data-message', 'open');
  rootContainer.appendChild(container);

  const root = createRoot(container);

  const removeMessage = () => {
    container.setAttribute('data-message', 'closed');

    const timeoutId = setTimeout(() => {
      root.unmount();
      rootContainer.removeChild(container);
    }, 300); // Длительность совпадает с fade-in-from-top анимацией

    return () => clearTimeout(timeoutId);
  };

  root.render(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MessageContainer {...message} onClose={removeMessage} />,
  );
};
