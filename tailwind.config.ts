import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import { nextuiThemes } from './config/nextui-themes';

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./projects/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
		},
	},
	plugins: [
		nextui({
			addCommonColors: true,
			prefix: 'simple',
			themes: nextuiThemes,
		}),
		require('@tailwindcss/typography'),
	],
};
export default config;
