import { IsObject } from '../util';

export default class LineData {
  constructor(type, axisX, axisY, legend, color, visible, datas, func, dotNum) {
    this.type = type || '';
    this.axisX = axisX === 'x2' ? axisX : 'x';
    this.axisY = axisY === 'y2' ? axisY : 'y';
    this.legend = legend || '';
    this.color = color || '';
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.datas = IsObject(datas) && datas.length ? datas : [];
    this.func = typeof func === 'function' ? func : null;
    this.dotNum = dotNum || 0;
  }
}
