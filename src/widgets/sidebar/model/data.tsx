interface SidebarLinksProps {
	name: string;
	link: string;
	icon: JSX.Element;
	color: string;
}

export const SidebarLinks: SidebarLinksProps[] = [
	{
		name: 'Telegram',
		link: 'https://t.me/MarkMelior',
		icon: (
			<svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z'
					className='fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-300 dark:fill-slate-600'
				/>
				<circle
					cx='12'
					cy='11'
					r='1'
					className='fill-white dark:group-hover:fill-white dark:fill-slate-400'
				/>
				<circle
					cx='9'
					cy='11'
					r='1'
					className='fill-blue-200 dark:group-hover:fill-white dark:fill-slate-400'
				/>
				<circle
					cx='15'
					cy='11'
					r='1'
					className='fill-blue-200 dark:fill-slate-400 dark:group-hover:fill-white'
				/>
			</svg>
		),
		color: 'blue',
	},
	{
		name: 'YouTube',
		link: 'https://www.youtube.com/@MarkMelior',
		icon: (
			<svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
					className='fill-red-400 group-hover:fill-red-500 dark:group-hover:fill-red-300 dark:fill-slate-600'
				/>
				<path
					d='M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z'
					className='fill-red-50 group-hover:fill-red-100 dark:group-hover:fill-white dark:fill-slate-400'
				/>
			</svg>
		),
		color: 'red',
	},
	{
		name: 'Behance',
		link: 'https://www.behance.net/MarkMelior',
		icon: (
			<svg className='h-6 w-6' viewBox='0 0 24 24' fill='none'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z'
					fill='#E879F9'
					className='fill-blue-400 group-hover:fill-blue-500 dark:group-hover:fill-blue-300 dark:fill-slate-400'
				/>
				<path
					d='M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z'
					fill='#F0ABFC'
					className='fill-blue-300 group-hover:fill-blue-400 dark:fill-slate-500'
				/>
			</svg>
		),
		color: 'blue',
	},
];

interface SidebarItemsProps {
	title: string;
	item: { name: string; link: string }[];
}

export const SidebarItems: SidebarItemsProps[] = [
	{
		title: 'Best Practice',
		item: [
			{
				name: 'Next.js: Authentication (Server Components, Actions, Middleware)',
				link: '/projects/app-router-auth',
			},
			{
				name: 'Infinity scroll + Virtualization',
				link: '/projects/infinity-scroll-virtualization',
			},
		],
	},
	{
		title: '3D Graphics',
		item: [
			{
				name: 'RTX 3070 Ti',
				link: '/projects/video-card',
			},
		],
	},
];
