import { Code, CodeBlock, StackVariants, Text } from '@/shared/ui';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		code: (props) => {
			const { children, className, ...rest } = props;
			const match = /language-(\w+)/.exec(className || '');

			if (!match) {
				return <Code text={String(children)} {...rest} />;
			}

			return (
				<CodeBlock
					text={String(children)}
					language={match[1] as StackVariants}
					{...rest}
				/>
			);
		},
		h2: Text.h2,
		p: Text.p,
		hr: Text.hr,
		ul: Text.ul,
		...components,
	};
}
