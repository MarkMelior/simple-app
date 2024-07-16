import type { MDXComponents } from 'mdx/types';
import { MDXComponentsData } from './shared/config/mdx/mdx-components';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return { MDXComponentsData, ...components };
}
