interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Pos {
  x: number;
  y: number;
}

const LEFT_OFFSET = 80;
const RIGHT_OFFSET = 20;
const TOP_OFFSET = 80;
const BOTTOM_OFFSET = 70;

const GetLocationRatio = function (location) {
  let ratio = 50;
  const _location = location.toLowerCase();

  switch (_location) {
    case 'left':
    case 'top':
      ratio = 20;
      break;
    case 'right':
    case 'bottom':
      ratio = 80;
      break;
    case 'center':
    case 'middle':
    default:
      break;
  }

  return ratio;
};

/**
 * @name ViewModelHelper
 * @type class
 * @property {String} font
 * @property {Object} axisX
 * @property {Object} axisY
 * @property {Number} canvasWidth
 * @property {Number} canvasHeight
 * @property {Object} graphRect graph area in canvas
 * @property {Object} legendRect legend area in canvas
 * @param {String} font
 * @param {Object} axisX
 * @param {Object} axisY
 * @param {Number} canvasWidth
 * @param {Number} canvasHeight
 *
 * See function description
 * @method GetGraphRect
 * @method GetLegendRect
 * @method GetTitlePos
 * @method GetAxisXPos
 * @method GetAxisYPos
 * @method GetxTics
 * @method GetyTics
 * @method CanvasPoint2DataPoint
 * @method DataPoint2CanvasPoint
 * @method GraphPoint2DataPoint
 * @method DataPoint2GraphPoint
 * @method CanvasPoint2GraphPoint
 * @method GraphPoint2CanvasPoint
 * @method GetLineDatas
 * @method GetLegendDatas
 * @method GetSelectedTic
 * @method GetTableDatas
 */
export default class ViewModelHelper {
  font: string;
  axisX: any;
  axisY: any;
  canvasWidth: number;
  canvasHeight: number;
  graphRect: Rect;
  legendRect?: Rect;

  constructor(font: string, axisX: any, axisY: any, canvasWidth: number, canvasHeight: number) {
    this.font = font;
    this.axisX = axisX;
    this.axisY = axisY;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.graphRect = {
      x: LEFT_OFFSET,
      y: TOP_OFFSET,
      w: this.canvasWidth - (LEFT_OFFSET + RIGHT_OFFSET),
      h: this.canvasHeight - (TOP_OFFSET + BOTTOM_OFFSET),
    };
  }

  /**
   * @name GetGraphRect
   * @Description
   * graph area in canvas
   * GraphHeight = CanvasHeight - LegendHeight - Margins
   */
  GetGraphRect(): Rect {
    return this.graphRect;
  }

  /**
   * @name GetLegendRect
   * @Description
   * legend area in canvas
   */
  GetLegendRect(): Rect {
    return this.legendRect;
  }

  /**
   * @name GetTitlePos
   * @Description
   * Default Y : TOP_OFFSET / 2 (40px)
   * X : Depend On Location info
   * left 20, center 50, right 80 (ratio)
   */
  GetTitlePos(location): Pos {
    const ratio = GetLocationRatio(location);
    return {x: this.graphRect.x + (this.graphRect.w * ratio) / 100, y: TOP_OFFSET / 2};
  }

  /**
   * @name GetAxisXPos
   * @Description
   * Default Y : Graph Bottom Pos + 50px
   * X : Depend On Location info
   * left 20, center 50, right 80 (ratio)
   */
  GetAxisXPos(location): Pos {
    const ratio = GetLocationRatio(location);
    return {
      x: this.graphRect.x + (this.graphRect.w * ratio) / 100,
      y: this.graphRect.y + this.graphRect.h + 50,
    };
  }

  /**
   * @name GetAxisYPos
   * @Description
   * Default X : Graph Left Pos - 50px
   * Y : Depend On Location info
   * top 20, middle 50, bottom 80 (ratio)
   */
  GetAxisYPos(location): Pos {
    const ratio = GetLocationRatio(location);
    return {
      x: this.graphRect.x - 50,
      y: this.graphRect.y + (this.graphRect.h * ratio) / 100,
    };
  }

  /**
   * @name GetxTics
   * @Description
   * Gets the tics contained in the x-axis range
   */
  GetxTics(ticValue) {
    const tics = [];
    let _ticValue = this.axisX.range.start;
    let tic = null;

    while (_ticValue <= this.axisX.range.end) {
      tic = this.DataPoint2CanvasPoint(_ticValue, this.axisY.range.start);
      tic.value = _ticValue;
      tics.push(tic);
      _ticValue += ticValue;
    }

    return tics;
  }

  /**
   * @name GetyTics
   * @Description
   * Gets the tics contained in the y-axis range
   */
  GetyTics(ticValue) {
    if (ticValue <= 0) {
      return null;
    }

    const tics = [];
    let _ticValue = this.axisY.range.start;
    let tic = null;

    while (_ticValue <= this.axisY.range.end) {
      tic = this.DataPoint2CanvasPoint(this.axisX.range.start, _ticValue);
      tic.value = _ticValue;
      tics.push(tic);
      _ticValue += ticValue;
    }

    return tics;
  }

  /**
   * @name CanvasPoint2DataPoint
   * @type function
   * @return {Object}
   * @Description
   * Change the Canvas Point to Data Point.
   */
  CanvasPoint2DataPoint({x, y}) {
    const graphPoint = this.CanvasPoint2GraphPoint(x, y);
    if (graphPoint) return this.GraphPoint2DataPoint(graphPoint);
    return null;
  }

  /**
   * @name DataPoint2CanvasPoint
   * @type function
   * @return {Object}
   * @Description
   * Change the Data Point to Canvas Point.
   */
  DataPoint2CanvasPoint(x, y): Pos | null {
    const graphPoint = this.DataPoint2GraphPoint(x, y);

    if (!graphPoint) {
      return null;
    }

    return this.GraphPoint2CanvasPoint(graphPoint);
  }

  /**
   * @name GraphPoint2DataPoint
   * @Description
   * Change the Graph Point to Data Point.
   */
  GraphPoint2DataPoint({x, y}): Pos | null {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return null;
    }

    return {
      x: (x / this.graphRect.w) * this.axisX.range.value + this.axisX.range.start,
      y: (y / this.graphRect.h) * this.axisY.range.value + this.axisY.range.start,
    };
  }

  /**
   * @name DataPoint2GraphPoint
   * @Description
   * Change the Data Point to Graph Point.
   */
  DataPoint2GraphPoint(x, y): Pos | null {
    if (
      !this.axisX.range ||
      !this.axisY.range ||
      typeof x !== 'number' ||
      typeof y !== 'number' ||
      this.axisX.range.start > x ||
      this.axisX.range.end < x
    ) {
      return null;
    }

    return {
      x: ((x - this.axisX.range.start) / this.axisX.range.value) * this.graphRect.w,
      y: ((y - this.axisY.range.start) / this.axisY.range.value) * this.graphRect.h,
    };
  }

  /**
   * @name CanvasPoint2GraphPoint
   * @Description
   * Change the Canvas Point to Graph Point.
   */
  CanvasPoint2GraphPoint(x, y): Pos | null {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return null;
    }

    const graphPoint = {
      x: x - this.graphRect.x,
      y: this.graphRect.y + this.graphRect.h - y,
    };

    if (graphPoint.x > this.graphRect.w || graphPoint.x < 0) {
      return null;
    }

    return graphPoint;
  }

  /**
   * @name GraphPoint2CanvasPoint
   * @Description
   * Change the Graph Point to Canvas Point.
   */
  GraphPoint2CanvasPoint({x, y}): Pos | null {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return null;
    }

    const canvasPoint = {
      x: this.graphRect.x + x,
      y: this.graphRect.y + this.graphRect.h - y,
    };

    if (canvasPoint.x > this.graphRect.x + this.graphRect.w || canvasPoint.x < this.graphRect.x) {
      return null;
    }

    return canvasPoint;
  }

  /**
   * @name GetLineDatas
   * @Description
   * If the type is 'func', get the result value y of the function.
   * convert the x and y values to Canvas Pos.
   */
  GetLineDatas(lineDatas) {
    const _lineDatas = new Map();

    lineDatas.forEach((value, key) => {
      _lineDatas.set(key, this.GetLineData(value));
    });

    return _lineDatas;
  }

  GetLineData(lineData) {
    const {type, legend, color, visible, datas, func, dotNum} = lineData;

    if (!visible) {
      return null;
    }

    const points = [];
    let x;
    let y;
    let canvasPoint = null;

    if (type === 'func' && typeof func === 'function') {
      const coefficientX = this.axisX.range.value / dotNum;

      for (let i = 0; i <= dotNum; i++) {
        x = i * coefficientX + this.axisX.range.start;
        y = func(x * (this.axisX.type === 'PI' ? Math.PI : 1));

        if (typeof x !== 'number') {
          x = NaN;
        }

        if (typeof y !== 'number') {
          y = NaN;
        }

        canvasPoint = this.DataPoint2CanvasPoint(x, y);

        if (canvasPoint) {
          points.push(canvasPoint);
        }
      }
    } else if (typeof datas === 'object' && datas.length) {
      datas.forEach(point => {
        ({x, y} = point);

        if (typeof x !== 'number') {
          x = NaN;
        }

        if (typeof y !== 'number') {
          y = NaN;
        }

        canvasPoint = this.DataPoint2CanvasPoint(x, y);

        if (canvasPoint) {
          points.push(canvasPoint);
        }
      });
    }

    return {points, color};
  }

  /**
   * @name GetLegendDatas
   * @Description
   * Get Legend Data Using Line Data.
   * Default Font Size : 14px,
   * Decreases the height of the GraphRect by the height of the calculated LegendRect.
   */
  GetLegendDatas(lineDatas) {
    const legendDatas = [];
    const lineHeight = 30;
    const defaultLegendWidth = 30;
    const legendRect = {
      x: this.graphRect.x,
      y: this.graphRect.y + this.graphRect.h + BOTTOM_OFFSET,
      w: this.graphRect.w,
      h: 0,
    };
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    let lineWidth = 0;
    let curLegendWidth = 0;

    ctx.save();
    ctx.font = `14px ${this.font}`;

    lineDatas.forEach((value, index) => {
      const {legend, color, visible} = value;
      const point = {x: 0, y: 0};

      if (!visible) {
        return;
      }

      if (legendRect.h === 0) {
        legendRect.h = lineHeight;
      }

      curLegendWidth = defaultLegendWidth + ctx.measureText(legend).width;
      lineWidth += curLegendWidth;

      if (lineWidth > legendRect.w) {
        legendRect.h += lineHeight;
        lineWidth = curLegendWidth;
      }

      point.x = lineWidth - curLegendWidth;
      point.y = legendRect.h - lineHeight;

      legendDatas.push({legend, color, point});
    });

    ctx.restore();
    this.legendRect = legendRect;
    this.graphRect.h = this.canvasHeight - (TOP_OFFSET + BOTTOM_OFFSET + this.legendRect.h);
    this.legendRect.y = this.graphRect.y + this.graphRect.h + BOTTOM_OFFSET;

    return legendDatas;
  }

  /**
   * @name GetSelectedTic
   * @type function
   * @return {Number}
   * @Description
   * Gets the value of the Tic where the mouse cursor is located.
   */
  GetSelectedTic(mousePos, datas) {
    if (mousePos == null || datas == null) {
      return NaN;
    }

    const selectedTicPos = this.CanvasPoint2DataPoint(mousePos);

    if (selectedTicPos === null) {
      return NaN;
    }

    const ticsArray = Object.keys(datas)
      .map(Number)
      .filter(tic => !isNaN(tic))
      .sort((a, b) => a - b);

    const binarySearch = function (arr, value) {
      const mid = Math.floor(arr.length / 2);

      if (value === arr[mid]) {
        return arr[mid];
      }

      if (value < arr[mid + 1] && value > arr[mid]) {
        return Math.abs(value - arr[mid]) < Math.abs(value - arr[mid + 1]) ? arr[mid] : arr[mid + 1];
      }

      if (arr[mid] < value && arr.length > 1) {
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), value);
      }

      if (arr[mid] > value && arr.length > 1) {
        return binarySearch(arr.splice(0, mid), value);
      }

      return arr[mid];
    };

    return binarySearch(ticsArray, selectedTicPos.x);
  }

  /**
   * @name GetTableDatas
   * @type function
   * @return {Object}
   * @Description
   * The y values of each line corresponding to the current x value are converted to table information.
   * The table information includes the width of each column.
   */
  GetTableDatas(lineDatas, tic) {
    if (!lineDatas || lineDatas.length === 0) {
      return null;
    }

    const tableDatas: {legends?: any; colors?: any; datas?: any; legendWidth?: any} = {};
    let index = -1;
    let legendWidth = 0;
    let curlegendWidth = 0;
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    ctx.font = `14px ${this.font}`;

    lineDatas.forEach(value => {
      const {type, legend, color, visible, datas, func, dotNum} = value;

      if (!visible) {
        return;
      }

      index++;
      let x;
      let y;

      curlegendWidth = ctx.measureText(legend).width;
      legendWidth = legendWidth > curlegendWidth ? legendWidth : curlegendWidth;

      if (!tableDatas.legends) {
        tableDatas.legends = [];
      }

      if (!tableDatas.colors) {
        tableDatas.colors = [];
      }

      if (!tableDatas.datas) {
        tableDatas.datas = [];
      }

      tableDatas.legends[index] = legend;
      tableDatas.colors[index] = color;

      if (type === 'func' && typeof func === 'function') {
        x = this.axisX.range.start;
        const ticDatas = [];

        while (x <= this.axisX.range.end) {
          y = func(x * (this.axisX.type === 'PI' ? Math.PI : 1));

          if (typeof x !== 'number') {
            x = NaN;
          }

          if (typeof y !== 'number') {
            y = NaN;
          }

          ticDatas.push({x, y});
          x += tic;
        }

        ticDatas.forEach((point, idx, array) => {
          ({x, y} = point);

          if (typeof x !== 'number') {
            x = NaN;
          }

          if (typeof y !== 'number') {
            y = NaN;
          }

          if (!tableDatas.datas[x]) {
            tableDatas.datas[x] = [];
          }

          tableDatas.datas[x][index] = {
            dataPos: y,
            canvasPos: this.DataPoint2CanvasPoint(0, y).y,
          };

          x += tic;
        });
      } else if (typeof datas === 'object' && datas.length) {
        datas.forEach((point, idx, array) => {
          ({x, y} = point);

          if (typeof x !== 'number') {
            x = NaN;
          }

          if (typeof y !== 'number') {
            y = NaN;
          }

          if (!tableDatas.datas[x]) {
            tableDatas.datas[x] = [];
          }

          tableDatas.datas[x][index] = {
            dataPos: y,
            canvasPos: this.DataPoint2CanvasPoint(0, y).y,
          };
        });
      }
    });

    if (!tableDatas.datas || tableDatas.datas.length === 0) {
      return null;
    }

    let valueWidth = 0;
    let curValueWidth = 0;
    const tics = Object.keys(tableDatas.datas);

    tics.forEach(tic => {
      tableDatas.datas[tic].forEach(value => {
        curValueWidth = ctx.measureText(value.dataPos.toFixed(3)).width;
        valueWidth = valueWidth > curValueWidth ? valueWidth : curValueWidth;
      });

      const array = tableDatas.datas[tic].filter(cur => {
        if (cur.dataPos >= this.axisY.range.start && cur.dataPos <= this.axisY.range.end) {
          return true;
        }

        return false;
      });

      if (array.length > 0) {
        tableDatas.datas[tic].canvasPos = this.DataPoint2CanvasPoint(
          parseInt(tic, 10),
          array.reduce((acc, cur) => {
            acc.dataPos += cur.dataPos;
            return acc;
          }).dataPos / array.length
        );

        tableDatas.datas[tic].width = valueWidth;
      }
    });

    tableDatas.legendWidth = legendWidth;
    return tableDatas;
  }
}
