/* eslint-disable no-console */
import { IsObject } from '../util';

const ViewModel = (() => {
  const LEFT_OFFSET = 20;
  const RIGHT_OFFSET = 20;
  const TOP_OFFSET = 100;
  const BOTTOM_OFFSET = 40;

  const IsHitted = function () {
    return true;
  };

  const CanvasPoint2GraphPoint = function (x, y) {
    return { x, y };
  };

  const GraphPoint2DataPoint = function (x, y) {
    return { x, y };
  };

  class ViewModel {
    constructor(graphModel, width, height) {
      this.graphModel = graphModel;
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.graphRect = {
        x: LEFT_OFFSET,
        y: RIGHT_OFFSET,
        w: this.canvasWidth - (LEFT_OFFSET + RIGHT_OFFSET),
        h: this.canvasHeight - (TOP_OFFSET + BOTTOM_OFFSET)
      };

      this.drawData = {
        font: '',
        title: '',
        gridType: '',
        borderColor: '',
        borderWidth: 0,
        axisXlabel: '',
        axisYlabel: '',
        ticsColor: '',
        ticsValue: null,
        lineDatas: null
      };

      this.Init();
    }

    DataPoint2GraphPoint(x, y) {
      if (
        !this.rangeX
        || !this.rangeY
        || typeof x !== 'number'
        || typeof y !== 'number'
        || this.rangeX.start > x
        || this.rangeX.end < x
        || this.rangeY.start > y
        || this.rangeY.end < y
      ) return null;

      const graphPoint = {};
      graphPoint.x = Math.abs((x - this.rangeX.start) / this.rangeX.value) * this.graphRect.w;
      graphPoint.y = Math.abs((y - this.rangeY.start) / this.rangeY.value) * this.graphRect.h;

      return graphPoint;
    }

    GraphPoint2CanvasPoint({ x, y }) {
      if (typeof x !== 'number' || typeof y !== 'number') return null;

      const canvasPoint = {};
      canvasPoint.x = x + LEFT_OFFSET;
      canvasPoint.y = this.canvasHeight - (y + BOTTOM_OFFSET);

      if (
        canvasPoint.x > this.canvasWidth - RIGHT_OFFSET
        || canvasPoint.x < LEFT_OFFSET
        || canvasPoint.y < TOP_OFFSET
        || canvasPoint.y > this.canvasHeight - BOTTOM_OFFSET
      ) return null;

      return canvasPoint;
    }

    GetDrawData() {
      return this.drawData;
    }

    LineDatas2ViewPort(lineDatas) {
      const _lineDatas = [];

      lineDatas.forEach((value, key) => {
        const {
          type, legend, color, visible, datas, func, dotNum
        } = value;

        if (!visible) return;

        const points = [];
        let graphPoint = null;
        if (type === 'func' && typeof func === 'function') {
          let x;
          let y;
          const range = Math.abs(this.rangeY.end - this.rangeY.start);
          const coefficientX = this.rangeX.value / dotNum;
          for (let i = 0; i < dotNum; i++) {
            x = i * coefficientX + this.rangeX.start;
            y = func(x);
            if (typeof x !== 'number') x = NaN;
            if (typeof y !== 'number') y = NaN;
            graphPoint = this.DataPoint2GraphPoint(x, y);
            if (graphPoint) points.push(this.GraphPoint2CanvasPoint(graphPoint));
          }
        } else if (typeof datas === 'object' && datas.length) {
          datas.forEach((point) => {
            let { x, y } = point;
            if (typeof x !== 'number') x = NaN;
            if (typeof y !== 'number') y = NaN;
            graphPoint = this.DataPoint2GraphPoint(x, y);
            if (graphPoint) points.push(this.GraphPoint2CanvasPoint(graphPoint));
          });
        }

        _lineDatas.push({ points, legend, color });
      });

      return _lineDatas;
    }

    Init() {
      if (!this.graphModel) return;
      const {
        font,
        title,
        gridType,
        gridVisible,
        borderType,
        borderVisible,
        borderColor,
        borderWidth,
        axisX,
        axisY,
        tics
      } = this.graphModel.config;
      if (!IsObject(axisX) || !IsObject(axisY)) return;

      this.rangeX = axisX.range;
      this.rangeY = axisY.range;

      // NonGraphData Init
      if (font) this.drawData.font = font;
      if (title) this.drawData.title = title;

      // gridData Init
      if (gridType) this.drawData.gridType = gridVisible ? gridType : '';

      // borderData Init
      if (borderColor) this.drawData.borderColor = borderVisible ? borderColor : '';
      if (borderWidth) this.drawData.borderWidth = borderVisible ? borderWidth : 0;

      // AxisData Init
      this.drawData.axisXlabel = axisX.visible ? axisX.label : '';
      this.drawData.axisYlabel = axisY.visible ? axisY.label : '';

      // ticsData Init
      this.drawData.ticsColor = IsObject(tics) && tics.visible ? tics.color : '';
      this.drawData.ticsValue = IsObject(tics) && tics.visible ? tics.value : null;

      this.drawData.lineDatas = this.LineDatas2ViewPort(this.graphModel.lineDatas);
    }

    InvalidateModel() {
      if (!this.graphModel) return;
      this.Init();
    }
  }
  return ViewModel;
})();

export default ViewModel;
