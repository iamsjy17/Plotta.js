'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OffscreenGraphCanvas = function () {
  function OffscreenGraphCanvas(canvas) {
    _classCallCheck(this, OffscreenGraphCanvas);

    this.presentationCanvas = canvas;
    this.renderCanvas = this.presentationCanvas.transferControlToOffscreen();
    this.worker = new Worker('./offscreenWorker.js');
  }

  _createClass(OffscreenGraphCanvas, [{
    key: 'Draw',
    value: function Draw(metaDatas) {
      this.worker.postMessage({
        canvas: this.renderCanvas,
        width: this.renderCanvas.width,
        height: this.renderCanvas.height,
        metaDatas: metaDatas
      }, [this.renderCanvas]);
    }
  }]);

  return OffscreenGraphCanvas;
}();

exports.default = OffscreenGraphCanvas;