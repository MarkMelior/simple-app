import cls from './card-rotate.module.scss';

interface CardRotateProps {
	name: string;
	color: string;
	icon: JSX.Element;
	text: string;
}

export const CardRotate = ({ name, color, icon, text }: CardRotateProps) => {
	return (
		<div className={cls.container}>
			<div className={cls.card}>
				<div
					className={cls.front}
					style={{
						boxShadow: `0px -4px 0px -1px ${color}, 0px 0px 0px 1px rgba(255, 255, 255, 0.08)`,
					}}
				>
					<div className={cls.inner}>
						<div>
							<h1>{name}</h1>
							{/* <Image
								src='/images/icons/refresh.svg'
								alt='Иконка перезагрузки'
								className={`${cls.refresh} noselect`}
								width={20}
								height={20}
							/> */}
						</div>
						{icon}
					</div>
				</div>
				<div
					className={cls.back}
					style={{
						boxShadow: `0px -4px 0px -1px ${color}, 0px 0px 0px 1px rgba(255, 255, 255, 0.08)`,
					}}
				>
					<div className={cls.inner}>
						<h1 style={{ color }}>{name}</h1>
						<p>{text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
