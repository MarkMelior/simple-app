'use client';

import { useMouse } from '@/shared/hooks';
import { cn } from '@/shared/lib';
import { FC } from 'react';
import cls from './glowing-box.module.scss';
import { glowingStyle } from './model/glowing-settings';

interface GlowingBoxClassnames {
	border?: string;
	background?: string;
	common?: string;
}

interface GlowingBoxProps {
	children: React.ReactNode;
	classNames?: GlowingBoxClassnames;
	className?: string;
}

export const GlowingBox: FC<GlowingBoxProps> = ({ children, classNames }) => {
	const [mousePosition, ref] = useMouse();

	const style = {
		'--mouse-x': `${mousePosition.elementX}px`,
		'--mouse-y': `${mousePosition.elementY}px`,
		...glowingStyle,
	} as React.CSSProperties;

	return (
		<div
			className={cn(
				cls['glowing-iconbox'],
				'rounded-md p-[1px] bg-default-400',
				classNames?.common,
				classNames?.border,
			)}
			style={style}
			ref={ref}
		>
			<div
				className={cn(
					'rounded-md relative transition z-10',
					classNames?.common,
					classNames?.background,
				)}
			>
				{children}
			</div>
		</div>
	);
};
