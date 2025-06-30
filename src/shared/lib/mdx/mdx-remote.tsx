import { MDXRemote as MDXRemoteRSC } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { MDXComponentsData } from './components';
import { rehypeAutoHeading } from './plugins/rehype-auto-heading';
import { rehypeExtractCodeProps } from './plugins/rehype-extract-code-props';
import remarkEmoji from './plugins/remark-emoji';

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
        remarkPlugins: [remarkGfm, remarkEmoji],
      },
      ...options,
    }}
    source={source}
  />
);
