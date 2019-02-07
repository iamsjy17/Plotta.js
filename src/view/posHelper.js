/* eslint-disable max-len */
const PosHelper = (() => {
  const LEFT_OFFSET = 80;
  const RIGHT_OFFSET = 20;
  const TOP_OFFSET = 80;
  const BOTTOM_OFFSET = 70;

  const GetLocationRatio = function (location) {
    let ratio = 50;
    switch (location) {
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

  class PosHelper {
    constructor(font, axisX, axisY, canvasWidth, canvasHeight) {
      this.font = font;
      this.axisX = axisX;
      this.axisY = axisY;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.graphRect = {
        x: LEFT_OFFSET,
        y: TOP_OFFSET,
        w: this.canvasWidth - (LEFT_OFFSET + RIGHT_OFFSET),
        h: this.canvasHeight - (TOP_OFFSET + BOTTOM_OFFSET)
      };
    }

    GetGraphRect() {
      return this.graphRect;
    }

    GetLegendRect() {
      return this.legendRect;
    }

    GetTitlePos(location) {
      const ratio = GetLocationRatio(location);
      return { x: this.graphRect.x + (this.graphRect.w * ratio) / 100, y: TOP_OFFSET / 2 };
    }

    GetAxisXPos(location) {
      const ratio = GetLocationRatio(location);
      return {
        x: this.graphRect.x + (this.graphRect.w * ratio) / 100,
        y: this.graphRect.y + this.graphRect.h + 50
      };
    }

    GetAxisYPos(location) {
      const ratio = GetLocationRatio(location);
      return {
        x: this.graphRect.x - 50,
        y: this.graphRect.y + (this.graphRect.h * ratio) / 100
      };
    }

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

    GetyTics(ticValue) {
      if (ticValue <= 0) return null;

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

    DataPoint2CanvasPoint(x, y) {
      const graphPoint = this.DataPoint2GraphPoint(x, y);
      if (graphPoint) return this.GraphPoint2CanvasPoint(graphPoint);
      return null;
    }

    DataPoint2GraphPoint(x, y) {
      if (
        !this.axisX.range
        || !this.axisY.range
        || typeof x !== 'number'
        || typeof y !== 'number'
        || this.axisX.range.start > x
        || this.axisX.range.end < x
      ) return null;

      const graphPoint = {};
      graphPoint.x = ((x - this.axisX.range.start) / this.axisX.range.value) * this.graphRect.w;
      graphPoint.y = ((y - this.axisY.range.start) / this.axisY.range.value) * this.graphRect.h;

      return graphPoint;
    }

    GraphPoint2CanvasPoint({ x, y }) {
      if (typeof x !== 'number' || typeof y !== 'number') return null;

      const canvasPoint = {};
      canvasPoint.x = this.graphRect.x + x;
      canvasPoint.y = this.graphRect.y + this.graphRect.h - y;

      if (canvasPoint.x > this.graphRect.x + this.graphRect.w || canvasPoint.x < this.graphRect.x) return null;

      return canvasPoint;
    }

    LineDatas2CanvasPoint(lineDatas) {
      const _lineDatas = [];

      lineDatas.forEach((value, key) => {
        const {
          type, legend, color, visible, datas, func, dotNum
        } = value;

        if (!visible) return;

        const points = [];
        let canvasPoint = null;
        if (type === 'func' && typeof func === 'function') {
          let x;
          let y;
          const range = Math.abs(this.axisY.range.end - this.axisY.range.start);
          const coefficientX = this.axisX.range.value / dotNum;
          for (let i = 0; i <= dotNum; i++) {
            x = i * coefficientX + this.axisX.range.start;
            y = func(x * (this.axisX.type === 'PI' ? Math.PI : 1));
            if (typeof x !== 'number') x = NaN;
            if (typeof y !== 'number') y = NaN;

            // if (y > this.axisY.range.end) y = this.axisY.range.end;
            // else if (y < this.axisY.range.start) y = this.axisY.range.start;

            canvasPoint = this.DataPoint2CanvasPoint(x, y);
            if (canvasPoint) points.push(canvasPoint);
          }
        } else if (typeof datas === 'object' && datas.length) {
          datas.forEach((point) => {
            let { x, y } = point;
            if (typeof x !== 'number') x = NaN;
            if (typeof y !== 'number') y = NaN;
            canvasPoint = this.DataPoint2CanvasPoint(x, y);
            if (canvasPoint) points.push(canvasPoint);
          });
        }
        _lineDatas.push({ points, color });
      });

      return _lineDatas;
    }

    LegendDatas2CanvasPoint(lineDatas) {
      const legendDatas = [];
      const lineHeight = 30;
      const defaultLegendWidth = 30;
      const legendRect = {
        x: this.graphRect.x,
        y: this.graphRect.y + this.graphRect.h + BOTTOM_OFFSET,
        w: this.graphRect.w,
        h: 0
      };
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');
      let lineWidth = 0;
      let curLegendWidth = 0;

      ctx.save();
      ctx.font = `14px ${this.font}`;

      lineDatas.forEach((value, index) => {
        const { legend, color, visible } = value;
        const point = { x: 0, y: 0 };

        if (!visible) return;

        if (legendRect.h === 0) legendRect.h = lineHeight;
        curLegendWidth = defaultLegendWidth + ctx.measureText(legend).width;
        lineWidth += curLegendWidth;

        if (lineWidth > legendRect.w) {
          legendRect.h += lineHeight;
          lineWidth = curLegendWidth;
        }

        point.x = lineWidth - curLegendWidth;
        point.y = legendRect.h - lineHeight;

        legendDatas.push({ legend, color, point });
      });

      ctx.restore();
      this.legendRect = legendRect;
      this.graphRect.h -= this.legendRect.h;
      this.legendRect.y = this.graphRect.y + this.graphRect.h + BOTTOM_OFFSET;

      return legendDatas;
    }
  }

  return PosHelper;
})();

export default PosHelper;
