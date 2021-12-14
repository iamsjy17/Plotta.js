/**
 * @name pf
 * @type Object
 * @property {Object} PLATFORM_TYPE
 * @property {Object} BROWSER_TYPE
 * @property {Number} currentPlaform
 * @property {Number} currentBrowser
 * @property {Boolean} IsAvailableOffScreen
 *
 */

const pf = {};

pf.PLATFORM_TYPE = {
  NODE: 0,
  BROWSER: 1,
};

pf.BROWSER_TYPE = {
  LAZY: 0,
  CHROME: 1,
  IE_11: 2,
  EDGE: 3,
  SAFARI: 4,
  FIREFOX: 5,
};

pf.currentPlaform = (function () {
  return pf.PLATFORM_TYPE.BROWSER;
})();

pf.currentBrowser = (function () {
  const agt = navigator.userAgent.toLowerCase();
  const name = navigator.appName;
  let type = pf.BROWSER_TYPE.LAZY;

  if (name === 'Microsoft Internet Explorer') {
    type = pf.BROWSER_TYPE.IE;
  } else if (agt.indexOf('tident') !== -1) {
    type = pf.BROWSER_TYPE.IE_11;
  } else if (agt.indexOf('edge/') !== -1) {
    type = pf.BROWSER_TYPE.EDGE;
  } else if (agt.indexOf('chrome') !== -1 || agt.indexOf('whale') !== -1) {
    type = pf.BROWSER_TYPE.CHROME;
  } else if (agt.indexOf('firefox') !== -1) {
    type = pf.BROWSER_TYPE.FIREFOX;
  } else if (agt.indexOf('safari') !== -1) {
    type = pf.BROWSER_TYPE.SAFARI;
  }

  return type;
})();

pf.IsAvailableOffScreen = (function () {
  return pf.currentPlaform === pf.PLATFORM_TYPE.BROWSER && pf.currentBrowser === pf.BROWSER_TYPE.CHROME;
})();

export default pf;
