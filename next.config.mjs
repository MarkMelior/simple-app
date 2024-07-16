import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	experimental: {
		mdxRs: true,
	},
};

const withMDX = createMDX({
	// options: {
	// remarkPlugins: [remarkGfm],
	// },
});

export default withMDX(nextConfig);
