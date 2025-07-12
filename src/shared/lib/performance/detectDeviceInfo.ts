export const detectDeviceInfo = () => {
  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android/i.test(ua);
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  return { isMobile, isTouch };
};
