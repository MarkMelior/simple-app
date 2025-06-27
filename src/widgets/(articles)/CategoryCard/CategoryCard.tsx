import Link from 'next/link';

import { cn } from '@/shared/lib/common';
import type { ProjectMetadata } from '@/shared/lib/mdx';

import type { FC } from 'react';

interface CategoryCardProps {
  className?: string
  projects: ProjectMetadata[]
}

export const CategoryCard: FC<CategoryCardProps> = ({
  className,
  projects,
}) => (
  <div className={cn('grid sm:grid-cols-2 gap-4', className)}>
    {projects.map((project) => (
      <Link
        className="flex flex-col gap-2 rounded-md border border-default-200 bg-default-100 px-6 py-4 transition hover:border-default-300 hover:bg-default-100/50 active:scale-[0.98]"
        href={project.link}
        key={project.title}
      >
        {project.title}
        <span className="text-sm text-default-600">
          {project.description}
        </span>
      </Link>
    ))}
  </div>
);
