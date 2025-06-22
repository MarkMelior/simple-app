// mouseManager.ts
type MouseCallback = (ev: MouseEvent) => void;

const subscribers = new Set<MouseCallback>();
let listening = false;

// Для троттлинга через requestAnimationFrame
let rafScheduled = false;
let lastEvent: MouseEvent | null = null;

function globalMouseHandler(e: MouseEvent) {
  lastEvent = e;
  if (!rafScheduled) {
    rafScheduled = true;
    requestAnimationFrame(() => {
      rafScheduled = false;
      // Копируем, чтобы изменения внутри колбэка не мешали итерации
      const subs = Array.from(subscribers);

      subs.forEach((cb) => {
        try {
          if (lastEvent) {
            cb(lastEvent);
          }
        } catch (err) {
          // чтобы один подписчик не сломал остальных
          console.error('Error in mouse subscriber:', err);
        }
      });
    });
  }
}

export function subscribeMouse(cb: MouseCallback): () => void {
  subscribers.add(cb);
  if (!listening) {
    window.addEventListener('mousemove', globalMouseHandler);
    listening = true;
  }

  // Функция отписки:
  return () => {
    subscribers.delete(cb);
    if (subscribers.size === 0 && listening) {
      window.removeEventListener('mousemove', globalMouseHandler);
      listening = false;
    }
  };
}
