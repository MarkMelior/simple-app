import { visit } from 'unist-util-visit';

/**
 * A Remark plugin for MDX to parse blockquotes starting with [variant]
 * and convert them to mdxJsxFlowElement with variant prop.
*/

/* eslint-disable @typescript-eslint/no-explicit-any */

export const remarkBlockquoteVariant = () => (tree: any) => {
  visit(tree, 'blockquote', (node, index, parent) => {
    if (!node.children || node.children.length === 0) return;
    const first = node.children[0];

    if (
      first.type === 'paragraph'
      && first.children.length > 0
      && first.children[0].type === 'text'
    ) {
      const text = first.children[0].value;
      const match = text.match(/^\s*\[([^\]]+)\]\s*/);

      if (match) {
        const variant = match[1];

        first.children[0].value = text.replace(match[0], '');
        if (first.children.every((child: any) => child.type === 'text' && child.value.trim() === '')) {
          node.children.shift();
        }
        const mdxNode = {
          attributes: [
            {
              name: 'variant',
              type: 'mdxJsxAttribute',
              value: variant,
            },
          ],
          children: node.children,
          data: { _mdxExplicitJsx: true },
          name: 'BlockquoteMDX',
          type: 'mdxJsxFlowElement',
        };

        parent.children.splice(index, 1, mdxNode);
      }
    }
  });
};
