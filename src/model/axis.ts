import Util from '../util';

export default class Axis {
  get Start() {
    return this.range.start;
  }

  get End() {
    return this.range.end;
  }

  visible: boolean;
  type: string;
  label: string;
  color: string;
  location: string;
  range: {start: any; end: any; value: number};

  constructor(visible?: boolean, type?: string, label?: string, color?: string, location?: string, range?: any) {
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.type = typeof type === 'string' ? type : 'Number';
    this.label = label || '';
    this.color = color || 'black';
    this.location = location || 'center';
    this.range =
      Util.IsObject(range) && typeof range.start === 'number' && typeof range.end === 'number'
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
   * @Description
   * Update Axis Datas
   */
  SetData(visible, type, label, color, location, range): void {
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
    this.type = type || this.type;
    this.label = label || this.label;
    this.color = color || 'black';
    this.location = location || 'center';
    this.range =
      Util.IsObject(range) && typeof range.start === 'number' && typeof range.end === 'number'
        ? {
            start: range.start,
            end: range.end,
            value: Math.abs(range.end - range.start),
          }
        : this.range;
  }

  SetVisible(visible): void {
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
  }

  SetLabel(label): void {
    this.label = label || this.label;
  }

  SetColor(color): void {
    this.color = color || 'black';
  }

  SetLocation(location): void {
    this.location = location || 'center';
  }

  SetRange(range): void {
    this.range =
      Util.IsObject(range) && typeof range.start === 'number' && typeof range.end === 'number'
        ? {
            start: range.start,
            end: range.end,
            value: Math.abs(range.end - range.start),
          }
        : this.range;
  }
}
