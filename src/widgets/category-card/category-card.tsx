import { Link } from '@/shared/config/i18n';
import { ProjectMetadata } from '@/shared/config/mdx';
import { cn } from '@/shared/lib';
import { FC } from 'react';

interface CategoryCardProps {
	projects: ProjectMetadata[];
	className?: string;
}

export const CategoryCard: FC<CategoryCardProps> = ({
	projects,
	className,
}) => {
	return (
		<div className={cn('grid sm:grid-cols-2 gap-4', className)}>
			{projects.map((project) => (
				<Link
					href={project.link}
					key={project.title}
					className='px-6 py-4 bg-default-100 hover:bg-default-100/50 border border-default-200 hover:border-default-300 rounded-md flex flex-col gap-2 transition active:scale-[0.98]'
				>
					{project.title}
					<span className='text-default-600 text-sm'>
						{project.description}
					</span>
				</Link>
			))}
		</div>
	);
};
