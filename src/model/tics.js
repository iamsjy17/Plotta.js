import { IsObject } from '../util';

export default class Tics {
  constructor(type, visible, color, value) {
    this.type = type || 'number';
    this.visible = visible === 'boolean' ? visible : true;
    this.color = color || 'black';

    this.value = IsObject(value) && value.x && value.y
      ? {
        x: value.x,
        y: value.y
      }
      : {
        x: 1,
        y: 1
      };
  }

  SetData(type, visible, color, value) {
    this.type = type || this.type;
    this.visible = visible === 'boolean' ? visible : this.visible;
    this.color = color || this.color;
    this.value = IsObject(value) && value.x && value.y
      ? {
        x: value.x,
        y: value.y
      }
      : this.value;
  }
}
