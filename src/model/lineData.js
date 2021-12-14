import {IsObject} from '../util';

/**
 * @name Axis
 * @type class
 * @property {String} type
 * @property {String} legend
 * @property {String} color
 * @property {Boolean} visible default visible : true
 * @property {Array} datas
 * @property {Function} func
 * @property {Number} dotNum
 *
 * See function description
 * @method Update
 */
export default class LineData {
  constructor(type, legend, color, visible, datas, func, dotNum) {
    this.type = type || '';
    this.legend = legend || '';
    this.color = color || '';
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.datas = IsObject(datas) && datas.length ? datas : [];
    this.func = typeof func === 'function' ? func : null;
    this.dotNum = dotNum || 0;
  }

  /**
   * @name Update
   * @type function
   * @Description
   * Update LindeDatas
   */
  Update(type, legend, color, visible, datas, func, dotNum) {
    this.type = type || this.type;
    this.legend = legend || this.legend;
    this.color = color || this.color;
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
    this.datas = IsObject(datas) && datas.length ? datas : this.datas;
    this.func = typeof func === 'function' ? func : this.func;
    this.dotNum = dotNum || this.dotNum;
  }
}
