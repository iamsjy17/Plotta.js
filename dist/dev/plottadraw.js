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
/******/ 	__webpack_require__.p = "./dist/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZHJhd0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9vc1dvcmtlci5qcyJdLCJuYW1lcyI6WyJEcmF3SGVscGVyIiwiRHJhd1RpdGxlIiwiY3R4IiwiZm9udCIsInRpdGxlIiwidGV4dCIsImNvbG9yIiwicG9zaXRpb24iLCJzYXZlIiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJ4IiwieSIsInJlc3RvcmUiLCJEcmF3TGVnZW5kcyIsImxlZ2VuZFJlY3QiLCJsZWdlbmREYXRhcyIsInJlY3RTaXplIiwibWFyZ2luIiwiZm9yRWFjaCIsImxlZ2VuZERhdGEiLCJsZWdlbmQiLCJwb2ludCIsImZpbGxSZWN0IiwiRHJhd0F4aXMiLCJheGlzIiwieExhYmVsIiwieUxhYmVsIiwidmlzaWJsZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsIkRyYXdCb3JkZXIiLCJyZWN0IiwiYm9yZGVyIiwidHlwZSIsIndpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwidyIsImgiLCJEcmF3R3JpZCIsImhlaWdodCIsImdyaWQiLCJ0aWNzIiwieFRpY3MiLCJ5VGljcyIsInRpYyIsImluZGV4IiwiYXJyYXkiLCJsZW5ndGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJEcmF3VGljcyIsInRpY1NpemUiLCJ0aWNWYWx1ZU1hcmdpbiIsInlTdGFydCIsInlFbmQiLCJ2YWx1ZSIsInhTdGFydCIsInhFbmQiLCJEcmF3TGluZXMiLCJncmFwaFJlY3QiLCJsaW5lRGF0YXMiLCJyZWdpb24iLCJQYXRoMkQiLCJjbGlwIiwibGluZURhdGEiLCJwb2ludHMiLCJpc1N0YXJ0IiwieUNyaXRpY2FsUG9pbnQiLCJOYU4iLCJEcmF3VGFibGUiLCJ0YWJsZURhdGEiLCJzZWxlY3RlZFRpYyIsImNvbG9ycyIsImxlZ2VuZHMiLCJsZWdlbmRXaWR0aCIsImRhdGFzIiwiaXNOYU4iLCJzZWxlY3RlZFRpY0RhdGEiLCJjYW52YXNQb3MiLCJ0YWJsZVJvd1BvcyIsImkiLCJ0YWJsZUNvbHVtblBvcyIsImNlbnRlclBvc1giLCJ0YWJsZVdpZHRoIiwidGFibGVQb2ludCIsIm1hcCIsInBvcyIsImdsb2JhbEFscGhhIiwiZGF0YVBvcyIsInRvRml4ZWQiLCJhcmMiLCJmaWxsIiwiRHJhdyIsImRyYXdEYXRhIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJjbGVhclJlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBLElBQU1BLFVBQVUsR0FBRyxFQUFuQjtBQUVBOzs7Ozs7OztBQU9BQSxVQUFVLENBQUNDLFNBQVgsR0FBdUIsVUFBVUMsR0FBVixFQUFlQyxJ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QUM2QyxRQUFYLENBQW9CM0MsR0FBcEIsRUFBeUJrRSxTQUFTLENBQUN6QixDQUFuQyxFQUFzQ3lCLFNBQVMsQ0FBQ3hCLENBQWhELEVBQW1ERyxJQUFuRCxFQUF5REMsSUFBekQ7QUFDQWhELFlBQVUsQ0FBQzBCLFFBQVgsQ0FBb0J4QixHQUFwQixFQUF5QkMsSUFBekIsRUFBK0J3QixJQUEvQjtBQUNBM0IsWUFBVSxDQUFDbUUsU0FBWCxDQUFxQmpFLEdBQXJCLEVBQTBCa0UsU0FBMUIsRUFBcUNDLFNBQXJDO0FBQ0FyRSxZQUFVLENBQUNnQixXQUFYLENBQXVCZCxHQUF2QixFQUE0QkMsSUFBNUIsRUFBa0NjLFVBQWxDLEVBQThDQyxXQUE5QztBQUNBbEIsWUFBVSxDQUFDOEUsU0FBWCxDQUFxQjVFLEdBQXJCLEVBQTBCQyxJQUExQixFQUFnQ2lFLFNBQWhDLEVBQTJDVyxTQUEzQztBQUNELENBM0JEOztBQTZCZS9FLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JYQTtBQUFBO0FBQXNDOztBQUV0QztBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBIiwiZmlsZSI6InBsb3R0YWRyYXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdmlldy9vc1dvcmtlci5qc1wiKTtcbiIsIi8qKlxuICogQG5hbWUgRHJhd0hlbHBlclxuICogQHR5cGUgT2JqZWN0XG4gKiBAbWV0aG9kIERyYXdcbiAqIEBtZXRob2QgRHJhd1RpdGxlXG4gKiBAbWV0aG9kIERyYXdMZWdlbmRzXG4gKiBAbWV0aG9kIERyYXdBeGlzXG4gKiBAbWV0aG9kIERyYXdCb3JkZXJcbiAqIEBtZXRob2QgRHJhd0dyaWRcbiAqIEBtZXRob2QgRHJhd1RpY3NcbiAqIEBtZXRob2QgRHJhd0xpbmVzXG4gKiBAbWV0aG9kIERyYXdUYWJsZVxuICovXG5cbmNvbnN0IERyYXdIZWxwZXIgPSB7fTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3VGl0bGVcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgVGl0bGUsXG4gKiBEZWZhdWx0IGZvbnRTaXplIDogMjBweCwgdGV4dEFsaWduIDogQ2VudGVyLCB0ZXh0QmFzZWxpbmUgOiBtaWRkbGVcbiAqL1xuRHJhd0hlbHBlci5EcmF3VGl0bGUgPSBmdW5jdGlvbiAoY3R4LCBmb250LCB0aXRsZSkge1xuICBjb25zdCB7IHRleHQsIGNvbG9yLCBwb3NpdGlvbiB9ID0gdGl0bGU7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5mb250ID0gYDIwcHggJHtmb250fWA7XG4gIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICBpZiAoY29sb3IpIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3TGVnZW5kc1xuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRHJhdyBMZWdlbmRzLFxuICogRGVmYXVsdCBmb250U2l6ZSA6IDE0cHgsIHRleHRBbGlnbiA6IExlZnQsIHRleHRCYXNlbGluZSA6IHRvcCwgcmVjdFNpemUgOiAxNXB4XG4gKi9cbkRyYXdIZWxwZXIuRHJhd0xlZ2VuZHMgPSBmdW5jdGlvbiAoY3R4LCBmb250LCBsZWdlbmRSZWN0LCBsZWdlbmREYXRhcykge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZm9udCA9IGAxNHB4ICR7Zm9udH1gO1xuICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gIGNvbnN0IHJlY3RTaXplID0gMTU7XG4gIGNvbnN0IG1hcmdpbiA9IDU7XG4gIGxlZ2VuZERhdGFzLmZvckVhY2goKGxlZ2VuZERhdGEpID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCBsZWdlbmQsIHBvaW50IH0gPSBsZWdlbmREYXRhO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmZpbGxUZXh0KGxlZ2VuZCwgbGVnZW5kUmVjdC54ICsgcG9pbnQueCArIHJlY3RTaXplICsgbWFyZ2luLCBsZWdlbmRSZWN0LnkgKyBwb2ludC55KTtcbiAgICBpZiAoY29sb3IpIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QobGVnZW5kUmVjdC54ICsgcG9pbnQueCwgbGVnZW5kUmVjdC55ICsgcG9pbnQueSwgcmVjdFNpemUsIHJlY3RTaXplKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd0F4aXNcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgQXhpcyxcbiAqIERlZmF1bHQgZm9udFNpemUgOiAxNHB4LCB0ZXh0QWxpZ24gOiBDZW50ZXIsIHRleHRCYXNlbGluZSA6IG1pZGRsZVxuICovXG5EcmF3SGVscGVyLkRyYXdBeGlzID0gZnVuY3Rpb24gKGN0eCwgZm9udCwgYXhpcykge1xuICBjb25zdCB7IHhMYWJlbCwgeUxhYmVsIH0gPSBheGlzO1xuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5mb250ID0gYDE0cHggJHtmb250fWA7XG4gIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICBpZiAoeExhYmVsLnZpc2libGUpIHtcbiAgICBpZiAoeExhYmVsLmNvbG9yKSBjdHguZmlsbFN0eWxlID0geExhYmVsLmNvbG9yO1xuICAgIGN0eC5maWxsVGV4dCh4TGFiZWwudGV4dCwgeExhYmVsLnBvc2l0aW9uLngsIHhMYWJlbC5wb3NpdGlvbi55KTtcbiAgfVxuXG4gIGlmICh5TGFiZWwudmlzaWJsZSkge1xuICAgIGN0eC50cmFuc2xhdGUoeUxhYmVsLnBvc2l0aW9uLngsIHlMYWJlbC5wb3NpdGlvbi55KTtcbiAgICBjdHgucm90YXRlKC0wLjUgKiBNYXRoLlBJKTtcbiAgICBpZiAoeUxhYmVsLmNvbG9yKSBjdHguZmlsbFN0eWxlID0geUxhYmVsLmNvbG9yO1xuICAgIGN0eC5maWxsVGV4dCh5TGFiZWwudGV4dCwgMCwgMCk7XG4gIH1cbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd0JvcmRlclxuICogQHR5cGUgZnVuY3Rpb25cbiAqL1xuRHJhd0hlbHBlci5EcmF3Qm9yZGVyID0gZnVuY3Rpb24gKGN0eCwgcmVjdCwgYm9yZGVyKSB7XG4gIGNvbnN0IHtcbiAgICB2aXNpYmxlLCB0eXBlLCBjb2xvciwgd2lkdGhcbiAgfSA9IGJvcmRlcjtcblxuICBpZiAoIXZpc2libGUpIHJldHVybjtcblxuICBjdHguc2F2ZSgpO1xuICBpZiAoY29sb3IpIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBpZiAod2lkdGgpIGN0eC5saW5lV2lkdGggPSB3aWR0aDtcbiAgY3R4LnN0cm9rZVJlY3QocmVjdC54LCByZWN0LnksIHJlY3QudywgcmVjdC5oKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd0dyaWRcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgR3JpZCxcbiAqIERlZmF1bHQgbGluZVdpZHRoIDogMC4zcHhcbiAqL1xuRHJhd0hlbHBlci5EcmF3R3JpZCA9IGZ1bmN0aW9uIChjdHgsIHdpZHRoLCBoZWlnaHQsIGdyaWQsIHRpY3MpIHtcbiAgY29uc3QgeyB4VGljcywgeVRpY3MgfSA9IHRpY3M7XG4gIGNvbnN0IHsgdmlzaWJsZSwgdHlwZSwgY29sb3IgfSA9IGdyaWQ7XG4gIGlmICghdmlzaWJsZSkgcmV0dXJuO1xuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBjdHgubGluZVdpZHRoID0gMC4zO1xuXG4gIHhUaWNzLmZvckVhY2goKHRpYywgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBhcnJheS5sZW5ndGggLSAxKSByZXR1cm47XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGljLngsIHRpYy55KTtcbiAgICBjdHgubGluZVRvKHRpYy54LCB0aWMueSAtIGhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9KTtcbiAgeVRpY3MuZm9yRWFjaCgodGljLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IGFycmF5Lmxlbmd0aCAtIDEpIHJldHVybjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aWMueCwgdGljLnkpO1xuICAgIGN0eC5saW5lVG8odGljLnggKyB3aWR0aCwgdGljLnkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdUaWNzXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IFRpY3MsXG4gKiBEZWZhdWx0IGxpbmVXaWR0aCA6IDAuM3B4LCB0ZXh0QWxpZ24gOiBjZW50ZXIsIHRleHRCYXNlbGluZSA6IG1pZGRsZSwgdGljU2l6ZSA6IDEwcHhcbiAqL1xuRHJhd0hlbHBlci5EcmF3VGljcyA9IGZ1bmN0aW9uIChjdHgsIHdpZHRoLCBoZWlnaHQsIHRpY3MpIHtcbiAgY29uc3Qge1xuICAgIHZpc2libGUsIGNvbG9yLCB4VGljcywgeVRpY3NcbiAgfSA9IHRpY3M7XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm47XG5cbiAgY29uc3QgdGljU2l6ZSA9IDEwO1xuICBjb25zdCB0aWNWYWx1ZU1hcmdpbiA9IDE1O1xuXG4gIGN0eC5zYXZlKCk7XG4gIGlmIChjb2xvcikge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgfVxuICBjdHgubGluZVdpZHRoID0gMC4zO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcblxuICB4VGljcy5mb3JFYWNoKCh0aWMsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IHlTdGFydCA9IHRpYy55ICsgdGljU2l6ZTtcbiAgICBsZXQgeUVuZDtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHlFbmQgPSB0aWMueSAtIGhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgeUVuZCA9IHRpYy55O1xuICAgIH1cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aWMueCwgeVN0YXJ0KTtcbiAgICBjdHgubGluZVRvKHRpYy54LCB5RW5kKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZpbGxUZXh0KHRpYy52YWx1ZSwgdGljLngsIHRpYy55ICsgdGljU2l6ZSArIHRpY1ZhbHVlTWFyZ2luKTtcbiAgfSk7XG4gIHlUaWNzLmZvckVhY2goKHRpYywgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgY29uc3QgeFN0YXJ0ID0gdGljLnggLSB0aWNTaXplO1xuICAgIGxldCB4RW5kO1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgeEVuZCA9IHRpYy54ICsgd2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHhFbmQgPSB0aWMueDtcbiAgICB9XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeFN0YXJ0LCB0aWMueSk7XG4gICAgY3R4LmxpbmVUbyh4RW5kLCB0aWMueSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5maWxsVGV4dCh0aWMudmFsdWUsIHRpYy54IC0gdGljU2l6ZSAtIHRpY1ZhbHVlTWFyZ2luLCB0aWMueSk7XG4gIH0pO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3TGluZXNcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgVGljcyxcbiAqIERlZmF1bHQgbGluZVdpZHRoIDogM3B4XG4gKiBAVG9kbyBBZGQgTGluZVN0eWxlXG4gKi9cbkRyYXdIZWxwZXIuRHJhd0xpbmVzID0gZnVuY3Rpb24gKGN0eCwgZ3JhcGhSZWN0LCBsaW5lRGF0YXMpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gIGNvbnN0IHJlZ2lvbiA9IG5ldyBQYXRoMkQoKTtcbiAgcmVnaW9uLnJlY3QoZ3JhcGhSZWN0LngsIGdyYXBoUmVjdC55LCBncmFwaFJlY3QudywgZ3JhcGhSZWN0LmgpO1xuICBjdHguY2xpcChyZWdpb24sICdldmVub2RkJyk7XG4gIGxpbmVEYXRhcy5mb3JFYWNoKChsaW5lRGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgcG9pbnRzLCBjb2xvciB9ID0gbGluZURhdGE7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgbGV0IGlzU3RhcnQgPSB0cnVlO1xuICAgIGxldCB5Q3JpdGljYWxQb2ludCA9IHBvaW50c1swXS55O1xuICAgIHBvaW50cy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwb2ludC55IDwgZ3JhcGhSZWN0LnkpIHtcbiAgICAgICAgeUNyaXRpY2FsUG9pbnQgPSBncmFwaFJlY3QueSAtIDU7XG4gICAgICB9IGVsc2UgaWYgKHBvaW50LnkgPiBncmFwaFJlY3QueSArIGdyYXBoUmVjdC5oKSB7XG4gICAgICAgIHlDcml0aWNhbFBvaW50ID0gZ3JhcGhSZWN0LnkgKyBncmFwaFJlY3QuaCArIDU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0YXJ0ID09PSB0cnVlKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludC54LCB5Q3JpdGljYWxQb2ludCB8fCBwb2ludC55KTtcbiAgICAgICAgaXNTdGFydCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludC54LCB5Q3JpdGljYWxQb2ludCB8fCBwb2ludC55KTtcbiAgICAgIH1cbiAgICAgIHlDcml0aWNhbFBvaW50ID0gTmFOO1xuICAgIH0pO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdUYWJsZVxuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRHJhdyBUaWNzLFxuICogRGVmYXVsdCBmb250U2l6ZSA6IDE0cHgsIHRleHRBbGlnbiA6IGxlZnQsIHRleHRCYXNlbGluZSA6IHRvcCxcbiAqIERlZmF1bHQgZmlsbEFscGhhIDogMC41LCBmaWxsQ29sb3IgOiB3aGl0ZSwgTGluZUNvbG9yIDogIzk5OTk5OVxuICovXG5EcmF3SGVscGVyLkRyYXdUYWJsZSA9IGZ1bmN0aW9uIChjdHgsIGZvbnQsIGdyYXBoUmVjdCwgdGFibGVEYXRhKSB7XG4gIGNvbnN0IHtcbiAgICB2aXNpYmxlLCBzZWxlY3RlZFRpYywgY29sb3JzLCBsZWdlbmRzLCBsZWdlbmRXaWR0aCwgZGF0YXNcbiAgfSA9IHRhYmxlRGF0YTtcblxuICBpZiAoIXZpc2libGUgfHwgaXNOYU4oc2VsZWN0ZWRUaWMpIHx8ICFjb2xvcnMgfHwgIWxlZ2VuZHMgfHwgIWxlZ2VuZFdpZHRoIHx8ICFkYXRhcykgcmV0dXJuO1xuXG4gIGNvbnN0IHJlY3RTaXplID0gMTU7XG4gIGNvbnN0IG1hcmdpbiA9IDQ7XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZvbnQgPSBgMTRweCAke2ZvbnR9YDtcbiAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuXG4gIGNvbnN0IHNlbGVjdGVkVGljRGF0YSA9IGRhdGFzW3NlbGVjdGVkVGljXTtcbiAgaWYgKCFzZWxlY3RlZFRpY0RhdGEgfHwgIXNlbGVjdGVkVGljRGF0YS5jYW52YXNQb3MpIHJldHVybjtcblxuICBjb25zdCB0YWJsZVJvd1BvcyA9IFtdO1xuICB0YWJsZVJvd1Bvc1swXSA9IHNlbGVjdGVkVGljRGF0YS5jYW52YXNQb3MueSAtIChyZWN0U2l6ZSArIG1hcmdpbiAqIDIpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzZWxlY3RlZFRpY0RhdGEubGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgdGFibGVSb3dQb3NbaV0gPSB0YWJsZVJvd1Bvc1tpIC0gMV0gKyAocmVjdFNpemUgKyBtYXJnaW4gKiAyKTtcbiAgfVxuICBsZXQgdGFibGVDb2x1bW5Qb3MgPSBbXTtcbiAgdGFibGVDb2x1bW5Qb3NbMF0gPSBzZWxlY3RlZFRpY0RhdGEuY2FudmFzUG9zLnggKyAyMDtcbiAgdGFibGVDb2x1bW5Qb3NbMV0gPSB0YWJsZUNvbHVtblBvc1swXSArIG1hcmdpbiAqIDQgKyByZWN0U2l6ZSArIGxlZ2VuZFdpZHRoO1xuICB0YWJsZUNvbHVtblBvc1syXSA9IHRhYmxlQ29sdW1uUG9zWzFdICsgbWFyZ2luICogMiArIHNlbGVjdGVkVGljRGF0YS53aWR0aDtcblxuICBjb25zdCBjZW50ZXJQb3NYID0gKGdyYXBoUmVjdC54ICsgZ3JhcGhSZWN0LncpIC8gMjtcbiAgY29uc3QgdGFibGVXaWR0aCA9IHRhYmxlQ29sdW1uUG9zWzJdIC0gdGFibGVDb2x1bW5Qb3NbMF07XG4gIGxldCB0YWJsZVBvaW50ID0gbnVsbDtcbiAgaWYgKHNlbGVjdGVkVGljRGF0YS5jYW52YXNQb3MueCA+IGNlbnRlclBvc1gpIHtcbiAgICB0YWJsZUNvbHVtblBvcyA9IHRhYmxlQ29sdW1uUG9zLm1hcChwb3MgPT4gcG9zIC0gdGFibGVXaWR0aCAtIDQwKTtcbiAgICB0YWJsZVBvaW50ID0geyB4OiB0YWJsZUNvbHVtblBvc1syXSwgeTogdGFibGVSb3dQb3NbMF0gfTtcbiAgfSBlbHNlIHtcbiAgICB0YWJsZVBvaW50ID0geyB4OiB0YWJsZUNvbHVtblBvc1swXSwgeTogdGFibGVSb3dQb3NbMF0gfTtcbiAgfVxuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IDAuNTtcbiAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gIGN0eC5maWxsUmVjdChcbiAgICB0YWJsZUNvbHVtblBvc1swXSxcbiAgICB0YWJsZVJvd1Bvc1swXSxcbiAgICB0YWJsZUNvbHVtblBvc1syXSAtIHRhYmxlQ29sdW1uUG9zWzBdLFxuICAgIHRhYmxlUm93UG9zW3NlbGVjdGVkVGljRGF0YS5sZW5ndGggKyAxXSAtIHRhYmxlUm93UG9zWzBdXG4gICk7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICcjOTk5OTk5JztcbiAgY3R4LnN0cm9rZVJlY3QoXG4gICAgdGFibGVDb2x1bW5Qb3NbMF0sXG4gICAgdGFibGVSb3dQb3NbMF0sXG4gICAgdGFibGVDb2x1bW5Qb3NbMl0gLSB0YWJsZUNvbHVtblBvc1swXSxcbiAgICB0YWJsZVJvd1Bvc1tzZWxlY3RlZFRpY0RhdGEubGVuZ3RoICsgMV0gLSB0YWJsZVJvd1Bvc1swXVxuICApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzZWxlY3RlZFRpY0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0YWJsZUNvbHVtblBvc1swXSwgdGFibGVSb3dQb3NbaV0pO1xuICAgIGN0eC5saW5lVG8odGFibGVDb2x1bW5Qb3NbMl0sIHRhYmxlUm93UG9zW2ldKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHRhYmxlQ29sdW1uUG9zWzFdLCB0YWJsZVJvd1Bvc1sxXSk7XG4gIGN0eC5saW5lVG8odGFibGVDb2x1bW5Qb3NbMV0sIHRhYmxlUm93UG9zW3NlbGVjdGVkVGljRGF0YS5sZW5ndGggKyAxXSk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LnJlc3RvcmUoKTtcblxuICBjdHguZmlsbFRleHQoYCR7c2VsZWN0ZWRUaWN9YCwgdGFibGVDb2x1bW5Qb3NbMF0gKyBtYXJnaW4sIHRhYmxlUm93UG9zWzBdICsgbWFyZ2luKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFRpY0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5maWxsVGV4dChcbiAgICAgIGAke2xlZ2VuZHNbaV19YCxcbiAgICAgIHRhYmxlQ29sdW1uUG9zWzBdICsgcmVjdFNpemUgKyBtYXJnaW4gKiAzLFxuICAgICAgdGFibGVSb3dQb3NbaSArIDFdICsgbWFyZ2luXG4gICAgKTtcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBgJHtzZWxlY3RlZFRpY0RhdGFbaV0uZGF0YVBvcy50b0ZpeGVkKDMpfWAsXG4gICAgICB0YWJsZUNvbHVtblBvc1sxXSArIG1hcmdpbixcbiAgICAgIHRhYmxlUm93UG9zW2kgKyAxXSArIG1hcmdpblxuICAgICk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tpXTtcbiAgICBjdHguZmlsbFJlY3QodGFibGVDb2x1bW5Qb3NbMF0gKyBtYXJnaW4sIHRhYmxlUm93UG9zW2kgKyAxXSArIG1hcmdpbiwgcmVjdFNpemUsIHJlY3RTaXplKTtcblxuICAgIGlmIChcbiAgICAgIHNlbGVjdGVkVGljRGF0YVtpXS5jYW52YXNQb3MgPj0gZ3JhcGhSZWN0LnlcbiAgICAgICYmIHNlbGVjdGVkVGljRGF0YVtpXS5jYW52YXNQb3MgPD0gZ3JhcGhSZWN0LnkgKyBncmFwaFJlY3QuaFxuICAgICkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyhzZWxlY3RlZFRpY0RhdGEuY2FudmFzUG9zLngsIHNlbGVjdGVkVGljRGF0YVtpXS5jYW52YXNQb3MsIDQsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd1xuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRGVmYXVsdCBmb250U2l6ZSA6IDEycHhcbiAqL1xuRHJhd0hlbHBlci5EcmF3ID0gZnVuY3Rpb24gKGN0eCwgZHJhd0RhdGEpIHtcbiAgY29uc3Qge1xuICAgIGZvbnQsXG4gICAgdGl0bGUsXG4gICAgbGVnZW5kLFxuICAgIGJvcmRlcixcbiAgICBheGlzLFxuICAgIGdyaWQsXG4gICAgdGljcyxcbiAgICBsaW5lRGF0YXMsXG4gICAgbGVnZW5kRGF0YXMsXG4gICAgdGFibGVEYXRhLFxuICAgIGNhbnZhc1dpZHRoLFxuICAgIGNhbnZhc0hlaWdodCxcbiAgICBncmFwaFJlY3QsXG4gICAgbGVnZW5kUmVjdFxuICB9ID0gZHJhd0RhdGE7XG4gIGN0eC5mb250ID0gYDEycHggJHtmb250fWA7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XG4gIERyYXdIZWxwZXIuRHJhd1RpdGxlKGN0eCwgZm9udCwgdGl0bGUpO1xuICBEcmF3SGVscGVyLkRyYXdCb3JkZXIoY3R4LCBncmFwaFJlY3QsIGJvcmRlcik7XG4gIERyYXdIZWxwZXIuRHJhd1RpY3MoY3R4LCBncmFwaFJlY3QudywgZ3JhcGhSZWN0LmgsIHRpY3MpO1xuICBEcmF3SGVscGVyLkRyYXdHcmlkKGN0eCwgZ3JhcGhSZWN0LncsIGdyYXBoUmVjdC5oLCBncmlkLCB0aWNzKTtcbiAgRHJhd0hlbHBlci5EcmF3QXhpcyhjdHgsIGZvbnQsIGF4aXMpO1xuICBEcmF3SGVscGVyLkRyYXdMaW5lcyhjdHgsIGdyYXBoUmVjdCwgbGluZURhdGFzKTtcbiAgRHJhd0hlbHBlci5EcmF3TGVnZW5kcyhjdHgsIGZvbnQsIGxlZ2VuZFJlY3QsIGxlZ2VuZERhdGFzKTtcbiAgRHJhd0hlbHBlci5EcmF3VGFibGUoY3R4LCBmb250LCBncmFwaFJlY3QsIHRhYmxlRGF0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmF3SGVscGVyO1xuIiwiaW1wb3J0IERyYXdIZWxwZXIgZnJvbSAnLi9kcmF3SGVscGVyJztcblxuc2VsZi5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyBjYW52YXMsIGRwciwgZHJhd0RhdGEgfSA9IGV2ZW50LmRhdGE7XG4gIGlmIChjYW52YXMpIHtcbiAgICBzZWxmLmNhbnZhcyA9IGNhbnZhcztcbiAgICBzZWxmLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgaWYgKGRwcikge1xuICAgIHNlbGYuY3R4LnNjYWxlKGRwciwgZHByKTtcbiAgfVxuXG4gIGlmIChkcmF3RGF0YSkge1xuICAgIERyYXdIZWxwZXIuRHJhdyhzZWxmLmN0eCwgZHJhd0RhdGEpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==