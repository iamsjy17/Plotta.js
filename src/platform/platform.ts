const PLATFORM_TYPE = {
  NODE: 0,
  BROWSER: 1,
};

const BROWSER_TYPE = {
  LAZY: 0,
  CHROME: 1,
  IE: 2,
  IE_11: 3,
  EDGE: 4,
  SAFARI: 5,
  FIREFOX: 6,
};

const currentPlatform = getCurrentPlaform();
const currentBrowser = getCurrentBrowser();
const isAvailableOffScreen = currentPlatform === PLATFORM_TYPE.BROWSER && currentBrowser === BROWSER_TYPE.CHROME;

function getCurrentPlaform() {
  return PLATFORM_TYPE.BROWSER;
}

function getCurrentBrowser() {
  const agt = navigator.userAgent.toLowerCase();
  const name = navigator.appName;
  let type = BROWSER_TYPE.LAZY;

  if (name === 'Microsoft Internet Explorer') {
    type = BROWSER_TYPE.IE;
  } else if (agt.indexOf('tident') !== -1) {
    type = BROWSER_TYPE.IE_11;
  } else if (agt.indexOf('edge/') !== -1) {
    type = BROWSER_TYPE.EDGE;
  } else if (agt.indexOf('chrome') !== -1 || agt.indexOf('whale') !== -1) {
    type = BROWSER_TYPE.CHROME;
  } else if (agt.indexOf('firefox') !== -1) {
    type = BROWSER_TYPE.FIREFOX;
  } else if (agt.indexOf('safari') !== -1) {
    type = BROWSER_TYPE.SAFARI;
  }

  return type;
}

export default {
  PLATFORM_TYPE,
  BROWSER_TYPE,
  currentPlatform,
  currentBrowser,
  isAvailableOffScreen,
};
