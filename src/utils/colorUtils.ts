interface Color {
  r: number;
  g: number;
  b: number;
}

export const hexToRGB = (hex: string): Color => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map(x => {
    const hex = Math.max(0, Math.min(255, x)).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

const rotateHue = (rgb: Color, angle: number): Color => {
  const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
  hsv.h = (hsv.h + angle) % 360;
  const newRgb = hsvToRgb(hsv.h, hsv.s, hsv.v);
  return { r: newRgb.r, g: newRgb.g, b: newRgb.b };
};

const rgbToHsv = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
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

  return { h: h * 360, s, v };
};

const hsvToRgb = (h: number, s: number, v: number) => {
  h /= 360;
  let r = 0, g = 0, b = 0;

  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v; g = t; b = p;
      break;
    case 1:
      r = q; g = v; b = p;
      break;
    case 2:
      r = p; g = v; b = t;
      break;
    case 3:
      r = p; g = q; b = v;
      break;
    case 4:
      r = t; g = p; b = v;
      break;
    case 5:
      r = v; g = p; b = q;
      break;
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};

export const generateColorPalettes = (hexColor: string): string[][] => {
  const rgb = hexToRGB(hexColor);
  
  const palettes = [
    // 보색 관계
    [
      hexColor,
      rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b),
      rgbToHex(rgb.r + 30, rgb.g + 30, rgb.b + 30),
      rgbToHex(rgb.r - 30, rgb.g - 30, rgb.b - 30),
    ],
    // 삼색 관계
    [
      hexColor,
      ...Array(3).fill(0).map((_, i) => {
        const rotated = rotateHue(rgb, 120 * (i + 1));
        return rgbToHex(rotated.r, rotated.g, rotated.b);
      }),
    ],
    // 파스텔톤
    [
      hexColor,
      ...Array(3).fill(0).map((_, i) => {
        const factor = 0.7 + (i * 0.1);
        return rgbToHex(
          Math.floor(rgb.r + (255 - rgb.r) * factor),
          Math.floor(rgb.g + (255 - rgb.g) * factor),
          Math.floor(rgb.b + (255 - rgb.b) * factor)
        );
      }),
    ],
    // 그라데이션
    [
      hexColor,
      ...Array(3).fill(0).map((_, i) => {
        const factor = 0.25 * (i + 1);
        return rgbToHex(
          Math.floor(rgb.r + (255 - rgb.r) * factor),
          Math.floor(rgb.g + (255 - rgb.g) * factor),
          Math.floor(rgb.b + (255 - rgb.b) * factor)
        );
      }),
    ],
    // 보색 + 중간색
    [
      hexColor,
      rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b),
      rgbToHex(Math.floor((rgb.r + (255 - rgb.r)) / 2), Math.floor((rgb.g + (255 - rgb.g)) / 2), Math.floor((rgb.b + (255 - rgb.b)) / 2)),
      rgbToHex(Math.floor((rgb.r + (255 - rgb.r)) / 4), Math.floor((rgb.g + (255 - rgb.g)) / 4), Math.floor((rgb.b + (255 - rgb.b)) / 4)),
    ],
    // 보색 + 보색의 보색
    [
      hexColor,
      rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b),
      rgbToHex(255 - (255 - rgb.r), 255 - (255 - rgb.g), 255 - (255 - rgb.b)),
      rgbToHex(255 - (255 - (255 - rgb.r)), 255 - (255 - (255 - rgb.g)), 255 - (255 - (255 - rgb.b))),
    ],
    // 파스텔톤 + 보색
    [
      hexColor,
      rgbToHex(Math.floor((rgb.r + 255) / 2), Math.floor((rgb.g + 255) / 2), Math.floor((rgb.b + 255) / 2)),
      rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b),
      rgbToHex(Math.floor((255 - rgb.r + 255) / 2), Math.floor((255 - rgb.g + 255) / 2), Math.floor((255 - rgb.b + 255) / 2)),
    ],
    // 그라데이션 + 보색
    [
      hexColor,
      rgbToHex(rgb.r + 50, rgb.g + 50, rgb.b + 50),
      rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b),
      rgbToHex(255 - rgb.r + 50, 255 - rgb.g + 50, 255 - rgb.b + 50),
    ],
  ];

  return palettes;
}; 