import { Link } from '@/shared/config';
import { StackButtons, StackVariants } from '@/shared/ui';
import { cn, Skeleton } from '@nextui-org/react';

interface HeaderProps {
	className?: string;
	note: string;
	noteLink?: string;
	title: string;
	description: string;
	isLoading?: boolean;
	tags?: StackVariants[];
}

export const Header: React.FC<HeaderProps> = ({
	className,
	title,
	description,
	note,
	isLoading,
	tags,
	noteLink,
}) => {
	if (isLoading) {
		return <HeaderSkeleton />;
	}

	return (
		<header className={cn('relative z-20 mb-10', className)}>
			<div>
				<p className='mb-2 text-sm leading-6 font-semibold text-primary-400'>
					{noteLink ? <Link href={noteLink}>{note}</Link> : note}
				</p>
				<div className='flex items-center'>
					<h1 className='inline-block text-2xl sm:text-3xl font-extrabold text-default-900 tracking-tight '>
						{title}
					</h1>
				</div>
			</div>
			<p className='mt-2 text-lg text-default-600'>{description}</p>

			<StackButtons tags={tags} isColored={false} className='mt-6' />
		</header>
	);
};

export const HeaderSkeleton = () => {
	return (
		<header className='flex flex-col gap-5 z-20 mb-10'>
			<Skeleton className='h-5 w-14 rounded-full' />
			<Skeleton className='h-5 w-96 rounded-full' />
			<Skeleton className='h-5 w-64 rounded-full' />
		</header>
	);
};
