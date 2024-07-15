'use client';

import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface MouseState {
	x: number;
	y: number;
	elementX: number;
	elementY: number;
	elementPositionX: number;
	elementPositionY: number;
}

export const useMouse = (): [
	MouseState,
	MutableRefObject<HTMLDivElement | null>,
] => {
	const [state, setState] = useState<MouseState>({
		x: 0,
		y: 0,
		elementX: 0,
		elementY: 0,
		elementPositionX: 0,
		elementPositionY: 0,
	});

	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function handleMouseMove(event: MouseEvent) {
			const { clientX, clientY } = event;
			const element = ref.current;

			if (element) {
				const rect = element.getBoundingClientRect();
				const elementX = clientX - rect.left;
				const elementY = clientY - rect.top;
				const elementPositionX = rect.left + window.scrollX;
				const elementPositionY = rect.top + window.scrollY;

				setState({
					x: clientX,
					y: clientY,
					elementX,
					elementY,
					elementPositionX,
					elementPositionY,
				});
			}
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return [state, ref];
};
