'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawhelper = require('./drawhelper');

var _drawhelper2 = _interopRequireDefault(_drawhelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphCanvas = function () {
  function GraphCanvas(canvas) {
    _classCallCheck(this, GraphCanvas);

    this.presentationCanvas = canvas;
    this.presentationContext = this.presentationCanvas.getContext('2d');
    this.renderCanvas = document.createElement('canvas');
    this.renderContext = this.renderCanvas.getContext('2d');
  }

  _createClass(GraphCanvas, [{
    key: 'Draw',
    value: function Draw(metaDatas) {
      _drawhelper2.default.Draw(this.renderContext, this.presentationCanvas.width, this.presentationCanvas.height, metaDatas);
      this.presentationContext.drawImage(this.renderCanvas);
    }
  }]);

  return GraphCanvas;
}();

exports.default = GraphCanvas;