import dynamic from 'next/dynamic';

import { Header } from '@/widgets/(articles)/Header';
import { Headlines } from '@/widgets/(articles)/Headlines';

import { MDXRemote } from '@/shared/lib/mdx';
import { getMetadataTitle } from '@/shared/lib/text';

import { getArticle, getArticleList } from '@/entities/articles';

import type { MDXComponents } from 'mdx/types';
import type { Metadata } from 'next';

type ArticlePageProps = {
  params: Promise<{ name: string, category: string }>
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, name } = await params;
  const { content, headlines, metadata, metadataCategory } = await getArticle(category, name);

  const components: MDXComponents = {
    AuthExample: dynamic(() => import('@/entities/articles/articles/frontend/app-router-auth/examples').then((mod) => mod.AuthExample)),
    Blockquote: dynamic(() => import('@/shared/ui/typography/Blockquote').then((mod) => mod.Blockquote)),
    CodeSteps: dynamic(() => import('@/shared/ui/typography/CodeSteps').then((mod) => mod.CodeSteps)),
  };

  return (
    <div>
      <Header
        createdAt={metadata?.createdAt}
        description={metadata?.description}
        icon={metadata?.icon}
        note={metadata?.note || metadataCategory?.title}
        noteLink={metadata?.note || metadataCategory?.link}
        tags={metadata?.tags}
        title={metadata?.title}
        updatedAt={metadata?.updatedAt}
      />
      <MDXRemote components={components} source={content} />
      <Headlines headlines={headlines} />
    </div>
  );
}

export async function generateStaticParams() {
  const categories = await getArticleList();

  return categories.map(({ articles, slug: categorySlug }) => articles.map(({ slug }) => ({
    category: categorySlug,
    name: slug,
  })));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { category, name } = await params;
  const { metadata } = await getArticle(category, name);

  return {
    description: `${metadata.description}. Технологии: ${metadata.tags?.join(
      ', ',
    )}`,
    title: getMetadataTitle(metadata.title),
  };
}
