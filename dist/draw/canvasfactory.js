'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphcanvas = require('./graphcanvas');

var _graphcanvas2 = _interopRequireDefault(_graphcanvas);

var _os_graphcanvas = require('./os_graphcanvas');

var _os_graphcanvas2 = _interopRequireDefault(_os_graphcanvas);

var _platform = require('../platform/platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CanvasFactory = {};

CanvasFactory.CreateRenderCanvas = function (canvas) {
  if (!canvas) return null;
  if (_platform2.default.IsAvailableOffScreen()) return new _os_graphcanvas2.default(canvas);
  return new _graphcanvas2.default(canvas);
};

exports.default = CanvasFactory;