import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import {
	FaDocker,
	FaFigma,
	FaGitAlt,
	FaNodeJs,
	FaNpm,
	FaPython,
	FaReact,
	FaSass,
} from 'react-icons/fa';
import { GoDatabase } from 'react-icons/go';
import { LuCakeSlice, LuFileJson2, LuTerminal } from 'react-icons/lu';
import { MdOutlineCookie } from 'react-icons/md';
import { PiMarkdownLogo } from 'react-icons/pi';
import { RiNextjsFill, RiSeoLine, RiTailwindCssFill } from 'react-icons/ri';
import {
	SiMongodb,
	SiNestjs,
	SiNextui,
	SiPrisma,
	SiReactquery,
	SiRedux,
	SiWebpack,
	SiZod,
} from 'react-icons/si';
import { TbServerBolt } from 'react-icons/tb';

export type StackVariants =
	| 'typescript'
	| 'tsx'
	| 'javascript'
	| 'cookie'
	| 'nextjs'
	| 'ssr'
	| 'markdown'
	| 'prisma'
	| 'react'
	| 'redux-toolkit'
	| 'rtk-query'
	| 'scss'
	| 'tailwind'
	| 'git'
	| 'github'
	| 'docker'
	| 'nextui'
	| 'nestjs'
	| 'mongodb'
	| 'sql'
	| 'webpack'
	| 'npm'
	| 'nodejs'
	| 'python'
	| 'zod'
	| 'fsd'
	| 'json'
	| 'seo'
	| 'bash'
	| 'figma';

interface StackProps {
	name: string;
	icon: JSX.Element;
	colorText?: string;
	color?: string;
}

export const StackData: Record<StackVariants, StackProps> = {
	typescript: {
		name: 'TypeScript',
		icon: <BiLogoTypescript size={20} />,
		color: 'bg-blue-500/10',
		colorText: 'text-blue-500',
	},
	tsx: {
		name: 'TSX',
		icon: <FaReact size={20} />,
	},
	javascript: {
		name: 'JavaScript',
		icon: <BiLogoJavascript size={20} />,
		color: 'bg-yellow-500/10',
		colorText: 'text-yellow-500',
	},
	cookie: {
		name: 'Cookie',
		icon: <MdOutlineCookie size={18} />,
		color: 'bg-yellow-500/10',
		colorText: 'text-yellow-500',
	},
	nextjs: {
		name: 'Next.js',
		icon: <RiNextjsFill size={20} />,
	},
	ssr: {
		name: 'SSR',
		icon: <TbServerBolt size={18} />,
	},
	prisma: {
		name: 'Prisma',
		icon: <SiPrisma size={18} />,
	},
	markdown: {
		name: 'Markdown',
		icon: <PiMarkdownLogo size={20} />,
	},
	react: {
		name: 'React',
		icon: <FaReact size={20} />,
	},
	'redux-toolkit': {
		name: 'Redux Toolkit',
		icon: <SiRedux size={18} />,
	},
	'rtk-query': {
		name: 'RTK Query',
		icon: <SiReactquery size={18} />,
	},
	scss: {
		name: 'Scss',
		icon: <FaSass size={20} />,
	},
	tailwind: {
		name: 'Tailwind',
		icon: <RiTailwindCssFill size={20} />,
	},
	git: {
		name: 'Git',
		icon: <FaGitAlt size={20} />,
	},
	github: {
		name: 'GitHub',
		icon: <BsGithub size={20} />,
	},
	docker: {
		name: 'Docker',
		icon: <FaDocker size={20} />,
	},
	figma: {
		name: 'Figma',
		icon: <FaFigma size={18} />,
	},
	nestjs: {
		name: 'NestJS',
		icon: <SiNestjs size={18} />,
	},
	nextui: {
		name: 'Next UI',
		icon: <SiNextui size={18} />,
	},
	mongodb: {
		name: 'MongoDB',
		icon: <SiMongodb size={20} />,
	},
	sql: {
		name: 'SQL',
		icon: <GoDatabase size={18} />,
	},
	webpack: {
		name: 'Webpack',
		icon: <SiWebpack size={18} />,
	},
	npm: {
		name: 'npm',
		icon: <FaNpm size={20} />,
	},
	nodejs: {
		name: 'Node.js',
		icon: <FaNodeJs size={18} />,
	},
	python: {
		name: 'Python',
		icon: <FaPython size={18} />,
	},
	zod: {
		name: 'Zod',
		icon: <SiZod size={18} />,
	},
	fsd: {
		name: 'FSD',
		icon: <LuCakeSlice size={18} />,
	},
	json: {
		name: 'json',
		icon: <LuFileJson2 size={18} />,
	},
	seo: {
		name: 'SEO',
		icon: <RiSeoLine size={18} />,
	},
	bash: {
		name: 'Terminal',
		icon: <LuTerminal size={18} />,
	},
};
