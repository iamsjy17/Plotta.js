import Util from '../util';

/**
 * @name Tics
 * @type class
 * @property {String} type default type : number
 * @property {Boolean} visible default visible : true
 * @property {String} color default color : black
 * @property {Object} value x, y tics
 *
 * * See function description
 * @method SetData
 * @method SetVisible
 * @method SetLabel
 * @method SetColor
 * @method SetValue
 */
export default class Tics {
  constructor(type, visible, color, value) {
    this.type = type || 'number';
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.color = color || 'black';

    this.value =
      Util.IsObject(value) && value.x && value.y
        ? {
            x: value.x,
            y: value.y,
          }
        : {
            x: 1,
            y: 1,
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
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
    this.color = color || this.color;
    this.value =
      Util.IsObject(value) && value.x && value.y
        ? {
            x: value.x,
            y: value.y,
          }
        : this.value;
  }

  SetVisible(visible) {
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
  }

  SetColor(color) {
    this.color = color || this.color;
  }

  SetValue(value) {
    this.value =
      Util.IsObject(value) && value.x && value.y
        ? {
            x: value.x,
            y: value.y,
          }
        : this.value;
  }
}
