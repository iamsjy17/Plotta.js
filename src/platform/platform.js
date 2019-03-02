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
  BROWSER: 1
};

pf.BROWSER_TYPE = {
  lAZY: 0,
  CHROME: 1,
  IE_11: 2,
  EDGE: 3,
  SAFARI: 4,
  FIREFOX: 5
};

pf.currentPlaform = (function () {
  return pf.PLATFORM_TYPE.BROWSER;
}());

pf.currentBrowser = (function () {
  return pf.BROWSER_TYPE.CHROME;
}());

pf.IsAvailableOffScreen = (function () {
  return (
    pf.currentPlaform === pf.PLATFORM_TYPE.NODE || pf.currentBrowser === pf.BROWSER_TYPE.CHROME
  );
}());

export default pf;
