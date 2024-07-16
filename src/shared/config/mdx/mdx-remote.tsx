import { rehypeExtractCodeProps } from '@/shared/lib';
import { MDXRemoteProps, MDXRemote as MDXRemoteRSC } from 'next-mdx-remote/rsc';
import { FC } from 'react';
import remarkGfm from 'remark-gfm';
import { MDXComponentsData } from './mdx-components';

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
