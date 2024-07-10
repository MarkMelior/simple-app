import { ConfigThemes } from '@nextui-org/react';
import colors from 'tailwindcss/colors';
import { ExtendColors } from './extend-colors';
import { swapColorValues } from './swap-color-values';

export const nextuiThemes: ConfigThemes = {
	light: {
		colors: {
			primary: {
				...swapColorValues(colors.blue),
				DEFAULT: colors.blue[500],
				foreground: '#FFFFFF',
			},
			default: {
				...ExtendColors.main,
				DEFAULT: ExtendColors.main[300],
				foreground: '#000000',
			},
			content1: ExtendColors.main[50],
			content2: ExtendColors.main[100],
			content3: ExtendColors.main[200],
			content4: ExtendColors.main[300],
		},
	},
	dark: {
		colors: {
			primary: {
				...colors.blue,
				DEFAULT: colors.blue[500],
				foreground: '#FFFFFF',
			},
			default: {
				...swapColorValues(ExtendColors.main),
				DEFAULT: ExtendColors.main[700],
				foreground: '#FFFFFF',
			},
			content1: ExtendColors.main[900],
			content2: ExtendColors.main[800],
			content3: ExtendColors.main[700],
			content4: ExtendColors.main[600],
		},
	},
};
