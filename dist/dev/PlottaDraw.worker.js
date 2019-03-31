/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/view/osWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/view/drawHelper.js":
/*!********************************!*\
  !*** ./src/view/drawHelper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @name DrawHelper
 * @type Object
 * @method Draw
 * @method DrawTitle
 * @method DrawLegends
 * @method DrawAxis
 * @method DrawBorder
 * @method DrawGrid
 * @method DrawTics
 * @method DrawLines
 * @method DrawTable
 */
var DrawHelper = {};
/**
 * @name DrawTitle
 * @type function
 * @Description
 * Draw Title,
 * Default fontSize : 20px, textAlign : Center, textBaseline : middle
 */

DrawHelper.DrawTitle = function (ctx, font, title) {
  var text = title.text,
      color = title.color,
      position = title.position;
  ctx.save();
  ctx.font = "20px ".concat(font);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (color) ctx.fillStyle = color;
  ctx.fillText(text, position.x, position.y);
  ctx.restore();
};
/**
 * @name DrawLegends
 * @type function
 * @Description
 * Draw Legends,
 * Default fontSize : 14px, textAlign : Left, textBaseline : top, rectSize : 15px
 */


DrawHelper.DrawLegends = function (ctx, font, legendRect, legendDatas) {
  ctx.save();
  ctx.font = "14px ".concat(font);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  var rectSize = 15;
  var margin = 5;
  legendDatas.forEach(function (legendData) {
    var color = legendData.color,
        legend = legendData.legend,
        point = legendData.point;
    ctx.save();
    ctx.fillText(legend, legendRect.x + point.x + rectSize + margin, legendRect.y + point.y);
    if (color) ctx.fillStyle = color;
    ctx.fillRect(legendRect.x + point.x, legendRect.y + point.y, rectSize, rectSize);
    ctx.restore();
  });
  ctx.restore();
};
/**
 * @name DrawAxis
 * @type function
 * @Description
 * Draw Axis,
 * Default fontSize : 14px, textAlign : Center, textBaseline : middle
 */


DrawHelper.DrawAxis = function (ctx, font, axis) {
  var xLabel = axis.xLabel,
      yLabel = axis.yLabel;
  ctx.save();
  ctx.font = "14px ".concat(font);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (xLabel.visible) {
    if (xLabel.color) ctx.fillStyle = xLabel.color;
    ctx.fillText(xLabel.text, xLabel.position.x, xLabel.position.y);
  }

  if (yLabel.visible) {
    ctx.translate(yLabel.position.x, yLabel.position.y);
    ctx.rotate(-0.5 * Math.PI);
    if (yLabel.color) ctx.fillStyle = yLabel.color;
    ctx.fillText(yLabel.text, 0, 0);
  }

  ctx.restore();
};
/**
 * @name DrawBorder
 * @type function
 */


DrawHelper.DrawBorder = function (ctx, rect, border) {
  var visible = border.visible,
      type = border.type,
      color = border.color,
      width = border.width;
  if (!visible) return;
  ctx.save();
  if (color) ctx.strokeStyle = color;
  if (width) ctx.lineWidth = width;
  ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  ctx.restore();
};
/**
 * @name DrawGrid
 * @type function
 * @Description
 * Draw Grid,
 * Default lineWidth : 0.3px
 */


DrawHelper.DrawGrid = function (ctx, width, height, grid, tics) {
  var xTics = tics.xTics,
      yTics = tics.yTics;
  var visible = grid.visible,
      type = grid.type,
      color = grid.color;
  if (!visible) return;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.3;
  xTics.forEach(function (tic, index, array) {
    if (index === 0 || index === array.length - 1) return;
    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y);
    ctx.lineTo(tic.x, tic.y - height);
    ctx.stroke();
  });
  yTics.forEach(function (tic, index, array) {
    if (index === 0 || index === array.length - 1) return;
    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y);
    ctx.lineTo(tic.x + width, tic.y);
    ctx.stroke();
  });
  ctx.restore();
};
/**
 * @name DrawTics
 * @type function
 * @Description
 * Draw Tics,
 * Default lineWidth : 0.3px, textAlign : center, textBaseline : middle, ticSize : 10px
 */


DrawHelper.DrawTics = function (ctx, width, height, tics) {
  var visible = tics.visible,
      color = tics.color,
      xTics = tics.xTics,
      yTics = tics.yTics;
  if (!visible) return;
  var ticSize = 10;
  var ticValueMargin = 15;
  ctx.save();

  if (color) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  }

  ctx.lineWidth = 0.3;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  xTics.forEach(function (tic, index, array) {
    var yStart = tic.y + ticSize;
    var yEnd;

    if (index === 0) {
      yEnd = tic.y - height;
    } else {
      yEnd = tic.y;
    }

    ctx.beginPath();
    ctx.moveTo(tic.x, yStart);
    ctx.lineTo(tic.x, yEnd);
    ctx.stroke();
    ctx.fillText(tic.value, tic.x, tic.y + ticSize + ticValueMargin);
  });
  yTics.forEach(function (tic, index, array) {
    var xStart = tic.x - ticSize;
    var xEnd;

    if (index === 0) {
      xEnd = tic.x + width;
    } else {
      xEnd = tic.x;
    }

    ctx.beginPath();
    ctx.moveTo(xStart, tic.y);
    ctx.lineTo(xEnd, tic.y);
    ctx.stroke();
    ctx.fillText(tic.value, tic.x - ticSize - ticValueMargin, tic.y);
  });
  ctx.restore();
};
/**
 * @name DrawLines
 * @type function
 * @Description
 * Draw Tics,
 * Default lineWidth : 3px
 * @Todo Add LineStyle
 */


DrawHelper.DrawLines = function (ctx, graphRect, lineDatas) {
  ctx.save();
  ctx.lineWidth = 3;
  var region = new Path2D();
  region.rect(graphRect.x, graphRect.y, graphRect.w, graphRect.h);
  ctx.clip(region, 'evenodd');
  lineDatas.forEach(function (lineData) {
    var points = lineData.points,
        color = lineData.color;
    ctx.strokeStyle = color;
    var isStart = true;
    var yCriticalPoint = points[0].y;
    points.forEach(function (point, index) {
      if (point.y < graphRect.y) {
        yCriticalPoint = graphRect.y - 5;
      } else if (point.y > graphRect.y + graphRect.h) {
        yCriticalPoint = graphRect.y + graphRect.h + 5;
      }

      if (isStart === true) {
        ctx.beginPath();
        ctx.moveTo(point.x, yCriticalPoint || point.y);
        isStart = false;
      } else {
        ctx.lineTo(point.x, yCriticalPoint || point.y);
      }

      yCriticalPoint = NaN;
    });
    ctx.stroke();
  });
  ctx.restore();
};
/**
 * @name DrawTable
 * @type function
 * @Description
 * Draw Tics,
 * Default fontSize : 14px, textAlign : left, textBaseline : top,
 * Default fillAlpha : 0.5, fillColor : white, LineColor : #999999
 */


DrawHelper.DrawTable = function (ctx, font, graphRect, tableData) {
  var visible = tableData.visible,
      selectedTic = tableData.selectedTic,
      colors = tableData.colors,
      legends = tableData.legends,
      legendWidth = tableData.legendWidth,
      datas = tableData.datas;
  if (!visible || isNaN(selectedTic) || !colors || !legends || !legendWidth || !datas) return;
  var rectSize = 15;
  var margin = 4;
  ctx.save();
  ctx.font = "14px ".concat(font);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  var selectedTicData = datas[selectedTic];
  if (!selectedTicData || !selectedTicData.canvasPos) return;
  var tableRowPos = [];
  tableRowPos[0] = selectedTicData.canvasPos.y - (rectSize + margin * 2);

  for (var i = 1; i <= selectedTicData.length + 1; i++) {
    tableRowPos[i] = tableRowPos[i - 1] + (rectSize + margin * 2);
  }

  var tableColumnPos = [];
  tableColumnPos[0] = selectedTicData.canvasPos.x + 20;
  tableColumnPos[1] = tableColumnPos[0] + margin * 4 + rectSize + legendWidth;
  tableColumnPos[2] = tableColumnPos[1] + margin * 2 + selectedTicData.width;
  var centerPosX = (graphRect.x + graphRect.w) / 2;
  var tableWidth = tableColumnPos[2] - tableColumnPos[0];
  var tablePoint = null;

  if (selectedTicData.canvasPos.x > centerPosX) {
    tableColumnPos = tableColumnPos.map(function (pos) {
      return pos - tableWidth - 40;
    });
    tablePoint = {
      x: tableColumnPos[2],
      y: tableRowPos[0]
    };
  } else {
    tablePoint = {
      x: tableColumnPos[0],
      y: tableRowPos[0]
    };
  }

  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = 'white';
  ctx.fillRect(tableColumnPos[0], tableRowPos[0], tableColumnPos[2] - tableColumnPos[0], tableRowPos[selectedTicData.length + 1] - tableRowPos[0]);
  ctx.strokeStyle = '#999999';
  ctx.strokeRect(tableColumnPos[0], tableRowPos[0], tableColumnPos[2] - tableColumnPos[0], tableRowPos[selectedTicData.length + 1] - tableRowPos[0]);

  for (var _i = 1; _i <= selectedTicData.length; _i++) {
    ctx.beginPath();
    ctx.moveTo(tableColumnPos[0], tableRowPos[_i]);
    ctx.lineTo(tableColumnPos[2], tableRowPos[_i]);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(tableColumnPos[1], tableRowPos[1]);
  ctx.lineTo(tableColumnPos[1], tableRowPos[selectedTicData.length + 1]);
  ctx.stroke();
  ctx.restore();
  ctx.fillText("".concat(selectedTic), tableColumnPos[0] + margin, tableRowPos[0] + margin);

  for (var _i2 = 0; _i2 < selectedTicData.length; _i2++) {
    ctx.save();
    ctx.fillText("".concat(legends[_i2]), tableColumnPos[0] + rectSize + margin * 3, tableRowPos[_i2 + 1] + margin);
    ctx.fillText("".concat(selectedTicData[_i2].dataPos.toFixed(3)), tableColumnPos[1] + margin, tableRowPos[_i2 + 1] + margin);
    ctx.fillStyle = colors[_i2];
    ctx.fillRect(tableColumnPos[0] + margin, tableRowPos[_i2 + 1] + margin, rectSize, rectSize);

    if (selectedTicData[_i2].canvasPos >= graphRect.y && selectedTicData[_i2].canvasPos <= graphRect.y + graphRect.h) {
      ctx.beginPath();
      ctx.arc(selectedTicData.canvasPos.x, selectedTicData[_i2].canvasPos, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  ctx.restore();
};
/**
 * @name Draw
 * @type function
 * @Description
 * Default fontSize : 12px
 */


DrawHelper.Draw = function (ctx, drawData) {
  var font = drawData.font,
      title = drawData.title,
      legend = drawData.legend,
      border = drawData.border,
      axis = drawData.axis,
      grid = drawData.grid,
      tics = drawData.tics,
      lineDatas = drawData.lineDatas,
      legendDatas = drawData.legendDatas,
      tableData = drawData.tableData,
      canvasWidth = drawData.canvasWidth,
      canvasHeight = drawData.canvasHeight,
      graphRect = drawData.graphRect,
      legendRect = drawData.legendRect;
  ctx.font = "12px ".concat(font);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  DrawHelper.DrawTitle(ctx, font, title);
  DrawHelper.DrawBorder(ctx, graphRect, border);
  DrawHelper.DrawTics(ctx, graphRect.w, graphRect.h, tics);
  DrawHelper.DrawGrid(ctx, graphRect.w, graphRect.h, grid, tics);
  DrawHelper.DrawAxis(ctx, font, axis);
  DrawHelper.DrawLines(ctx, graphRect, lineDatas);
  DrawHelper.DrawLegends(ctx, font, legendRect, legendDatas);
  DrawHelper.DrawTable(ctx, font, graphRect, tableData);
};

/* harmony default export */ __webpack_exports__["default"] = (DrawHelper);

/***/ }),

/***/ "./src/view/osWorker.js":
/*!******************************!*\
  !*** ./src/view/osWorker.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawHelper */ "./src/view/drawHelper.js");


self.onmessage = (event) => {
  const { canvas, dpr, drawData } = event.data;
  if (canvas) {
    self.canvas = canvas;
    self.ctx = canvas.getContext('2d');
  }

  if (dpr) {
    self.ctx.scale(dpr, dpr);
  }

  if (drawData) {
    _drawHelper__WEBPACK_IMPORTED_MODULE_0__["default"].Draw(self.ctx, drawData);
  }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZHJhd0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9vc1dvcmtlci5qcyJdLCJuYW1lcyI6WyJEcmF3SGVscGVyIiwiRHJhd1RpdGxlIiwiY3R4IiwiZm9udCIsInRpdGxlIiwidGV4dCIsImNvbG9yIiwicG9zaXRpb24iLCJzYXZlIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJ4IiwieSIsInJlc3RvcmUiLCJEcmF3TGVnZW5kcyIsImxlZ2VuZFJlY3QiLCJsZWdlbmREYXRhcyIsInJlY3RTaXplIiwibWFyZ2luIiwiZm9yRWFjaCIsImxlZ2VuZERhdGEiLCJsZWdlbmQiLCJwb2ludCIsImZpbGxSZWN0IiwiRHJhd0F4aXMiLCJheGlzIiwieExhYmVsIiwieUxhYmVsIiwidmlzaWJsZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsIkRyYXdCb3JkZXIiLCJyZWN0IiwiYm9yZGVyIiwidHlwZSIsIndpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwidyIsImgiLCJEcmF3R3JpZCIsImhlaWdodCIsImdyaWQiLCJ0aWNzIiwieFRpY3MiLCJ5VGljcyIsInRpYyIsImluZGV4IiwiYXJyYXkiLCJsZW5ndGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJEcmF3VGljcyIsInRpY1NpemUiLCJ0aWNWYWx1ZU1hcmdpbiIsInlTdGFydCIsInlFbmQiLCJ2YWx1ZSIsInhTdGFydCIsInhFbmQiLCJEcmF3TGluZXMiLCJncmFwaFJlY3QiLCJsaW5lRGF0YXMiLCJyZWdpb24iLCJQYXRoMkQiLCJjbGlwIiwibGluZURhdGEiLCJwb2ludHMiLCJpc1N0YXJ0IiwieUNyaXRpY2FsUG9pbnQiLCJOYU4iLCJEcmF3VGFibGUiLCJ0YWJsZURhdGEiLCJzZWxlY3RlZFRpYyIsImNvbG9ycyIsImxlZ2VuZHMiLCJsZWdlbmRXaWR0aCIsImRhdGFzIiwiaXNOYU4iLCJzZWxlY3RlZFRpY0RhdGEiLCJjYW52YXNQb3MiLCJ0YWJsZVJvd1BvcyIsImkiLCJ0YWJsZUNvbHVtblBvcyIsImNlbnRlclBvc1giLCJ0YWJsZVdpZHRoIiwidGFibGVQb2ludCIsIm1hcCIsInBvcyIsImdsb2JhbEFscGhhIiwiZGF0YVBvcyIsInRvRml4ZWQiLCJhcmMiLCJmaWxsIiwiRHJhdyIsImRyYXdEYXRhIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjbGVhclJlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBLElBQU1BLFVBQVUsR0FBRyxFQUFuQjtBQUVBOzs7Ozs7OztBQU9BQSxVQUFVLENBQUNDLFNBQVgsR0FBdUIsVUFBVUMsR0FBVixFQUFlQyxJ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QUM2QyxRQUFYLENBQW9CM0MsR0FBcEIsRUFBeUJrRSxTQUFTLENBQUN6QixDQUFuQyxFQUFzQ3lCLFNBQVMsQ0FBQ3hCLENBQWhELEVBQW1ERyxJQUFuRCxFQUF5REMsSUFBekQ7QUFDQWhELFlBQVUsQ0FBQzBCLFFBQVgsQ0FBb0J4QixHQUFwQixFQUF5QkMsSUFBekIsRUFBK0J3QixJQUEvQjtBQUNBM0IsWUFBVSxDQUFDbUUsU0FBWCxDQUFxQmpFLEdBQXJCLEVBQTBCa0UsU0FBMUIsRUFBcUNDLFNBQXJDO0FBQ0FyRSxZQUFVLENBQUNnQixXQUFYLENBQXVCZCxHQUF2QixFQUE0QkMsSUFBNUIsRUFBa0NjLFVBQWxDLEVBQThDQyxXQUE5QztBQUNBbEIsWUFBVSxDQUFDOEUsU0FBWCxDQUFxQjVFLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQ2lFLFNBQWhDLEVBQTJDVyxTQUEzQztBQUNELENBM0JEOztBQTZCZS9FLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JYQTtBQUFBO0FBQXNDOztBQUV0QztBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBIiwiZmlsZSI6IlBsb3R0YURyYXcud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy92aWV3L29zV29ya2VyLmpzXCIpO1xuIiwiLyoqXG4gKiBAbmFtZSBEcmF3SGVscGVyXG4gKiBAdHlwZSBPYmplY3RcbiAqIEBtZXRob2QgRHJhd1xuICogQG1ldGhvZCBEcmF3VGl0bGVcbiAqIEBtZXRob2QgRHJhd0xlZ2VuZHNcbiAqIEBtZXRob2QgRHJhd0F4aXNcbiAqIEBtZXRob2QgRHJhd0JvcmRlclxuICogQG1ldGhvZCBEcmF3R3JpZFxuICogQG1ldGhvZCBEcmF3VGljc1xuICogQG1ldGhvZCBEcmF3TGluZXNcbiAqIEBtZXRob2QgRHJhd1RhYmxlXG4gKi9cblxuY29uc3QgRHJhd0hlbHBlciA9IHt9O1xuXG4vKipcbiAqIEBuYW1lIERyYXdUaXRsZVxuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRHJhdyBUaXRsZSxcbiAqIERlZmF1bHQgZm9udFNpemUgOiAyMHB4LCB0ZXh0QWxpZ24gOiBDZW50ZXIsIHRleHRCYXNlbGluZSA6IG1pZGRsZVxuICovXG5EcmF3SGVscGVyLkRyYXdUaXRsZSA9IGZ1bmN0aW9uIChjdHgsIGZvbnQsIHRpdGxlKSB7XG4gIGNvbnN0IHsgdGV4dCwgY29sb3IsIHBvc2l0aW9uIH0gPSB0aXRsZTtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZvbnQgPSBgMjBweCAke2ZvbnR9YDtcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gIGlmIChjb2xvcikgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjdHguZmlsbFRleHQodGV4dCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdMZWdlbmRzXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IExlZ2VuZHMsXG4gKiBEZWZhdWx0IGZvbnRTaXplIDogMTRweCwgdGV4dEFsaWduIDogTGVmdCwgdGV4dEJhc2VsaW5lIDogdG9wLCByZWN0U2l6ZSA6IDE1cHhcbiAqL1xuRHJhd0hlbHBlci5EcmF3TGVnZW5kcyA9IGZ1bmN0aW9uIChjdHgsIGZvbnQsIGxlZ2VuZFJlY3QsIGxlZ2VuZERhdGFzKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5mb250ID0gYDE0cHggJHtmb250fWA7XG4gIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgY29uc3QgcmVjdFNpemUgPSAxNTtcbiAgY29uc3QgbWFyZ2luID0gNTtcbiAgbGVnZW5kRGF0YXMuZm9yRWFjaCgobGVnZW5kRGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgY29sb3IsIGxlZ2VuZCwgcG9pbnQgfSA9IGxlZ2VuZERhdGE7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsbFRleHQobGVnZW5kLCBsZWdlbmRSZWN0LnggKyBwb2ludC54ICsgcmVjdFNpemUgKyBtYXJnaW4sIGxlZ2VuZFJlY3QueSArIHBvaW50LnkpO1xuICAgIGlmIChjb2xvcikgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdChsZWdlbmRSZWN0LnggKyBwb2ludC54LCBsZWdlbmRSZWN0LnkgKyBwb2ludC55LCByZWN0U2l6ZSwgcmVjdFNpemUpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0pO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3QXhpc1xuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRHJhdyBBeGlzLFxuICogRGVmYXVsdCBmb250U2l6ZSA6IDE0cHgsIHRleHRBbGlnbiA6IENlbnRlciwgdGV4dEJhc2VsaW5lIDogbWlkZGxlXG4gKi9cbkRyYXdIZWxwZXIuRHJhd0F4aXMgPSBmdW5jdGlvbiAoY3R4LCBmb250LCBheGlzKSB7XG4gIGNvbnN0IHsgeExhYmVsLCB5TGFiZWwgfSA9IGF4aXM7XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZvbnQgPSBgMTRweCAke2ZvbnR9YDtcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gIGlmICh4TGFiZWwudmlzaWJsZSkge1xuICAgIGlmICh4TGFiZWwuY29sb3IpIGN0eC5maWxsU3R5bGUgPSB4TGFiZWwuY29sb3I7XG4gICAgY3R4LmZpbGxUZXh0KHhMYWJlbC50ZXh0LCB4TGFiZWwucG9zaXRpb24ueCwgeExhYmVsLnBvc2l0aW9uLnkpO1xuICB9XG5cbiAgaWYgKHlMYWJlbC52aXNpYmxlKSB7XG4gICAgY3R4LnRyYW5zbGF0ZSh5TGFiZWwucG9zaXRpb24ueCwgeUxhYmVsLnBvc2l0aW9uLnkpO1xuICAgIGN0eC5yb3RhdGUoLTAuNSAqIE1hdGguUEkpO1xuICAgIGlmICh5TGFiZWwuY29sb3IpIGN0eC5maWxsU3R5bGUgPSB5TGFiZWwuY29sb3I7XG4gICAgY3R4LmZpbGxUZXh0KHlMYWJlbC50ZXh0LCAwLCAwKTtcbiAgfVxuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3Qm9yZGVyXG4gKiBAdHlwZSBmdW5jdGlvblxuICovXG5EcmF3SGVscGVyLkRyYXdCb3JkZXIgPSBmdW5jdGlvbiAoY3R4LCByZWN0LCBib3JkZXIpIHtcbiAgY29uc3Qge1xuICAgIHZpc2libGUsIHR5cGUsIGNvbG9yLCB3aWR0aFxuICB9ID0gYm9yZGVyO1xuXG4gIGlmICghdmlzaWJsZSkgcmV0dXJuO1xuXG4gIGN0eC5zYXZlKCk7XG4gIGlmIChjb2xvcikgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGlmICh3aWR0aCkgY3R4LmxpbmVXaWR0aCA9IHdpZHRoO1xuICBjdHguc3Ryb2tlUmVjdChyZWN0LngsIHJlY3QueSwgcmVjdC53LCByZWN0LmgpO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3R3JpZFxuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRHJhdyBHcmlkLFxuICogRGVmYXVsdCBsaW5lV2lkdGggOiAwLjNweFxuICovXG5EcmF3SGVscGVyLkRyYXdHcmlkID0gZnVuY3Rpb24gKGN0eCwgd2lkdGgsIGhlaWdodCwgZ3JpZCwgdGljcykge1xuICBjb25zdCB7IHhUaWNzLCB5VGljcyB9ID0gdGljcztcbiAgY29uc3QgeyB2aXNpYmxlLCB0eXBlLCBjb2xvciB9ID0gZ3JpZDtcbiAgaWYgKCF2aXNpYmxlKSByZXR1cm47XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eC5saW5lV2lkdGggPSAwLjM7XG5cbiAgeFRpY3MuZm9yRWFjaCgodGljLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IGFycmF5Lmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aWMueCwgdGljLnkpO1xuICAgIGN0eC5saW5lVG8odGljLngsIHRpYy55IC0gaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0pO1xuICB5VGljcy5mb3JFYWNoKCh0aWMsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRpYy54LCB0aWMueSk7XG4gICAgY3R4LmxpbmVUbyh0aWMueCArIHdpZHRoLCB0aWMueSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd1RpY3NcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgVGljcyxcbiAqIERlZmF1bHQgbGluZVdpZHRoIDogMC4zcHgsIHRleHRBbGlnbiA6IGNlbnRlciwgdGV4dEJhc2VsaW5lIDogbWlkZGxlLCB0aWNTaXplIDogMTBweFxuICovXG5EcmF3SGVscGVyLkRyYXdUaWNzID0gZnVuY3Rpb24gKGN0eCwgd2lkdGgsIGhlaWdodCwgdGljcykge1xuICBjb25zdCB7XG4gICAgdmlzaWJsZSwgY29sb3IsIHhUaWNzLCB5VGljc1xuICB9ID0gdGljcztcblxuICBpZiAoIXZpc2libGUpIHJldHVybjtcblxuICBjb25zdCB0aWNTaXplID0gMTA7XG4gIGNvbnN0IHRpY1ZhbHVlTWFyZ2luID0gMTU7XG5cbiAgY3R4LnNhdmUoKTtcbiAgaWYgKGNvbG9yKSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB9XG4gIGN0eC5saW5lV2lkdGggPSAwLjM7XG4gIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuXG4gIHhUaWNzLmZvckVhY2goKHRpYywgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgY29uc3QgeVN0YXJ0ID0gdGljLnkgKyB0aWNTaXplO1xuICAgIGxldCB5RW5kO1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgeUVuZCA9IHRpYy55IC0gaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB5RW5kID0gdGljLnk7XG4gICAgfVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRpYy54LCB5U3RhcnQpO1xuICAgIGN0eC5saW5lVG8odGljLngsIHlFbmQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbFRleHQodGljLnZhbHVlLCB0aWMueCwgdGljLnkgKyB0aWNTaXplICsgdGljVmFsdWVNYXJnaW4pO1xuICB9KTtcbiAgeVRpY3MuZm9yRWFjaCgodGljLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICBjb25zdCB4U3RhcnQgPSB0aWMueCAtIHRpY1NpemU7XG4gICAgbGV0IHhFbmQ7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB4RW5kID0gdGljLnggKyB3aWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeEVuZCA9IHRpYy54O1xuICAgIH1cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4U3RhcnQsIHRpYy55KTtcbiAgICBjdHgubGluZVRvKHhFbmQsIHRpYy55KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZpbGxUZXh0KHRpYy52YWx1ZSwgdGljLnggLSB0aWNTaXplIC0gdGljVmFsdWVNYXJnaW4sIHRpYy55KTtcbiAgfSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdMaW5lc1xuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRHJhdyBUaWNzLFxuICogRGVmYXVsdCBsaW5lV2lkdGggOiAzcHhcbiAqIEBUb2RvIEFkZCBMaW5lU3R5bGVcbiAqL1xuRHJhd0hlbHBlci5EcmF3TGluZXMgPSBmdW5jdGlvbiAoY3R4LCBncmFwaFJlY3QsIGxpbmVEYXRhcykge1xuICBjdHguc2F2ZSgpO1xuICBjdHgubGluZVdpZHRoID0gMztcbiAgY29uc3QgcmVnaW9uID0gbmV3IFBhdGgyRCgpO1xuICByZWdpb24ucmVjdChncmFwaFJlY3QueCwgZ3JhcGhSZWN0LnksIGdyYXBoUmVjdC53LCBncmFwaFJlY3QuaCk7XG4gIGN0eC5jbGlwKHJlZ2lvbiwgJ2V2ZW5vZGQnKTtcbiAgbGluZURhdGFzLmZvckVhY2goKGxpbmVEYXRhKSA9PiB7XG4gICAgY29uc3QgeyBwb2ludHMsIGNvbG9yIH0gPSBsaW5lRGF0YTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBsZXQgaXNTdGFydCA9IHRydWU7XG4gICAgbGV0IHlDcml0aWNhbFBvaW50ID0gcG9pbnRzWzBdLnk7XG4gICAgcG9pbnRzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBvaW50LnkgPCBncmFwaFJlY3QueSkge1xuICAgICAgICB5Q3JpdGljYWxQb2ludCA9IGdyYXBoUmVjdC55IC0gNTtcbiAgICAgIH0gZWxzZSBpZiAocG9pbnQueSA+IGdyYXBoUmVjdC55ICsgZ3JhcGhSZWN0LmgpIHtcbiAgICAgICAgeUNyaXRpY2FsUG9pbnQgPSBncmFwaFJlY3QueSArIGdyYXBoUmVjdC5oICsgNTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RhcnQgPT09IHRydWUpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHBvaW50LngsIHlDcml0aWNhbFBvaW50IHx8IHBvaW50LnkpO1xuICAgICAgICBpc1N0YXJ0ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHgubGluZVRvKHBvaW50LngsIHlDcml0aWNhbFBvaW50IHx8IHBvaW50LnkpO1xuICAgICAgfVxuICAgICAgeUNyaXRpY2FsUG9pbnQgPSBOYU47XG4gICAgfSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd1RhYmxlXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IFRpY3MsXG4gKiBEZWZhdWx0IGZvbnRTaXplIDogMTRweCwgdGV4dEFsaWduIDogbGVmdCwgdGV4dEJhc2VsaW5lIDogdG9wLFxuICogRGVmYXVsdCBmaWxsQWxwaGEgOiAwLjUsIGZpbGxDb2xvciA6IHdoaXRlLCBMaW5lQ29sb3IgOiAjOTk5OTk5XG4gKi9cbkRyYXdIZWxwZXIuRHJhd1RhYmxlID0gZnVuY3Rpb24gKGN0eCwgZm9udCwgZ3JhcGhSZWN0LCB0YWJsZURhdGEpIHtcbiAgY29uc3Qge1xuICAgIHZpc2libGUsIHNlbGVjdGVkVGljLCBjb2xvcnMsIGxlZ2VuZHMsIGxlZ2VuZFdpZHRoLCBkYXRhc1xuICB9ID0gdGFibGVEYXRhO1xuXG4gIGlmICghdmlzaWJsZSB8fCBpc05hTihzZWxlY3RlZFRpYykgfHwgIWNvbG9ycyB8fCAhbGVnZW5kcyB8fCAhbGVnZW5kV2lkdGggfHwgIWRhdGFzKSByZXR1cm47XG5cbiAgY29uc3QgcmVjdFNpemUgPSAxNTtcbiAgY29uc3QgbWFyZ2luID0gNDtcblxuICBjdHguc2F2ZSgpO1xuICBjdHguZm9udCA9IGAxNHB4ICR7Zm9udH1gO1xuICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cbiAgY29uc3Qgc2VsZWN0ZWRUaWNEYXRhID0gZGF0YXNbc2VsZWN0ZWRUaWNdO1xuICBpZiAoIXNlbGVjdGVkVGljRGF0YSB8fCAhc2VsZWN0ZWRUaWNEYXRhLmNhbnZhc1BvcykgcmV0dXJuO1xuXG4gIGNvbnN0IHRhYmxlUm93UG9zID0gW107XG4gIHRhYmxlUm93UG9zWzBdID0gc2VsZWN0ZWRUaWNEYXRhLmNhbnZhc1Bvcy55IC0gKHJlY3RTaXplICsgbWFyZ2luICogMik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNlbGVjdGVkVGljRGF0YS5sZW5ndGggKyAxOyBpKyspIHtcbiAgICB0YWJsZVJvd1Bvc1tpXSA9IHRhYmxlUm93UG9zW2kgLSAxXSArIChyZWN0U2l6ZSArIG1hcmdpbiAqIDIpO1xuICB9XG4gIGxldCB0YWJsZUNvbHVtblBvcyA9IFtdO1xuICB0YWJsZUNvbHVtblBvc1swXSA9IHNlbGVjdGVkVGljRGF0YS5jYW52YXNQb3MueCArIDIwO1xuICB0YWJsZUNvbHVtblBvc1sxXSA9IHRhYmxlQ29sdW1uUG9zWzBdICsgbWFyZ2luICogNCArIHJlY3RTaXplICsgbGVnZW5kV2lkdGg7XG4gIHRhYmxlQ29sdW1uUG9zWzJdID0gdGFibGVDb2x1bW5Qb3NbMV0gKyBtYXJnaW4gKiAyICsgc2VsZWN0ZWRUaWNEYXRhLndpZHRoO1xuXG4gIGNvbnN0IGNlbnRlclBvc1ggPSAoZ3JhcGhSZWN0LnggKyBncmFwaFJlY3QudykgLyAyO1xuICBjb25zdCB0YWJsZVdpZHRoID0gdGFibGVDb2x1bW5Qb3NbMl0gLSB0YWJsZUNvbHVtblBvc1swXTtcbiAgbGV0IHRhYmxlUG9pbnQgPSBudWxsO1xuICBpZiAoc2VsZWN0ZWRUaWNEYXRhLmNhbnZhc1Bvcy54ID4gY2VudGVyUG9zWCkge1xuICAgIHRhYmxlQ29sdW1uUG9zID0gdGFibGVDb2x1bW5Qb3MubWFwKHBvcyA9PiBwb3MgLSB0YWJsZVdpZHRoIC0gNDApO1xuICAgIHRhYmxlUG9pbnQgPSB7IHg6IHRhYmxlQ29sdW1uUG9zWzJdLCB5OiB0YWJsZVJvd1Bvc1swXSB9O1xuICB9IGVsc2Uge1xuICAgIHRhYmxlUG9pbnQgPSB7IHg6IHRhYmxlQ29sdW1uUG9zWzBdLCB5OiB0YWJsZVJvd1Bvc1swXSB9O1xuICB9XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgY3R4LmZpbGxSZWN0KFxuICAgIHRhYmxlQ29sdW1uUG9zWzBdLFxuICAgIHRhYmxlUm93UG9zWzBdLFxuICAgIHRhYmxlQ29sdW1uUG9zWzJdIC0gdGFibGVDb2x1bW5Qb3NbMF0sXG4gICAgdGFibGVSb3dQb3Nbc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aCArIDFdIC0gdGFibGVSb3dQb3NbMF1cbiAgKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyM5OTk5OTknO1xuICBjdHguc3Ryb2tlUmVjdChcbiAgICB0YWJsZUNvbHVtblBvc1swXSxcbiAgICB0YWJsZVJvd1Bvc1swXSxcbiAgICB0YWJsZUNvbHVtblBvc1syXSAtIHRhYmxlQ29sdW1uUG9zWzBdLFxuICAgIHRhYmxlUm93UG9zW3NlbGVjdGVkVGljRGF0YS5sZW5ndGggKyAxXSAtIHRhYmxlUm93UG9zWzBdXG4gICk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNlbGVjdGVkVGljRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRhYmxlQ29sdW1uUG9zWzBdLCB0YWJsZVJvd1Bvc1tpXSk7XG4gICAgY3R4LmxpbmVUbyh0YWJsZUNvbHVtblBvc1syXSwgdGFibGVSb3dQb3NbaV0pO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8odGFibGVDb2x1bW5Qb3NbMV0sIHRhYmxlUm93UG9zWzFdKTtcbiAgY3R4LmxpbmVUbyh0YWJsZUNvbHVtblBvc1sxXSwgdGFibGVSb3dQb3Nbc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aCArIDFdKTtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHgucmVzdG9yZSgpO1xuXG4gIGN0eC5maWxsVGV4dChgJHtzZWxlY3RlZFRpY31gLCB0YWJsZUNvbHVtblBvc1swXSArIG1hcmdpbiwgdGFibGVSb3dQb3NbMF0gKyBtYXJnaW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkVGljRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgYCR7bGVnZW5kc1tpXX1gLFxuICAgICAgdGFibGVDb2x1bW5Qb3NbMF0gKyByZWN0U2l6ZSArIG1hcmdpbiAqIDMsXG4gICAgICB0YWJsZVJvd1Bvc1tpICsgMV0gKyBtYXJnaW5cbiAgICApO1xuICAgIGN0eC5maWxsVGV4dChcbiAgICAgIGAke3NlbGVjdGVkVGljRGF0YVtpXS5kYXRhUG9zLnRvRml4ZWQoMyl9YCxcbiAgICAgIHRhYmxlQ29sdW1uUG9zWzFdICsgbWFyZ2luLFxuICAgICAgdGFibGVSb3dQb3NbaSArIDFdICsgbWFyZ2luXG4gICAgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW2ldO1xuICAgIGN0eC5maWxsUmVjdCh0YWJsZUNvbHVtblBvc1swXSArIG1hcmdpbiwgdGFibGVSb3dQb3NbaSArIDFdICsgbWFyZ2luLCByZWN0U2l6ZSwgcmVjdFNpemUpO1xuXG4gICAgaWYgKFxuICAgICAgc2VsZWN0ZWRUaWNEYXRhW2ldLmNhbnZhc1BvcyA+PSBncmFwaFJlY3QueVxuICAgICAgJiYgc2VsZWN0ZWRUaWNEYXRhW2ldLmNhbnZhc1BvcyA8PSBncmFwaFJlY3QueSArIGdyYXBoUmVjdC5oXG4gICAgKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKHNlbGVjdGVkVGljRGF0YS5jYW52YXNQb3MueCwgc2VsZWN0ZWRUaWNEYXRhW2ldLmNhbnZhc1BvcywgNCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3XG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEZWZhdWx0IGZvbnRTaXplIDogMTJweFxuICovXG5EcmF3SGVscGVyLkRyYXcgPSBmdW5jdGlvbiAoY3R4LCBkcmF3RGF0YSkge1xuICBjb25zdCB7XG4gICAgZm9udCxcbiAgICB0aXRsZSxcbiAgICBsZWdlbmQsXG4gICAgYm9yZGVyLFxuICAgIGF4aXMsXG4gICAgZ3JpZCxcbiAgICB0aWNzLFxuICAgIGxpbmVEYXRhcyxcbiAgICBsZWdlbmREYXRhcyxcbiAgICB0YWJsZURhdGEsXG4gICAgY2FudmFzV2lkdGgsXG4gICAgY2FudmFzSGVpZ2h0LFxuICAgIGdyYXBoUmVjdCxcbiAgICBsZWdlbmRSZWN0XG4gIH0gPSBkcmF3RGF0YTtcbiAgY3R4LmZvbnQgPSBgMTJweCAke2ZvbnR9YDtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcbiAgRHJhd0hlbHBlci5EcmF3VGl0bGUoY3R4LCBmb250LCB0aXRsZSk7XG4gIERyYXdIZWxwZXIuRHJhd0JvcmRlcihjdHgsIGdyYXBoUmVjdCwgYm9yZGVyKTtcbiAgRHJhd0hlbHBlci5EcmF3VGljcyhjdHgsIGdyYXBoUmVjdC53LCBncmFwaFJlY3QuaCwgdGljcyk7XG4gIERyYXdIZWxwZXIuRHJhd0dyaWQoY3R4LCBncmFwaFJlY3QudywgZ3JhcGhSZWN0LmgsIGdyaWQsIHRpY3MpO1xuICBEcmF3SGVscGVyLkRyYXdBeGlzKGN0eCwgZm9udCwgYXhpcyk7XG4gIERyYXdIZWxwZXIuRHJhd0xpbmVzKGN0eCwgZ3JhcGhSZWN0LCBsaW5lRGF0YXMpO1xuICBEcmF3SGVscGVyLkRyYXdMZWdlbmRzKGN0eCwgZm9udCwgbGVnZW5kUmVjdCwgbGVnZW5kRGF0YXMpO1xuICBEcmF3SGVscGVyLkRyYXdUYWJsZShjdHgsIGZvbnQsIGdyYXBoUmVjdCwgdGFibGVEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdIZWxwZXI7XG4iLCJpbXBvcnQgRHJhd0hlbHBlciBmcm9tICcuL2RyYXdIZWxwZXInO1xuXG5zZWxmLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IGNhbnZhcywgZHByLCBkcmF3RGF0YSB9ID0gZXZlbnQuZGF0YTtcbiAgaWYgKGNhbnZhcykge1xuICAgIHNlbGYuY2FudmFzID0gY2FudmFzO1xuICAgIHNlbGYuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIH1cblxuICBpZiAoZHByKSB7XG4gICAgc2VsZi5jdHguc2NhbGUoZHByLCBkcHIpO1xuICB9XG5cbiAgaWYgKGRyYXdEYXRhKSB7XG4gICAgRHJhd0hlbHBlci5EcmF3KHNlbGYuY3R4LCBkcmF3RGF0YSk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9