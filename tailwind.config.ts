import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import { ExtendColors } from './config/extend-colors';
import { nextuiThemes } from './config/nextui-themes';

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/components/(button|checkbox|input|radio|skeleton|spinner|toggle|ripple).js',
	],
	darkMode: 'class',
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
			colors: ExtendColors,
		},
	},
	plugins: [
		nextui({
			addCommonColors: true,
			prefix: 'simple',
			themes: nextuiThemes,
		}),
	],
};
export default config;
