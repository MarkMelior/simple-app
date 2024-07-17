import { cn } from '@/shared/lib';
import { FC } from 'react';
import cls from './light.module.scss';

interface LightProps {
	variant?: 'first' | 'second' | 'two';
}

export const Light: FC<LightProps> = ({ variant = 'two' }) => {
	return (
		<>
			{(variant === 'first' || variant === 'two') && (
				<div
					className={cn(
						'absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none max-h-screen',
						cls.fadeIn,
					)}
				>
					<div className='w-[108rem] flex-none flex justify-end'>
						<picture>
							<source srcSet='/images/light.avif' type='image/avif' />
							<img
								src='/images/light.avif'
								alt=''
								className='w-[71.75rem] flex-none max-w-none dark:hidden'
								decoding='async'
							/>
						</picture>

						<picture>
							<source srcSet='/images/light-dark.avif' type='image/avif' />
							<img
								src='/images/light-dark.avif'
								alt=''
								className='w-[90rem] flex-none max-w-none hidden dark:block'
								decoding='async'
							/>
						</picture>
					</div>
				</div>
			)}
			{(variant === 'second' || variant === 'two') && (
				<div className={cn(cls.light)}>
					<span className={cls.ellipse1} />
					<span className={cls.ellipse2} />
					<span className={cls.ellipse3} />
				</div>
			)}
		</>
	);
};
