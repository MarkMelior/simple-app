interface GlowingBoxSettings {
  bgSize?: string
  bgStrength?: number
  bgStrengthHover?: number
  borderSize?: string
  borderStrength?: number
  borderStrengthHover?: number
}

export const glowingSettings: GlowingBoxSettings = {
  bgSize: '700px',
  bgStrength: 0,
  bgStrengthHover: 0.05,
  borderSize: '500px',
  borderStrength: 0.5,
  borderStrengthHover: 1,
};

export const glowingStyle = {
  '--spotlight-bg-size': glowingSettings.bgSize,
  '--spotlight-bg-strength': glowingSettings.bgStrength,
  '--spotlight-bg-strength-hover': glowingSettings.bgStrengthHover,
  '--spotlight-border-size': glowingSettings.borderSize,
  '--spotlight-border-strength': glowingSettings.borderStrength,
  '--spotlight-border-strength-hover': glowingSettings.borderStrengthHover,
} as React.CSSProperties;
