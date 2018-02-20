import MobileDetect from "mobile-detect";

export const isMobile = () => {
  var md = new MobileDetect(window.navigator.userAgent);
  return !!md.mobile();
};
