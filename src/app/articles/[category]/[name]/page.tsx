import dynamic from 'next/dynamic';

import { MDXRemote } from '@/shared/lib/mdx';

import { getProject } from '@/entities/articles';

import { Header, Headlines } from '@/widgets';

import type { MDXComponents } from 'mdx/types';
import type { Metadata } from 'next';

export type ProjectPageProps = {
  params: { name: string, category: string }
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { content, headlines, metadata, metadataCategory } = await getProject(
    params.category,
    params.name,
  );

  const components: MDXComponents = {
    AuthExample: dynamic(() =>
      import('@/entities/articles/articles/code/app-router-auth/examples/auth').then(
        (mod) => mod.AuthExample,
      ),
    ),
    Blockquote: dynamic(() =>
      import('@/shared/ui').then((mod) => mod.Blockquote),
    ),
    CodeSteps: dynamic(() => import('@/widgets').then((mod) => mod.CodeSteps)),
  };

  return (
    <div>
      <Header
        description={metadata?.description}
        note={metadata?.note || metadataCategory?.title}
        noteLink={metadata?.note || metadataCategory?.link}
        tags={metadata?.tags}
        title={metadata?.title}
      />
      <MDXRemote components={components} source={content} />
      <Headlines headlines={headlines} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { metadata } = await getProject(params.category, params.name);

  return {
    description: `${metadata.description}. Technologies: ${metadata.tags?.join(
      ', ',
    )}`,
    title: `Simple App | ${metadata.title}`,
  };
}
