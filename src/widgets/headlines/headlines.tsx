'use client';

import { Portal, PortalEnum } from '@/shared/components';
import { MdxHeadline } from '@/shared/config/mdx';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';

export const Headlines = ({ headlines }: { headlines: MdxHeadline[] }) => {
	const [height, setHeight] = useState(200);
	const boxRef = useRef<HTMLDivElement | null>(null);

	const handleMouseDown = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			e.preventDefault();

			if (!boxRef.current) return;

			const startY = e.clientY;
			const startHeight = boxRef.current.offsetHeight;

			const doDrag = (dragEvent: MouseEvent) => {
				const newHeight = startHeight - (dragEvent.clientY - startY);

				if (newHeight < 100) {
					setHeight(100);
				} else if (newHeight > 400) {
					setHeight(400);
				} else {
					setHeight(newHeight);
				}
			};

			const stopDrag = () => {
				document.documentElement.removeEventListener('mousemove', doDrag);
				document.documentElement.removeEventListener('mouseup', stopDrag);
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
			<div className='pr-6'>
				<div
					className='cursor-ns-resize flex items-center group'
					onMouseDown={handleMouseDown}
				>
					<hr className='my-6 border-default-100 group-hover:border-default-200 w-full transition' />
				</div>

				<div
					style={{ height }}
					ref={boxRef}
					className='bg-default-50/80 border-default-900/5 hover:border-default-900/10 rounded-lg border px-4 py-3 transition-colors mb-8 flex flex-col'
				>
					<div className='block mb-8 lg:mb-3 font-semibold text-default-900 text-sm'>
						Навигация по странице
					</div>

					<ul className='text-sm overflow-y-auto flex-grow list-disc marker:text-default-200 list-inside'>
						{headlines.map(({ title, href, depth }) => (
							<li
								key={title}
								className='text-default-500 hover:text-default-600 transition-colors'
							>
								<Link href={href}>{title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Portal>
	);
};
