import { cn } from '@/shared/lib';
import { Button } from '@nextui-org/react';
import { StackData, StackVariants } from '../../const/stack-data';

interface StackButtonsProps {
	tags?: StackVariants[];
	isColored?: boolean;
	className?: string;
}

export const StackButtons = ({
	tags,
	isColored,
	className,
}: StackButtonsProps) => {
	if (!tags) {
		return null;
	}

	return (
		<div className={cn('flex gap-2 flex-wrap', className)}>
			{tags.map((tag) => (
				<Button
					key={StackData[tag]?.name}
					variant='flat'
					disableRipple
					size='sm'
					startContent={StackData[tag]?.icon}
					className={`${
						(isColored && StackData[tag]?.color) || 'bg-default-500/10'
					} ${
						(isColored && StackData[tag]?.colorText) || 'text-default-700'
					} cursor-default`}
				>
					{StackData[tag]?.name}
				</Button>
			))}
		</div>
	);
};
