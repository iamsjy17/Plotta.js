import { IsObject } from '../util';

/**
 * @name Axis
 * @type class
 * @property {Boolean} visible default visible : true
 * @property {String} type default type : Number
 * @property {String} label
 * @property {String} color default color : black
 * @property {String} location default location : center
 * @property {Object} range start, end, value
 *
 * See function description
 * @method SetData
 * @method SetVisible
 * @method SetLabel
 * @method SetColor
 * @method SetLocation
 * @method SetRange
 */

export default class Axis {
  constructor(visible, type, label, color, location, range) {
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.type = typeof type === 'string' ? type : 'Number';
    this.label = label || '';
    this.color = color || 'black';
    this.location = location || 'center';
    this.range =
      IsObject(range) &&
      typeof range.start === 'number' &&
      typeof range.end === 'number'
        ? {
            start: range.start,
            end: range.end,
            value: Math.abs(range.end - range.start),
          }
        : {
            start: -5,
            end: 5,
            value: 10,
          };
  }

  /**
   * @name SetData
   * @type function
   * @Description
   * Update Axis Datas
   */
  SetData(visible, type, label, color, location, range) {
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
    this.type = type || this.type;
    this.label = label || this.label;
    this.color = color || 'black';
    this.location = location || 'center';
    this.range =
      IsObject(range) &&
      typeof range.start === 'number' &&
      typeof range.end === 'number'
        ? {
            start: range.start,
            end: range.end,
            value: Math.abs(range.end - range.start),
          }
        : this.range;
  }

  SetVisible(visible) {
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
  }

  SetLabel(label) {
    this.label = label || this.label;
  }

  SetColor(color) {
    this.color = color || 'black';
  }

  SetLocation(location) {
    this.location = location || 'center';
  }

  SetRange(range) {
    this.range =
      IsObject(range) &&
      typeof range.start === 'number' &&
      typeof range.end === 'number'
        ? {
            start: range.start,
            end: range.end,
            value: Math.abs(range.end - range.start),
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
