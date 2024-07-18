import { slug } from 'github-slugger';
import { toString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';
import { MdxHeadline } from '../types/get-mdx.type';

export function rehypeAutoHeading(headlines?: MdxHeadline[]) {
	return (tree: any) => {
		visit(tree, 'element', (node) => {
			if (/h[1-6]/.test(node.tagName)) {
				const text = toString(node);

				const id = slug(text);

				if (!node.properties) node.properties = {};
				node.properties.id = id;

				headlines &&
					headlines.push({
						depth: parseInt(node.tagName.slice(1), 10),
						title: text.endsWith(':') ? text.slice(0, -1) : text,
						href: `#${id}`,
					});

				node.children = [
					{
						type: 'element',
						tagName: 'a',
						properties: { href: `#${id}`, isTitle: true },
						children: [...node.children],
					},
				];
			}
		});
	};
}
