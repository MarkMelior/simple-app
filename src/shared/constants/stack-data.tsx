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

import type { JSX } from 'react';

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
  color?: string
  colorText?: string
  icon: JSX.Element
  name: string
}

export const StackData: Record<StackVariants, StackProps> = {
  'bash': {
    icon: <LuTerminal size={18} />,
    name: 'Terminal',
  },
  'cookie': {
    color: 'bg-yellow-500/10',
    colorText: 'text-yellow-500',
    icon: <MdOutlineCookie size={18} />,
    name: 'Cookie',
  },
  'docker': {
    icon: <FaDocker size={20} />,
    name: 'Docker',
  },
  'figma': {
    icon: <FaFigma size={18} />,
    name: 'Figma',
  },
  'fsd': {
    icon: <LuCakeSlice size={18} />,
    name: 'FSD',
  },
  'git': {
    icon: <FaGitAlt size={20} />,
    name: 'Git',
  },
  'github': {
    icon: <BsGithub size={20} />,
    name: 'GitHub',
  },
  'javascript': {
    color: 'bg-yellow-500/10',
    colorText: 'text-yellow-500',
    icon: <BiLogoJavascript size={20} />,
    name: 'JavaScript',
  },
  'json': {
    icon: <LuFileJson2 size={18} />,
    name: 'json',
  },
  'markdown': {
    icon: <PiMarkdownLogo size={20} />,
    name: 'Markdown',
  },
  'mongodb': {
    icon: <SiMongodb size={20} />,
    name: 'MongoDB',
  },
  'nestjs': {
    icon: <SiNestjs size={18} />,
    name: 'NestJS',
  },
  'nextjs': {
    icon: <RiNextjsFill size={20} />,
    name: 'Next.js',
  },
  'nextui': {
    icon: <SiNextui size={18} />,
    name: 'Next UI',
  },
  'nodejs': {
    icon: <FaNodeJs size={18} />,
    name: 'Node.js',
  },
  'npm': {
    icon: <FaNpm size={20} />,
    name: 'npm',
  },
  'prisma': {
    icon: <SiPrisma size={18} />,
    name: 'Prisma',
  },
  'python': {
    icon: <FaPython size={18} />,
    name: 'Python',
  },
  'react': {
    icon: <FaReact size={20} />,
    name: 'React',
  },
  'redux-toolkit': {
    icon: <SiRedux size={18} />,
    name: 'Redux Toolkit',
  },
  'rtk-query': {
    icon: <SiReactquery size={18} />,
    name: 'RTK Query',
  },
  'scss': {
    icon: <FaSass size={20} />,
    name: 'Scss',
  },
  'seo': {
    icon: <RiSeoLine size={18} />,
    name: 'SEO',
  },
  'sql': {
    icon: <GoDatabase size={18} />,
    name: 'SQL',
  },
  'ssr': {
    icon: <TbServerBolt size={18} />,
    name: 'SSR',
  },
  'tailwind': {
    icon: <RiTailwindCssFill size={20} />,
    name: 'Tailwind',
  },
  'tsx': {
    icon: <FaReact size={20} />,
    name: 'TSX',
  },
  'typescript': {
    color: 'bg-blue-500/10',
    colorText: 'text-blue-500',
    icon: <BiLogoTypescript size={20} />,
    name: 'TypeScript',
  },
  'webpack': {
    icon: <SiWebpack size={18} />,
    name: 'Webpack',
  },
  'zod': {
    icon: <SiZod size={18} />,
    name: 'Zod',
  },
};
