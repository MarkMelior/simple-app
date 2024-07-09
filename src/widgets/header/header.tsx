import { Skeleton } from '@nextui-org/skeleton';
import { cn } from '@nextui-org/theme';

interface HeaderProps {
	className?: string;
	note: string;
	title: string;
	description: string;
	isLoading?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
	className,
	title,
	description,
	note,
	isLoading,
}) => {
	if (isLoading) {
		return <HeaderSkeleton />;
	}

	return (
		<header className={cn('relative z-20 mb-10', className)}>
			<div>
				<p className='mb-2 text-sm leading-6 font-semibold text-primary-500 dark:text-primary-400'>
					{note}
				</p>
				<div className='flex items-center'>
					<h1 className='inline-block text-2xl sm:text-3xl font-extrabold text-main-900 tracking-tight dark:text-main-200'>
						{title}
					</h1>
				</div>
			</div>
			<p className='mt-2 text-lg text-main-700 dark:text-main-400'>
				{description}
			</p>
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
