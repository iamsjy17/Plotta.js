'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasfactory = require('./canvasfactory');

var _canvasfactory2 = _interopRequireDefault(_canvasfactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Painter = function () {
  function Painter(canvas) {
    _classCallCheck(this, Painter);

    this.graphCanvas = _canvasfactory2.default.CreateRenderCanvas(canvas);
  }

  _createClass(Painter, [{
    key: 'Draw',
    value: function Draw(lineDatas, config) {
      if (!this.graphCanvas) return;

      /*
        data Convert
      */
      var metaDatas = [];
      this.graphCanvas.Draw(metaDatas);
    }
  }]);

  return Painter;
}();

exports.default = Painter;