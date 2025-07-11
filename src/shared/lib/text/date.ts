export interface FormatDateOptions {
  hasTime?: boolean
}

export const formatDate = (date: Date | string | undefined, options?: FormatDateOptions): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return (
    (date?.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      ...(options?.hasTime && {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }) ?? '').replace(/\u00A0?г\.(,?)/, '$1')
  );
};
