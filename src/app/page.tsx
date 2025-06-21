import dynamic from 'next/dynamic';
import path from 'path';

import { MDXRemote, getMdx } from '@/shared/lib/mdx';

import { ArticlesCategoryEnum, getProjectListByCategory } from '@/entities/articles';

import { CategoryCard, Header, Headlines } from '@/widgets';

import type { MDXComponents } from 'mdx/types';

export default async function Home() {
  const dir = path.join(process.cwd(), 'src', 'app', 'articles', 'index.mdx');
  const { content, headlines, metadata } = await getMdx(dir);

  const components: MDXComponents = {
    StackButtons: dynamic(() =>
      import('@/shared/ui').then((mod) => mod.StackButtons),
    ),
  };

  const { projects } = await getProjectListByCategory(ArticlesCategoryEnum.CODE);

  return (
    <div>
      <div className="mb-8">
        <div className="z-30 rounded-lg relative overflow-hidden select-none pointer-events-none">
          <img
            alt="Banner"
            className="object-cover min-w-full min-h-32 xl:h-full"
            src="/images/banner.jpg"
          />
        </div>
        {/* <Blackhole flip /> */}
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
        <Header
          className="mb-0"
          classNames={{
            description: 'mt-4 text-[1.075rem]',
          }}
          description={metadata.description}
          isCenter="md"
          note={metadata.note}
          title={metadata.title}
        />
        <img
          alt="3д модель сердца"
          className="max-w-36 md:max-w-48 z-20 select-none pointer-events-none"
          src="/images/heart.png"
        />
      </div>
      <CategoryCard className="mt-6" projects={projects.slice(0, 4)} />
      <MDXRemote components={components} source={content} />
      <Headlines headlines={headlines} />
    </div>
  );
}
