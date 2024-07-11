import { Code, CodeBlock, Text } from '@/shared/ui';
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
				<CodeBlock text={String(children)} language={match[1]} {...rest} />
			);
		},
		h2: (props) => {
			return (
				<Text variant='h2' {...props}>
					{props.children}
				</Text>
			);
		},
		p: (props) => {
			return <Text>{props.children}</Text>;
		},
		...components,
	};
}
