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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/demo/testData.js":
/*!******************************!*\
  !*** ./src/demo/testData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var xy = function xy(x) {
  return x;
};

var testData = {
  linedatas: [{
    id: 'line1',
    type: 'func',
    legend: 'cos',
    color: '#55A8DE',
    visible: true,
    func: Math.cos,
    dotNum: 1000
  }, {
    id: 'line2',
    type: 'func',
    legend: 'sin',
    color: '#A2CCB6',
    visible: true,
    func: Math.sin,
    dotNum: 1000
  }, {
    id: 'line3',
    type: 'func',
    legend: 'x = y',
    color: '#C94346',
    visible: true,
    func: xy,
    dotNum: 1000
  }, {
    id: 'line4',
    type: 'func',
    legend: 'sinh',
    color: '#F7CE6F',
    visible: true,
    func: Math.sinh,
    dotNum: 1000
  }, {
    id: 'line5',
    type: 'func',
    legend: 'cosh',
    color: '#9168F6',
    visible: true,
    func: Math.cosh,
    dotNum: 1000
  }],
  config: {
    font: '',
    legendVisible: true,
    title: {
      location: 'center',
      color: '#666666',
      text: 'Plotta.js'
    },
    grid: {
      type: '',
      visible: true,
      color: '#888888'
    },
    border: {
      type: '',
      visible: true,
      color: '#DDDDDD',
      width: 1
    },
    tics: {
      visible: true,
      color: '#888888',
      value: {
        x: 2,
        y: 2
      }
    },
    axis: {
      x: {
        visible: true,
        label: 'X',
        color: '#666666',
        location: 'center',
        range: {
          start: -10,
          end: 10
        }
      },
      y: {
        visible: true,
        label: 'Y',
        color: '#666666',
        location: 'center',
        range: {
          start: -10,
          end: 10
        }
      }
    },
    table: {
      visible: true
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (testData);
window.testData = testData;

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./src/demo/testData.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/demo/testData.js */"./src/demo/testData.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vdGVzdERhdGEuanMiXSwibmFtZXMiOlsieHkiLCJ4IiwidGVzdERhdGEiLCJsaW5lZGF0YXMiLCJpZCIsInR5cGUiLCJsZWdlbmQiLCJjb2xvciIsInZpc2libGUiLCJmdW5jIiwiTWF0aCIsImNvcyIsImRvdE51bSIsInNpbiIsInNpbmgiLCJjb3NoIiwiY29uZmlnIiwiZm9udCIsImxlZ2VuZFZpc2libGUiLCJ0aXRsZSIsImxvY2F0aW9uIiwidGV4dCIsImdyaWQiLCJib3JkZXIiLCJ3aWR0aCIsInRpY3MiLCJ2YWx1ZSIsInkiLCJheGlzIiwibGFiZWwiLCJyYW5nZSIsInN0YXJ0IiwiZW5kIiwidGFibGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxJQUFNQSxFQUFF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QUFDTHpCLGFBQU8sRUFBRTtBQURKO0FBakREO0FBaERPLENBQWpCO0FBc0dlTix1RUFBZjtBQUNBZ0MsTUFBTSxDQUFDaEMsUUFBUCxHQUFrQkEsUUFBbEIsQyIsImZpbGUiOiJ0ZXN0RGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJjb25zdCB4eSA9IHggPT4geDtcbmNvbnN0IHRlc3REYXRhID0ge1xuICBsaW5lZGF0YXM6IFtcbiAgICB7XG4gICAgICBpZDogJ2xpbmUxJyxcbiAgICAgIHR5cGU6ICdmdW5jJyxcbiAgICAgIGxlZ2VuZDogJ2NvcycsXG4gICAgICBjb2xvcjogJyM1NUE4REUnLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGZ1bmM6IE1hdGguY29zLFxuICAgICAgZG90TnVtOiAxMDAwXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xpbmUyJyxcbiAgICAgIHR5cGU6ICdmdW5jJyxcbiAgICAgIGxlZ2VuZDogJ3NpbicsXG4gICAgICBjb2xvcjogJyNBMkNDQjYnLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGZ1bmM6IE1hdGguc2luLFxuICAgICAgZG90TnVtOiAxMDAwXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xpbmUzJyxcbiAgICAgIHR5cGU6ICdmdW5jJyxcbiAgICAgIGxlZ2VuZDogJ3ggPSB5JyxcbiAgICAgIGNvbG9yOiAnI0M5NDM0NicsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgZnVuYzogeHksXG4gICAgICBkb3ROdW06IDEwMDBcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbGluZTQnLFxuICAgICAgdHlwZTogJ2Z1bmMnLFxuICAgICAgbGVnZW5kOiAnc2luaCcsXG4gICAgICBjb2xvcjogJyNGN0NFNkYnLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGZ1bmM6IE1hdGguc2luaCxcbiAgICAgIGRvdE51bTogMTAwMFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdsaW5lNScsXG4gICAgICB0eXBlOiAnZnVuYycsXG4gICAgICBsZWdlbmQ6ICdjb3NoJyxcbiAgICAgIGNvbG9yOiAnIzkxNjhGNicsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgZnVuYzogTWF0aC5jb3NoLFxuICAgICAgZG90TnVtOiAxMDAwXG4gICAgfVxuICBdLFxuICBjb25maWc6IHtcbiAgICBmb250OiAnJyxcbiAgICBsZWdlbmRWaXNpYmxlOiB0cnVlLFxuICAgIHRpdGxlOiB7XG4gICAgICBsb2NhdGlvbjogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogJyM2NjY2NjYnLFxuICAgICAgdGV4dDogJ1Bsb3R0YS5qcydcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGNvbG9yOiAnIzg4ODg4OCdcbiAgICB9LFxuICAgIGJvcmRlcjoge1xuICAgICAgdHlwZTogJycsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgY29sb3I6ICcjREREREREJyxcbiAgICAgIHdpZHRoOiAxXG4gICAgfSxcbiAgICB0aWNzOiB7XG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgY29sb3I6ICcjODg4ODg4JyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHg6IDIsXG4gICAgICAgIHk6IDJcbiAgICAgIH1cbiAgICB9LFxuICAgIGF4aXM6IHtcbiAgICAgIHg6IHtcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdYJyxcbiAgICAgICAgY29sb3I6ICcjNjY2NjY2JyxcbiAgICAgICAgbG9jYXRpb246ICdjZW50ZXInLFxuICAgICAgICByYW5nZToge1xuICAgICAgICAgIHN0YXJ0OiAtMTAsXG4gICAgICAgICAgZW5kOiAxMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBsYWJlbDogJ1knLFxuICAgICAgICBjb2xvcjogJyM2NjY2NjYnLFxuICAgICAgICBsb2NhdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgc3RhcnQ6IC0xMCxcbiAgICAgICAgICBlbmQ6IDEwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgdGVzdERhdGE7XG53aW5kb3cudGVzdERhdGEgPSB0ZXN0RGF0YTtcbiJdLCJzb3VyY2VSb290IjoiIn0=