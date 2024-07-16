import { MDXRemoteProps, MDXRemote as MDXRemoteRSC } from 'next-mdx-remote/rsc';
import { FC } from 'react';
import remarkGfm from 'remark-gfm';
import { MDXComponentsData } from './mdx-components';
import { rehypeExtractCodeProps } from './plugins/rehype-extract-code-props';

export const MDXRemote: FC<MDXRemoteProps> = ({
	source,
	components,
	options,
}) => {
	return (
		<MDXRemoteRSC
			source={source}
			components={{ ...MDXComponentsData, ...components }}
			options={{
				mdxOptions: {
					rehypePlugins: [rehypeExtractCodeProps],
					remarkPlugins: [remarkGfm],
				},
				...options,
			}}
		/>
	);
};
