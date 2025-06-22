import { openMessage } from '../common';

export const copyToClipboard = async (
  textToCopy: string,
  content = 'Успешно скопировано!',
) => {
  if (navigator.clipboard && globalThis.isSecureContext) {
    await navigator.clipboard.writeText(textToCopy);

    openMessage({ content });
  } else {
    const textArea = document.createElement('textarea');

    textArea.value = textToCopy;
    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';

    document.body.prepend(textArea);
    textArea.select();

    try {
      document.execCommand('copy');

      openMessage({ content });
    } catch {
      openMessage({ content: 'Не удалось скопировать', type: 'error' });
    } finally {
      textArea.remove();
    }
  }
};
