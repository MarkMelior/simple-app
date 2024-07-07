import { Navbar } from '@/widgets';

export default function Home() {
	return (
		<>
			<Navbar />
			<div className='overflow-hidden'>
				<div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8'>
					<div className='hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto'></div>
					<div className='lg:pl-[19.5rem]'></div>
				</div>
			</div>
		</>
	);
}
