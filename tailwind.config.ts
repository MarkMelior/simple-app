import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|radio|skeleton|toggle|ripple|spinner).js"
  ],
	darkMode: 'class',
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
			colors: {
				main: {
					950: '#020617',
					900: '#0E1625',
					800: '#1E293B',
					700: '#32445F',
					600: '#3F4E65',
					500: '#576B88',
					400: '#90A3BB',
					300: '#B9C8DB',
					200: '#D4DDE9',
					100: '#F1F4F8',
					50: '#F8FAFC',
				},
			},
		},
	},
	plugins: [nextui()],
};
export default config;
