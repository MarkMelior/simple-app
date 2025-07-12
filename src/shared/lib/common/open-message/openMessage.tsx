'use client';

import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoWarning } from 'react-icons/io5';
import { MdError } from 'react-icons/md';

import { CrossIcon } from '@/shared/icons';
import { Button, Progress } from '@/shared/ui/client';

import { Emoji } from '../../emoji';

import styles from './openMessage.module.scss';

import type { CSSProperties, ReactNode } from 'react';

import './openMessage.global.scss';

type MessageType =
  | 'info'
  | 'success'
  | 'error'
  | 'warning';

const getIcon = (type: MessageType) => {
  switch (type) {
    case 'info':
      return <FaCircleInfo className="text-info" size={16} />;
    case 'success':
      return <Emoji emoji="✅" size={20} />;
    case 'error':
      return <MdError className="text-error" size={20} />;
    case 'warning':
      return <IoWarning className="text-warning" size={20} />;
    default:
      return null;
  }
};

export interface IOpenMessage {
  className?: string
  closable?: boolean
  content: ReactNode
  duration?: number | 'infinite'
  onClose?: () => void
  type?: MessageType
}

const MessageContainer = ({
  closable,
  content,
  duration = 5,
  onClose,
  type = 'success',
}: IOpenMessage & { onClose: () => void }) => {
  useEffect(() => {
    if (duration === 'infinite') return;
    const timer = setTimeout(onClose, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const style = duration === 'infinite' ? {} : {
    '--animation-duration-notification': `${duration * 1000}ms`,
  } as CSSProperties;

  return (
    <article
      className={styles.message}
      onClick={onClose}
      style={style}
    >
      <Progress
        className={styles.progress}
        color="success"
        size="sm"
      />
      <div className={styles.content}>
        <div className={styles.icon}>
          {getIcon(type)}
        </div>
        {content}
      </div>
      {closable ? (
        <Button
          className={styles.button}
          isIconOnly={true}
          onPress={onClose}
        >
          <CrossIcon />
        </Button>
      ) : null}
    </article>
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
  ).find((msg) => msg.textContent?.includes(String(message.content)));

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
    <MessageContainer {...message} onClose={removeMessage} />,
  );
};
