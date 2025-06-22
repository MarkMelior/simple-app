'use client';

import { useState } from 'react';

import { useMessage } from '../common';

export const useCopy = () => {
  const { showMessage } = useMessage();
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    if (copied) {
      return;
    }

    try {
      navigator.clipboard.writeText(text);

      showMessage({
        content: 'Скопировано в буфер обмена',
        type: 'success',
      });
    } catch {
      showMessage({
        content: 'Не удалось скопировать',
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
