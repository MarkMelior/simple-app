import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
		},
	},
	plugins: [],
};
export default config;
