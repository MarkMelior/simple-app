import { ConfigThemes } from '@nextui-org/theme';
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
				foreground: '#000000',
			},
		},
	},
};
