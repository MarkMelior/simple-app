export * from './to-latin';
export * from './useCopy';

export const cleanText = (text: string) => text.replace(/[^a-zA-Zа-яА-Я\s]/g, '');

export const toKebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
