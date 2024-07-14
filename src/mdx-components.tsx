import { Code, CodeBlock, StackVariants, Text } from '@/shared/ui';
import type { MDXComponents } from 'mdx/types';
import { getDictionary } from './shared/config';

interface ExtendedCodeProps extends React.HTMLAttributes<HTMLElement> {
	filename?: string;
	githubPath?: string;
	hideHeader?: boolean;
}

export const MDXComponentsFormat: MDXComponents = {
	code: async (props: ExtendedCodeProps) => {
		const { children, className, ...rest } = props;
		const match = /language-(\w+)/.exec(className || '');
		const dict = await getDictionary();

		if (!match) {
			return <Code dict={dict.ui} text={String(children)} {...rest} />;
		}

		return (
			<CodeBlock
				text={String(children)}
				language={match[1] as StackVariants}
				fileName={props?.filename}
				hideHeader={props?.hideHeader}
				dict={dict.ui}
				github={{
					path: props?.githubPath,
				}}
				{...rest}
			/>
		);
	},
	h2: Text.h2,
	p: Text.p,
	hr: Text.hr,
	ul: Text.ul,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return { MDXComponentsFormat, ...components };
}
