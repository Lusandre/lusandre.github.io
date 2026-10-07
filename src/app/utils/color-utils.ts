/**
 * Color utility functions for dynamic theming, opacity calculation, and auto dark-mode counterpart generation.
 */

/**
 * Converts Hex string (#RRGGBB or #RGB) to rgba(r, g, b, alpha) string.
 */
export function hexToRgba(hex: string, alpha: number = 1.0): string {
  if (!hex) return `rgba(255, 255, 255, ${alpha})`;
  
  let cleanHex = hex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map((c) => c + c).join('');
  }
  
  if (cleanHex.length !== 6) {
    return `rgba(255, 255, 255, ${alpha})`;
  }

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return `rgba(${isNaN(r) ? 255 : r}, ${isNaN(g) ? 255 : g}, ${isNaN(b) ? 255 : b}, ${alpha})`;
}

/**
 * Converts RGB components to HSL.
 */
export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

/**
 * Converts HSL components to HEX.
 */
export function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const r = Math.round(255 * f(0));
  const g = Math.round(255 * f(8));
  const b = Math.round(255 * f(4));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * Automatically calculates a high-contrast, vibrant, luminescence-optimized
 * dark mode counterpart color for any given light mode base color.
 */
export function calculateDarkCounterpart(lightHex: string): string {
  if (!lightHex) return '#38bdf8';
  
  let cleanHex = lightHex.replace('#', '').trim();
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map((c) => c + c).join('');
  }
  if (cleanHex.length !== 6) return '#38bdf8';

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  const [h, s, l] = rgbToHsl(r, g, b);

  // For dark themes, we want high visibility and neon/glow luminescence:
  // Saturation: vibrant (boosted between 80% - 95%)
  // Lightness: optimal luminescence (between 62% - 75%)
  const darkS = Math.min(100, Math.max(75, s + 10));
  const darkL = Math.min(78, Math.max(62, 100 - l > 50 ? 68 : 72));

  return hslToHex(h, darkS, darkL);
}
