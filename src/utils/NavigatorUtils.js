import MobileDetect from "mobile-detect";

var md = new MobileDetect(window.navigator.userAgent);

export const isMobile = !!md.mobile();
