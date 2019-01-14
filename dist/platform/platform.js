"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pf = {};

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

pf.currentPlaform = function () {
  return pf.PLATFORM_TYPE.BROWSER;
}();

pf.currentBrowser = function () {
  return pf.BROWSER_TYPE.CHROME;
}();

pf.IsAvailableOffScreen = function () {
  return pf.currentPlaform === pf.PLATFORM_TYPE.NODE || pf.currentBrowser === pf.BROWSER_TYPE.CHROME;
}();

exports.default = pf;