import { Code, CodeBlock, StackVariants, Text } from '@/shared/ui';
import type { MDXComponents } from 'mdx/types';

interface ExtendedCodeProps extends React.HTMLAttributes<HTMLElement> {
	filename?: string;
	// [key: string]: any; // Для поддержки любых других пользовательских атрибутов
}

export const MDXComponentsFormat: MDXComponents = {
	code: (props: ExtendedCodeProps) => {
		const { children, className, ...rest } = props;
		const match = /language-(\w+)/.exec(className || '');

		if (!match) {
			return <Code text={String(children)} {...rest} />;
		}

		return (
			<CodeBlock
				text={String(children)}
				language={match[1] as StackVariants}
				fileName={props?.filename}
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
