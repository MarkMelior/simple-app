import { cn } from '@/shared/lib';
import { FC } from 'react';
import cls from './blackhole.module.scss';

interface BlackholeProps {
	className?: string;
	flip?: boolean;
	disabledOnMobile?: boolean;
}

export const Blackhole: FC<BlackholeProps> = ({ className, flip }) => {
	return (
		<div
			className={cn(
				cls.wrapper,
				{ [cls.flip]: flip },
				className,
				'select-none pointer-events-none',
			)}
		>
			<div className={cls.circles}>
				<div />
				<div />
				<div />
			</div>
			<video autoPlay loop muted playsInline className={cls.video}>
				<source src='/videos/blackhole.webm' />
			</video>
		</div>
	);
};
