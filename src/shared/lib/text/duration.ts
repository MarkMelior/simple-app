const plural = (n: number, one: string, few: string, many: string) => {
  const nAbs = Math.abs(n) % 100;
  const n1 = nAbs % 10;

  if (nAbs > 10 && nAbs < 20) return many; // 11‑19
  if (n1 === 1) return one; // 1, 21, 31 …
  if (n1 >= 2 && n1 <= 4) return few; // 2‑4, 22‑24, 32‑34 …

  return many; // 0, 5‑9, 10‑20, 25‑30 …
};

export const formatDuration = (seconds: number): string => {
  const totalMinutes = Math.floor(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const parts: string[] = [];

  if (hours) {
    parts.push(`${hours} ${plural(hours, 'час', 'часа', 'часов')}`);
  }
  if (minutes || !hours) { // если часов 0, покажем «0 минут»
    parts.push(`${minutes} ${plural(minutes, 'минута', 'минуты', 'минут')}`);
  }

  return parts.join(' ');
};
