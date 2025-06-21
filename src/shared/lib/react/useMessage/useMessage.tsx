'use client';

import {
  createContext,
  useContext,
  useState,
} from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {
  FaCircleInfo,
  FaHeartCircleMinus,
  FaHeartCirclePlus,
} from 'react-icons/fa6';
import { IoIosAddCircle } from 'react-icons/io';
import { IoCloseOutline, IoWarning } from 'react-icons/io5';
import { MdError } from 'react-icons/md';

import { Progress } from '@/shared/ui/client';

import { cn } from '../classNames';

import styles from './useMessage.module.scss';

import type { CSSProperties,
  FC,
  JSX,
  ReactNode } from 'react';

type MessageType =
  | 'info'
  | 'success'
  | 'error'
  | 'warning'
  | 'close'
  | 'add'
  | 'heart-add'
  | 'heart-remove';

interface MessageOptions {
  animationCloseDuration?: number
  closing?: boolean
  content: string
  duration?: number
  id: number
  onCancel?: () => void
  onClose?: () => void
  startContent?: JSX.Element
  type?: MessageType
}

interface MessageContextProps {
  showMessage: (props: Omit<MessageOptions, 'id'>) => void
}

const MessageContext = createContext<MessageContextProps | undefined>(
  undefined,
);

export const useMessage = (): MessageContextProps => {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }

  return context;
};

export interface MessageProviderProps {
  children: ReactNode
}

export const MessageProvider: FC<MessageProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessageOptions[]>([]);

  const showMessage = (props: Omit<MessageOptions, 'id'>) => {
    const { animationCloseDuration = 300, duration = 2500 } = props;
    const newMessage: MessageOptions = {
      id: Date.now(),
      ...props,
      animationCloseDuration,
      duration,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Удаление сообщения через N секунд
    const timeoutId = setTimeout(() => {
      removeMessage(newMessage.id, animationCloseDuration);
    }, duration);

    return () => clearTimeout(timeoutId);
  };

  const removeMessage = (id: number, animationCloseDuration: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === id) {
          return {
            ...message,
            closing: true,
          };
        }

        return message;
      }),
    );

    const timeoutId = setTimeout(() => {
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id),
      );
    }, animationCloseDuration);

    return () => clearTimeout(timeoutId);
  };

  const getTypeIcon = (type: MessageType) => {
    switch (type) {
      case 'info':
        return <FaCircleInfo className="text-blue" size={16} />;
      case 'success':
        return <FaCheckCircle className="text-success" size={16} />;
      case 'add':
        return <IoIosAddCircle className="text-success" size={16} />;
      case 'error':
        return <MdError className="text-danger" size={20} />;
      case 'close':
        return <IoCloseOutline className="text-danger" size={20} />;
      case 'heart-add':
        return <FaHeartCirclePlus className="text-success" size={20} />;
      case 'heart-remove':
        return <FaHeartCircleMinus className="text-danger" size={20} />;
      case 'warning':
        return <IoWarning className="text-warning" size={20} />;
      default:
        return null;
    }
  };

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      <div className={styles.wrapper}>
        {messages.map(
          ({
            animationCloseDuration = 300,
            closing,
            content,
            duration,
            id,
            onCancel,
            startContent,
            type = 'info',
          }) => (
            <article
              className={cn(styles.message, {
                [styles.closing]: closing,
              })}
              key={id}
              onClick={() => removeMessage(id, animationCloseDuration)}
              style={
                {
                  '--animation-close-duration-notification': `${animationCloseDuration}ms`,
                  '--animation-duration-notification': `${duration}ms`,
                } as CSSProperties
              }
            >
              <Progress
                className={styles.progress}
                color="success"
                size="sm"
              />
              <div className={styles.content}>
                <div className={styles.startContent}>
                  {startContent ? startContent : getTypeIcon(type)}
                </div>
                <p>{content}</p>
              </div>
              {onCancel && (
                <button
                  className={styles.cancel}
                  onClick={(e) => {
                    e.stopPropagation();
                    onCancel();
                    removeMessage(id, animationCloseDuration);
                  }}
                >
                  Отменить
                </button>
              )}
            </article>
          ),
        )}
      </div>
    </MessageContext.Provider>
  );
};
