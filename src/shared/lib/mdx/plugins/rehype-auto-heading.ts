import { toString } from 'hast-util-to-string';
import { visit } from 'unist-util-visit';

import { cleanText } from '../../text';

import type { MdxHeadline } from '../types';

export function rehypeAutoHeading(headlines?: MdxHeadline[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    const stack: { depth: number, headline: MdxHeadline }[] = [];

    visit(tree, 'element', (node) => {
      if (/h[1-6]/.test(node.tagName)) {
        const text = toString(node);
        const id = cleanText(text).toLowerCase().replace(/\s+/g, '-');
        const depth = parseInt(node.tagName.slice(1), 10);
        const headline = {
          href: `#${id}`,
          title: text.endsWith(':') ? text.slice(0, -1) : text,
        };

        if (!node.properties) {
          node.properties = {};
        }
        node.properties.id = id;

        // Ensure that the headline is pushed to the correct nesting level
        while (stack.length && stack[stack.length - 1].depth >= depth) {
          stack.pop();
        }

        if (headlines) {
          if (depth === 1 || stack.length === 0) {
            headlines.push(headline);
            stack.push({ depth, headline });
          } else {
            const parent = stack[stack.length - 1].headline;

            if (!parent.nested) {
              parent.nested = [];
            }
            parent.nested.push(headline);
            if (depth === 2) {
              stack.push({ depth, headline });
            }
          }
        }

        node.children = [
          {
            children: [...node.children],
            properties: { href: `#${id}`, isTitle: true },
            tagName: 'a',
            type: 'element',
          },
        ];
      }
    });
  };
}
