import { Logo } from '@/shared/assets/icon/Logo';
import { getDictionary } from '@/shared/config/i18n';
import cn from 'clsx';
import { FC } from 'react';
import cls from './page-loader.module.scss';

interface PageLoaderProps {
	className?: string;
	fullScreen?: boolean;
}

export const PageLoader: FC<PageLoaderProps> = async ({
	className,
	fullScreen,
}) => {
	const dict = await getDictionary();

	return (
		<section
			className={cn(
				cls.wrapper,
				{
					[cls.fullScreen]: fullScreen,
				},
				className,
			)}
		>
			<div className='transform scale-[1.75]'>
				<div className={cls.loader}>
					<span className={cls.spinner} />
					<Logo />
				</div>
				<p>{dict.ui['page-loader']}</p>
			</div>
		</section>
	);
};
