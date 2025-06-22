'use client';

import { useState } from 'react';

import { openMessage } from '../common';

export const useCopy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    if (copied) {
      return;
    }

    try {
      navigator.clipboard.writeText(text);

      openMessage({
        content: 'Скопировано в буфер обмена',
        duration: 2.5,
        type: 'success',
      });
    } catch {
      openMessage({
        content: 'Не удалось скопировать',
        duration: 2.5,
        type: 'error',
      });
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return { copied, handleCopy };
};
