import { IsObject } from '../util';

export default class Axis {
  constructor(type, visible, label, range) {
    this.type = type || '';
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.label = label || '';
    this.range = IsObject(range) && typeof range.start === 'number' && typeof range.end === 'number'
      ? {
        start: range.start,
        end: range.end,
        value: Math.abs(range.end - range.start)
      }
      : {
        start: -1,
        end: 1
      };
  }

  SetData(type, visible, label, range) {
    this.type = type || this.value;
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
    this.label = label || this.label;
    this.range = IsObject(range) && typeof range.start === 'number' && typeof range.end === 'number'
      ? {
        start: range.start,
        end: range.end,
        value: Math.abs(range.end - range.start)
      }
      : this.range;
  }

  get Start() {
    return this.range.start;
  }

  get End() {
    return this.range.End;
  }
}
