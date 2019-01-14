'use strict';

var _drawhelper = require('./drawhelper');

var _drawhelper2 = _interopRequireDefault(_drawhelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

self.onmessage = function (event) {
  var _event$data = event.data,
      canvas = _event$data.canvas,
      width = _event$data.width,
      height = _event$data.height,
      metaDatas = _event$data.metaDatas;

  var ctx = canvas.getContext('2d');
  _drawhelper2.default.Draw(ctx, width, height, metaDatas);
};