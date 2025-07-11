import { MDXRemote as MDXRemoteRSC } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { MDXComponentsData } from './components';
import { rehypeAutoHeading } from './plugins/rehype-auto-heading';
import { rehypeExtractCodeProps } from './plugins/rehype-extract-code-props';
import { remarkBlockquoteVariant } from './plugins/remark-blockqueue-variant';
import remarkEmoji from './plugins/remark-emoji';
import { remarkTableProps } from './plugins/remark-table-props';

import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import type { FC } from 'react';

export const MDXRemote: FC<MDXRemoteProps> = ({
  components,
  options,
  source,
}) => (
  <MDXRemoteRSC
    components={{ ...MDXComponentsData, ...components }}
    options={{
      mdxOptions: {
        rehypePlugins: [rehypeExtractCodeProps, rehypeAutoHeading],
        remarkPlugins: [remarkGfm, remarkEmoji, remarkTableProps, remarkBlockquoteVariant],
      },
      ...options,
    }}
    source={source}
  />
);
