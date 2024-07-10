import { cn } from '@/shared/lib';
import { Button } from '@nextui-org/react';
import { StackButtonData, StackVariants } from './model/data';

interface StackButtonsProps {
	tags?: StackVariants[];
	isColored?: boolean;
	className?: string;
}

export const StackButtons = ({
	tags,
	isColored = true,
	className,
}: StackButtonsProps) => {
	if (!tags) {
		return null;
	}

	return (
		<div className={cn('flex gap-2 flex-wrap', className)}>
			{tags.map((tag) => (
				<Button
					key={tag}
					variant='flat'
					disableRipple
					size='sm'
					startContent={StackButtonData[tag]?.icon}
					className={`${
						(isColored && StackButtonData[tag]?.color) || 'bg-default-500/10'
					} ${
						(isColored && StackButtonData[tag]?.colorText) || 'text-default-700'
					} cursor-default`}
				>
					{tag}
				</Button>
			))}
		</div>
	);
};
