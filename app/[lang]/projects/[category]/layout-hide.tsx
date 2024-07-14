type Props = {
	children: React.ReactNode;
};

export default async function ProjectsLayout({ children }: Readonly<Props>) {
	return (
		<>
			{/* <div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8 relative z-20'>
				<Sidebar />
				<div className='lg:pl-[19.5rem]'>
					<div className='max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 min-h-[var(--height-screen)] flex flex-col justify-between'>
						<div>{children}</div>
						<Footer />
					</div>
				</div>
			</div> */}
		</>
	);
}
