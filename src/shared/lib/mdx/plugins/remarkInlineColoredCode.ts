import { visit } from 'unist-util-visit';

import type { MdxJsxTextElement } from 'mdast-util-mdx-jsx';
import type { Plugin } from 'unified';
import type { Parent } from 'unist';

/**
 * Remark-плагин для MDX, который позволяет задавать цвет для инлайнового кода с помощью синтаксиса:
 *
 *    `{color}текст`
 *
 * Например:
 *    `{red}3 июня 2024` → <code color="red">3 июня 2024</code>
 */

export const remarkInlineColoredCode: Plugin = () => (tree) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visit(tree, 'inlineCode', (node: any, index, parent: Parent | undefined) => {
    if (!parent || typeof index !== 'number') return;

    const match = node.value.match(/^\{([a-zA-Z]+)\}(.*)/);

    if (match) {
      const [, color, value] = match;

      const jsxNode: MdxJsxTextElement = {
        attributes: [
          {
            name: 'color',
            type: 'mdxJsxAttribute',
            value: color,
          },
        ],
        children: [
          {
            type: 'text',
            value: value.trim(),
          },
        ],
        name: 'code',
        type: 'mdxJsxTextElement',
      };

      parent.children.splice(index, 1, jsxNode);
    }
  });
};
