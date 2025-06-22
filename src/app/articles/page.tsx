import dynamic from 'next/dynamic';
import path from 'path';

import { CategoryCard } from '@/widgets/(articles)/CategoryCard';
import { Header } from '@/widgets/(articles)/Header';
import { Headlines } from '@/widgets/(articles)/Headlines';

import { MDXRemote, getMdx } from '@/shared/lib/mdx';

import { ArticlesCategoryEnum, getProjectListByCategory } from '@/entities/articles';

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
        <div className="pointer-events-none relative z-30 select-none overflow-hidden rounded-lg">
          <img
            alt="Banner"
            className="min-h-32 min-w-full object-cover xl:h-full"
            src="/images/banner.jpg"
          />
        </div>
        {/* <Blackhole flip /> */}
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
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
          className="pointer-events-none z-20 max-w-36 select-none md:max-w-48"
          src="/images/heart.png"
        />
      </div>
      <CategoryCard className="mt-6" projects={projects.slice(0, 4)} />
      <MDXRemote components={components} source={content} />
      <Headlines headlines={headlines} />
    </div>
  );
}
