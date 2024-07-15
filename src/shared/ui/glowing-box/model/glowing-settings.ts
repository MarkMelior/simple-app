interface GlowingBoxSettings {
	borderStrength?: number;
	borderStrengthHover?: number;
	bgStrength?: number;
	bgStrengthHover?: number;
	borderSize?: string;
	bgSize?: string;
}

export const glowingSettings: GlowingBoxSettings = {
	borderStrength: 0.5,
	borderStrengthHover: 1,
	bgStrength: 0,
	bgStrengthHover: 0.05,
	borderSize: '500px',
	bgSize: '700px',
};

export const glowingStyle = {
	'--spotlight-border-strength': glowingSettings.borderStrength,
	'--spotlight-border-strength-hover': glowingSettings.borderStrengthHover,
	'--spotlight-bg-strength': glowingSettings.bgStrength,
	'--spotlight-bg-strength-hover': glowingSettings.bgStrengthHover,
	'--spotlight-border-size': glowingSettings.borderSize,
	'--spotlight-bg-size': glowingSettings.bgSize,
} as React.CSSProperties;
