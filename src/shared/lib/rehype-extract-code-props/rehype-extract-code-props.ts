import { visit } from 'unist-util-visit';

export function rehypeExtractCodeProps() {
	return (tree: any) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'code' && node.data && node.data.meta) {
				const metaString = node.data.meta;

				// Извлечение filename
				// const filenameMatch = metaString.match(/filename="([^"]+)"/);
				// if (filenameMatch) {
				// 	const filename = filenameMatch[1];
				// 	node.properties = {
				// 		...node.properties,
				// 		filename,
				// 	};
				// }

				// Извлечение всех пар ключ="значение"
				const props = {};
				const regex = /(\w+)="([^"]*)"/g;
				let match;
				while ((match = regex.exec(metaString)) !== null) {
					// @ts-ignore
					props[match[1]] = match[2];
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
