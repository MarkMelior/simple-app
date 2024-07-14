import { visit } from 'unist-util-visit';

export function rehypeExtractCodeProps() {
	return (tree: any) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'code' && node.data && node.data.meta) {
				const metaString = node.data.meta.trim();

				// Извлечение всех пар ключ="значение"
				const props: { [key: string]: string | boolean } = {};
				const regex = /(\w+)="([^"]*)"|(\w+)/g;
				let match;
				while ((match = regex.exec(metaString)) !== null) {
					if (match[2] !== undefined) {
						// Для ключ="значение"
						props[match[1]] = match[2];
					} else {
						// Для просто ключа (без значения)
						props[match[3]] = true; // Присваиваем значение true
					}
				}

				// Добавление извлеченных атрибутов в свойства узла
				node.properties = {
					...node.properties,
					...props,
				};
			}
		});
	};
}
