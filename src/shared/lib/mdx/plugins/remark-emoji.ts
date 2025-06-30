import { visit } from 'unist-util-visit';

import { emojiRegex } from '../../emoji';

export default function remarkEmoji() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    visit(tree, 'text', (node, index, parent) => {
      const { value } = node;

      emojiRegex.lastIndex = 0; // важно: сбросить state‑ful emojiRegex при каждом вызове

      if (!emojiRegex.test(value)) return;

      const newNodes = [];
      let last = 0;

      emojiRegex.lastIndex = 0;

      for (const match of value.matchAll(emojiRegex)) {
        const start = match.index;
        const end = start + match[0].length;

        // Текст до эмодзи
        if (start > last) {
          newNodes.push({
            type: 'text',
            value: value.slice(last, start),
          });
        }

        // Сам эмодзи -> <Emoji …/>
        newNodes.push({
          attributes: [{ name: 'emoji', type: 'mdxJsxAttribute', value: match[0] }],
          children: [],
          name: 'Emoji',
          type: 'mdxJsxTextElement',
        });

        last = end;
      }

      // Хвост текста после последнего эмодзи
      if (last < value.length) {
        newNodes.push({
          type: 'text',
          value: value.slice(last),
        });
      }

      // Заменяем исходный text‑узел новым набором
      parent.children.splice(index, 1, ...newNodes);
    });
  };
}
