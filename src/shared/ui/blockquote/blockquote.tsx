import { cn } from '@/shared/lib';
import { ComponentPropsWithoutRef, FC } from 'react';
import { CiStickyNote } from 'react-icons/ci';
import { FcIdea } from 'react-icons/fc';
import { IoMdInformationCircle } from 'react-icons/io';

type Variants = 'idea' | 'info' | 'note';

interface BlockquoteProps extends ComponentPropsWithoutRef<'blockquote'> {
	variant?: Variants;
}

interface Variants2 {
	icon: JSX.Element;
	color?: string;
}

const variants: Record<Variants, Variants2> = {
	idea: {
		icon: <FcIdea size={22} />,
	},
	info: {
		icon: <IoMdInformationCircle size={22} />,
		color: 'text-blue-500',
	},
	note: {
		icon: <CiStickyNote size={22} />,
		color: 'text-yellow-300',
	},
};

export const Blockquote: FC<BlockquoteProps> = ({
	children,
	variant = 'note',
	...props
}) => {
	return (
		<blockquote
			className={cn(
				'bg-default-100/30 backdrop-blur-sm rounded-md border border-default-200/50 mt-5 mb-12 text-sm flex items-center gap-4 px-5 overflow-hidden relative',
				props.className,
			)}
			{...props}
		>
			<span className={variants[variant]?.color}>{variants[variant].icon}</span>
			<span className='absolute left-0 h-full w-60 bg-gradient-to-r from-yellow-400/10 to-transparent pointer-events-none' />
			<span className='absolute left-0 h-full w-1 bg-yellow-300' />
			{children}
		</blockquote>
	);
};
