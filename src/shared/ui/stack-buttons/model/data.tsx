import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { MdOutlineCookie } from 'react-icons/md';
import { PiMarkdownLogo } from 'react-icons/pi';
import { RiNextjsFill } from 'react-icons/ri';
import { SiPrisma } from 'react-icons/si';
import { TbServerBolt } from 'react-icons/tb';

export type StackVariants =
	| 'TypeScript'
	| 'RTK Query'
	| 'JavaScript'
	| 'Cookie'
	| 'Next.js'
	| 'SSR'
	| 'Markdown'
	| 'Prisma';

interface ButtonProps {
	icon: JSX.Element;
	colorText?: string;
	color?: string;
}

export const StackButtonData: Record<StackVariants[number], ButtonProps> = {
	TypeScript: {
		icon: <BiLogoTypescript size={20} />,
		color: 'bg-blue-500/10',
		colorText: 'text-blue-500',
	},
	JavaScript: {
		icon: <BiLogoJavascript size={20} />,
		color: 'bg-yellow-500/10',
		colorText: 'text-yellow-500',
	},
	'RTK Query': {
		icon: <></>,
		color: 'bg-blue-500/10',
		colorText: 'text-blue-500',
	},
	Cookie: {
		icon: <MdOutlineCookie size={18} />,
		color: 'bg-yellow-500/10',
		colorText: 'text-yellow-500',
	},
	'Next.js': {
		icon: <RiNextjsFill size={20} />,
	},
	SSR: {
		icon: <TbServerBolt size={18} />,
	},
	Prisma: {
		icon: <SiPrisma size={18} />,
	},
	Markdown: {
		icon: <PiMarkdownLogo size={20} />,
	},
};
