import { IsObject } from '../util';

export default class Axis {
  constructor(visible, type, label, color, location, range) {
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.type = typeof type === 'string' ? type : 'Number';
    this.label = label || '';
    this.color = color || 'black';
    this.location = location || 'center';
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

  SetData(visible, type, label, color, location, range) {
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
    this.type = type || this.type;
    this.label = label || this.label;
    this.color = color || 'black';
    this.location = location || 'center';
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
