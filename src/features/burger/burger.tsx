'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Drawer } from 'vaul';

export const Burger = ({ children }: { children: React.ReactNode }) => {
	const [snap, setSnap] = useState<number | string | null>(0.7);

	return (
		<Drawer.Root
			direction='bottom'
			snapPoints={[0.7, 1]}
			activeSnapPoint={snap}
			setActiveSnapPoint={setSnap}
		>
			<Drawer.Trigger asChild>
				<Button
					className='text-default-500 hover:text-default-600 lg:hidden'
					isIconOnly
					variant='light'
				>
					<RxHamburgerMenu size={20} />
				</Button>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className='fixed inset-0 bg-black/40 z-40' />
				<Drawer.Content className='bg-default-100 flex flex-col rounded-t-[10px] h-[90%] mt-24 fixed bottom-0 left-0 right-0 z-40 outline-none'>
					<div className='w-full bg-default-100 h-8 flex justify-center items-center'>
						<div className='w-12 h-1.5 rounded-full bg-default-300' />
					</div>
					<div className='overflow-auto'>
						<div className='max-w-md mx-auto px-4'>{children}</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
};
