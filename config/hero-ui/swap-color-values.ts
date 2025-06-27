export function swapColorValues<T extends object>(colors: T) {
  const swappedColors = {};
  const keys = Object.keys(colors);
  const length = keys.length;

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i];
    const key2 = keys[length - 1 - i];

    // @ts-expect-error any
    swappedColors[key1] = colors[key2];
    // @ts-expect-error any
    swappedColors[key2] = colors[key1];
  }
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)];

    // @ts-expect-error any
    swappedColors[middleKey] = colors[middleKey];
  }

  return swappedColors;
}
