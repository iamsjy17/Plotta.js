"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DrawHelper = {};

DrawHelper.Draw = function (ctx, width, height, metaDatas) {
  var maxCircle = 60;
  var radius = 230;
  var size = 7;

  ctx.translate(width / 2, height / 2);

  var _loop = function _loop(i) {
    setTimeout(function () {
      if (i % maxCircle === 0) {
        // console.log(new Date().getSeconds());
        ctx.resetTransform();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width / 2, height / 2);
      }
      ctx.beginPath();
      ctx.arc(0, radius, size, 0, 2 * Math.PI, false);
      ctx.rotate(2 * Math.PI / maxCircle);
      ctx.fill();
    }, 1000 / maxCircle * i);
  };

  for (var i = 0; i < maxCircle * 100; i++) {
    _loop(i);
  }
};

exports.default = DrawHelper;