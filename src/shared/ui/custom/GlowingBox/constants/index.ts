import type { CSSProperties } from 'react';

interface GlowingBoxSettings {
  bgSize?: string
  bgStrength?: number
  bgStrengthHover?: number
  borderSize?: string
  borderStrength?: number
  borderStrengthHover?: number
}

export const glowingSettings: GlowingBoxSettings = {
  bgSize: '1500px',
  bgStrength: 0,
  bgStrengthHover: 0.04,
  borderSize: '600px',
  borderStrength: 0,
  borderStrengthHover: 0.7,
};

export const glowingStyle = {
  '--spotlight-bg-size': glowingSettings.bgSize,
  '--spotlight-bg-strength': glowingSettings.bgStrength,
  '--spotlight-bg-strength-hover': glowingSettings.bgStrengthHover,
  '--spotlight-border-size': glowingSettings.borderSize,
  '--spotlight-border-strength': glowingSettings.borderStrength,
  '--spotlight-border-strength-hover': glowingSettings.borderStrengthHover,
} as CSSProperties;
