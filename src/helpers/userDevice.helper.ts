export const isUsingMobileDevice = () => {
  const ua = navigator.userAgent;

  return /Android|Mobi/i.test(ua);
};
