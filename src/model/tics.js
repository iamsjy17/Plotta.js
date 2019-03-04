import { IsObject } from '../util';

/**
 * @name Tics
 * @type class
 * @property {String} type default type : number
 * @property {Boolean} visible default visible : true
 * @property {String} color default color : black
 * @property {Object} value x, y tics
 *
 * See function description
 * @method SetModelHandler
 * @method BindEvent
 * @method UpdateModel
 * @method UpdateViewModel
 * @method Render
 *
 */
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

  /**
   * @name SetData
   * @type function
   * @Description
   * Update Tic datas.
   */
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
