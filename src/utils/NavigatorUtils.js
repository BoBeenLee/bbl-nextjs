import MobileDetect from "mobile-detect";

export const isBrowser = typeof window !== 'undefined';

export const isMobile = () => {
  if(isBrowser) {
    return 'NONE';
  }
  var md = new MobileDetect(window.navigator.userAgent);
  return !!md.mobile();
};
