import cls from './light.module.scss';

export const Light = () => {
	return (
		<>
			<div className='absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none'>
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
			<div className={cls.light}>
				<span className={cls.ellipse1} />
				{/* <span className={cls.ellipse2} /> */}
				<span className={cls.ellipse3} />
			</div>
		</>
	);
};
