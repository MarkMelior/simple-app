// import { Link } from '@heroui/react'; // TODO
import Link from 'next/link';

import type { ProjectMetadata } from '@/shared/lib/mdx';
import { cn } from '@/shared/lib/react';

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
        className="px-6 py-4 bg-default-100 hover:bg-default-100/50 border border-default-200 hover:border-default-300 rounded-md flex flex-col gap-2 transition active:scale-[0.98]"
        href={project.link}
        key={project.title}
      >
        {project.title}
        <span className="text-default-600 text-sm">
          {project.description}
        </span>
      </Link>
    ))}
  </div>
);
