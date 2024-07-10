'use client';

import { SidebarNavigation } from '@/shared/ui';
import { Button } from '@nextui-org/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Drawer } from 'vaul';

export const Burger = () => {
	return (
		<Drawer.Root direction='bottom'>
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
					<div className='w-full bg-default-100 h-32 flex justify-center items-center'>
						<div className='w-12 h-1.5 rounded-full bg-default-300' />
					</div>
					<div className='overflow-auto'>
						<div className='max-w-md mx-auto'>
							<SidebarNavigation />
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
		// <Drawer.Root direction='right'>
		// 	<Drawer.Trigger asChild>
		// 		<Button
		// 			className='text-default-500 hover:text-default-600 lg:hidden'
		// 			isIconOnly
		// 			variant='light'
		// 		>
		// 			<RxHamburgerMenu size={20} />
		// 		</Button>
		// 	</Drawer.Trigger>
		// 	<Drawer.Portal>
		// 		<Drawer.Overlay className='fixed inset-0 bg-black/40 z-40' />
		// 		<Drawer.Content className='bg-default-100 h-full w-[80%] fixed bottom-0 right-0 z-40 outline-none overflow-y-auto'>
		// 			<div className='p-4 bg-default-100 flex-1 h-full'>
		// 				<div className='h-[300vh] max-w-md mx-auto'>
		// 					<SidebarNavigation />
		// 				</div>
		// 			</div>
		// 		</Drawer.Content>
		// 	</Drawer.Portal>
		// </Drawer.Root>
	);
};
