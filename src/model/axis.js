import { IsObject } from '../util';

export default class Axis {
  constructor(type, visible, label, position, range) {
    this.type = type || '';
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.label = label || '';
    this.position = position || '';
    this.range = IsObject(range) && typeof range.start === 'number' && typeof range.end === 'number'
      ? { start: range.start, end: range.end }
      : {
        start: -1,
        end: 1
      };
  }
}
