'use client';

import { Portal, PortalEnum } from '@/shared/components';
import { useDictionary } from '@/shared/config/i18n';
import { MdxHeadline } from '@/shared/config/mdx';
import { cn } from '@/shared/lib';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import cls from './headlines.module.scss';

export const Headlines = ({ headlines }: { headlines: MdxHeadline[] }) => {
	const boxRef = useRef<HTMLDivElement | null>(null);

	const [height, setHeight] = useState(70);
	const [limit, setLimit] = useState(false);
	const [activeLink, setActiveLink] = useState('');

	const dict = useDictionary();

	const N = 88; // Пиксели от верха окна

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('[data-headline-id]');
			let lastVisibleId: string | null = activeLink;

			sections.forEach((section) => {
				const rect = section.getBoundingClientRect();
				if (rect.top <= N && rect.bottom >= N) {
					lastVisibleId = section.getAttribute('data-headline-id');
				}
			});

			if (lastVisibleId) {
				setActiveLink(lastVisibleId);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [activeLink]);

	const handleMouseDown = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			e.preventDefault();

			if (!boxRef.current || !boxRef.current.parentElement) return;

			const parentHeight = boxRef.current.parentElement.offsetHeight;
			const startY = e.clientY;
			const startHeight = boxRef.current.offsetHeight;

			const doDrag = (dragEvent: MouseEvent) => {
				const newHeightPx = startHeight - (dragEvent.clientY - startY);
				const newHeightPercentage = (newHeightPx / parentHeight) * 100;

				if (newHeightPercentage < 20) {
					setHeight(20);
					setLimit(true);
				} else if (newHeightPercentage > 100) {
					setHeight(100);
					setLimit(true);
				} else {
					setHeight(newHeightPercentage);
					setLimit(false);
				}
			};

			const stopDrag = () => {
				document.documentElement.removeEventListener('mousemove', doDrag);
				document.documentElement.removeEventListener('mouseup', stopDrag);

				setLimit(false);
			};

			document.documentElement.addEventListener('mousemove', doDrag);
			document.documentElement.addEventListener('mouseup', stopDrag);

			return () => {
				document.documentElement.removeEventListener('mousemove', doDrag);
				document.documentElement.removeEventListener('mouseup', stopDrag);
			};
		},
		[],
	);

	return (
		<Portal id={PortalEnum.Headlines}>
			<div className='pr-6 flex flex-col h-full'>
				<div
					style={{ height: `${height}%` }}
					ref={boxRef}
					className={cls.content}
				>
					<div
						className='cursor-ns-resize flex items-center group'
						onMouseDown={handleMouseDown}
					>
						<hr
							className={cn(
								'my-6 border-default-100 group-hover:border-primary-500 w-full transition-colors',
								{ 'border-danger-500': limit },
							)}
						/>
					</div>

					<div className='block mb-4 font-semibold text-default-900 text-sm'>
						{dict?.ui['headlines-title']}
					</div>

					<ul className='text-sm overflow-y-auto flex-grow flex flex-col gap-1'>
						{headlines.map(({ title, href, nested }) => (
							<React.Fragment key={href}>
								<li
									className={cn('text-default-500', {
										'text-default-600': activeLink === href.slice(1),
									})}
								>
									<Link
										href={href}
										className='hover:text-default-700 transition-colors'
									>
										{title}
									</Link>
								</li>
								{nested && (
									<li>
										<ul className='list-disc marker:text-default-200 list-inside flex flex-col gap-1'>
											{nested.map(({ title, href }) => (
												<li
													key={href}
													className={cn('text-default-500', {
														'text-default-600': activeLink === href.slice(1),
													})}
												>
													<Link
														href={href}
														className='hover:text-default-700 transition-colors'
													>
														{title}
													</Link>
												</li>
											))}
										</ul>
									</li>
								)}
							</React.Fragment>
						))}
						{/* <hr className='mt-4 mb-2 border-default-100' />
						<li className='text-default-500 hover:text-default-600 transition-colors'>
							<Link
								target='_blank'
								href={gitHubRepoLink({ path: `/app/home-${lang}.mdx` })}
							>
								{dict?.ui['footer-edit']}
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</Portal>
	);
};
