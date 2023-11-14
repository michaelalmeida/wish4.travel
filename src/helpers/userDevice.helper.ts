export const isUsingMobileDevice = () => {
  const ua = navigator.userAgent;

  console.log(ua);

  return /Android|Mobi/i.test(ua);
};
