// ! DELETE THIS FILE

interface SidebarItemsProps {
	title: string;
	item: { name: string; link: string; gitPath?: string }[];
}

export const SidebarItems: SidebarItemsProps[] = [
	{
		title: 'Best Practice',
		item: [
			{
				name: 'Next.js: Authentication (Server Components, Actions, Middleware)',
				link: '/projects/best-practice/app-router-auth',
				gitPath: '/projects/best-practice/app-router-auth/page.mdx',
			},
			// {
			// 	name: 'Hook useMessage',
			// 	link: '/projects/use-message',
			// 	gitPath: '/src/shared/hooks/useMessage/useMessage.mdx',
			// },
			// {
			// 	name: 'Infinity scroll + Virtualization',
			// 	link: '/projects/infinity-scroll-virtualization',
			// 	gitPath: '/app/projects/infinity-scroll-virtualization/page.tsx',
			// },
		],
	},
	// {
	// 	title: 'UI Components',
	// 	item: [
	// 		{
	// 			name: 'Card 180° Rotating',
	// 			link: '/projects/card-rotating',
	// 		},
	// 	],
	// },
	// {
	// 	title: '3D Graphics',
	// 	item: [
	// 		{
	// 			name: 'RTX 3070 Ti',
	// 			link: '/projects/video-card',
	// 		},
	// 	],
	// },
];
