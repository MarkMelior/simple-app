import { visit } from 'unist-util-visit';

import type { Plugin } from 'unified';

// --------------------
// Use MDX JSX comments for props:
// Header Title{/* allowsSorting=true width=100 type=date */}
// --------------------

function parseProps(str: string): Record<string, string | number | boolean> {
  const result: Record<string, string | number | boolean> = {};
  const content = str.replace(/^\/\*+\s*/, '').replace(/\s*\*+\/$/, '');
  const parts = content.trim().split(/\s+/);

  for (const part of parts) {
    const [key, raw] = part.split('=');

    if (!key) continue;
    let value: string | number | boolean = true;

    if (raw !== undefined) {
      if (/^(true|false)$/.test(raw)) {
        value = raw === 'true';
      } else if (/^\d+$/.test(raw)) {
        value = parseInt(raw, 10);
      } else {
        value = raw;
      }
    }
    result[key] = value;
  }

  return result;
}

export const remarkTableProps: Plugin = () => (tree) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visit(tree, 'table', (tableNode: any) => {
    const headerRow = tableNode.children[0];

    if (!headerRow || headerRow.type !== 'tableRow') return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    headerRow.children.forEach((cellNode: any) => {
      if (!cellNode.children) return;

      for (let i = 0; i < cellNode.children.length; i++) {
        const child = cellNode.children[i];

        if (child.type === 'mdxTextExpression') {
          const comment = child.value as string;

          if (/^\/\*+\s*.*?=.+?\*+\//.test(comment)) {
            const props = parseProps(comment);

            cellNode.children.splice(i, 1);
            cellNode.data = cellNode.data || {};
            cellNode.data.hProperties = {
              ...(cellNode.data.hProperties || {}),
              ...props,
            };
            break;
          }
        }
      }
    });
  });
};
