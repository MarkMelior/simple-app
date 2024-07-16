export const cleanText = (text: string) => {
	return text.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
};
