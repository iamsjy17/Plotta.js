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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/demo/testData.js":
/*!******************************!*\
  !*** ./src/demo/testData.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var xy = function xy(x) {
  return x;
};

var dataSet = {
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
window.testData = dataSet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vdGVzdERhdGEuanMiXSwibmFtZXMiOlsieHkiLCJ4IiwiZGF0YVNldCIsImxpbmVkYXRhcyIsImlkIiwidHlwZSIsImxlZ2VuZCIsImNvbG9yIiwidmlzaWJsZSIsImZ1bmMiLCJNYXRoIiwiY29zIiwiZG90TnVtIiwic2luIiwic2luaCIsImNvc2giLCJjb25maWciLCJmb250IiwibGVnZW5kVmlzaWJsZSIsInRpdGxlIiwibG9jYXRpb24iLCJ0ZXh0IiwiZ3JpZCIsImJvcmRlciIsIndpZHRoIiwidGljcyIsInZhbHVlIiwieSIsImF4aXMiLCJsYWJlbCIsInJhbmdlIiwic3RhcnQiLCJlbmQiLCJ0YWJsZSIsIndpbmRvdyIsInRlc3REYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEs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QUFFO0FBQ0x6QixhQUFPLEVBQUU7QUFESjtBQWpERDtBQWhETSxDQUFoQjtBQXVHQTBCLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQmpDLE9BQWxCLEMiLCJmaWxlIjoidGVzdERhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImNvbnN0IHh5ID0geCA9PiB4O1xuY29uc3QgZGF0YVNldCA9IHtcbiAgbGluZWRhdGFzOiBbXG4gICAge1xuICAgICAgaWQ6ICdsaW5lMScsXG4gICAgICB0eXBlOiAnZnVuYycsXG4gICAgICBsZWdlbmQ6ICdjb3MnLFxuICAgICAgY29sb3I6ICcjNTVBOERFJyxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBmdW5jOiBNYXRoLmNvcyxcbiAgICAgIGRvdE51bTogMTAwMFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdsaW5lMicsXG4gICAgICB0eXBlOiAnZnVuYycsXG4gICAgICBsZWdlbmQ6ICdzaW4nLFxuICAgICAgY29sb3I6ICcjQTJDQ0I2JyxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBmdW5jOiBNYXRoLnNpbixcbiAgICAgIGRvdE51bTogMTAwMFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdsaW5lMycsXG4gICAgICB0eXBlOiAnZnVuYycsXG4gICAgICBsZWdlbmQ6ICd4ID0geScsXG4gICAgICBjb2xvcjogJyNDOTQzNDYnLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGZ1bmM6IHh5LFxuICAgICAgZG90TnVtOiAxMDAwXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xpbmU0JyxcbiAgICAgIHR5cGU6ICdmdW5jJyxcbiAgICAgIGxlZ2VuZDogJ3NpbmgnLFxuICAgICAgY29sb3I6ICcjRjdDRTZGJyxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBmdW5jOiBNYXRoLnNpbmgsXG4gICAgICBkb3ROdW06IDEwMDBcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbGluZTUnLFxuICAgICAgdHlwZTogJ2Z1bmMnLFxuICAgICAgbGVnZW5kOiAnY29zaCcsXG4gICAgICBjb2xvcjogJyM5MTY4RjYnLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGZ1bmM6IE1hdGguY29zaCxcbiAgICAgIGRvdE51bTogMTAwMFxuICAgIH1cbiAgXSxcbiAgY29uZmlnOiB7XG4gICAgZm9udDogJycsXG4gICAgbGVnZW5kVmlzaWJsZTogdHJ1ZSxcbiAgICB0aXRsZToge1xuICAgICAgbG9jYXRpb246ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICcjNjY2NjY2JyxcbiAgICAgIHRleHQ6ICdQbG90dGEuanMnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB0eXBlOiAnJyxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBjb2xvcjogJyM4ODg4ODgnXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGNvbG9yOiAnI0RERERERCcsXG4gICAgICB3aWR0aDogMVxuICAgIH0sXG4gICAgdGljczoge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGNvbG9yOiAnIzg4ODg4OCcsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB4OiAyLFxuICAgICAgICB5OiAyXG4gICAgICB9XG4gICAgfSxcbiAgICBheGlzOiB7XG4gICAgICB4OiB7XG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnWCcsXG4gICAgICAgIGNvbG9yOiAnIzY2NjY2NicsXG4gICAgICAgIGxvY2F0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICBzdGFydDogLTEwLFxuICAgICAgICAgIGVuZDogMTBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdZJyxcbiAgICAgICAgY29sb3I6ICcjNjY2NjY2JyxcbiAgICAgICAgbG9jYXRpb246ICdjZW50ZXInLFxuICAgICAgICByYW5nZToge1xuICAgICAgICAgIHN0YXJ0OiAtMTAsXG4gICAgICAgICAgZW5kOiAxMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH1cbiAgfVxufTtcblxud2luZG93LnRlc3REYXRhID0gZGF0YVNldDtcbiJdLCJzb3VyY2VSb290IjoiIn0=