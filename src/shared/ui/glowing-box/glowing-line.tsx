'use client';

import { useMouse } from '@/shared/hooks';
import { cn } from '@/shared/lib';
import { FC, useEffect, useState } from 'react';
import cls from './glowing-line.module.scss';

interface GlowingBoxProps {
	className?: string;
}

export const GlowingLine: FC<GlowingBoxProps> = ({ className }) => {
	const [mousePosition, ref] = useMouse();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const style = {
		'--mouse-x': `${mousePosition.elementX}px`,
		'--mouse-y': `${mousePosition.elementY}px`,
		'--spotlight-line-size': '300px',
	} as React.CSSProperties;

	if (!mounted) return null;

	return (
		<div
			className={cn(cls['glowing-line'], className)}
			style={style}
			ref={ref}
		/>
	);
};
