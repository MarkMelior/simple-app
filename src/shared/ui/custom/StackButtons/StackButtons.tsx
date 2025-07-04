import { StackData } from '@/shared/constants';
import type { StackVariants } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import { Button } from '@/shared/ui/client';

interface StackButtonsProps {
  className?: string
  isColored?: boolean
  size?: 'xs' | 'sm'
  tags?: StackVariants[]
}

export const StackButtons = ({
  className,
  isColored,
  size = 'sm',
  tags,
}: StackButtonsProps) => {
  if (!tags) {
    return null;
  }

  return (
    <div className={cn('flex gap-1 flex-wrap', className)}>
      {tags.map((tag) => (
        <Button
          className={`${
            (isColored && StackData[tag]?.color) || 'bg-default-500/10'
          } ${
            (isColored && StackData[tag]?.colorText) || 'text-default-700'
          } cursor-default`}
          disableRipple={true}
          key={StackData[tag]?.name}
          size={size}
          startContent={StackData[tag]?.icon}
          variant="flat"
        >
          {StackData[tag]?.name}
        </Button>
      ))}
    </div>
  );
};
