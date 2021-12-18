import Util from '../util';

export default class LineData {
  type: string;
  legend: string;
  color: string;
  visible: boolean;
  datas: any[];
  func: () => void;
  dotNum: number;

  constructor(
    type?: string,
    legend?: string,
    color?: string,
    visible?: boolean,
    datas?: any[],
    func?: () => void,
    dotNum?: number
  ) {
    this.type = type ?? '';
    this.legend = legend ?? '';
    this.color = color ?? '';
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.datas = Util.IsObject(datas) && datas.length ? datas : [];
    this.func = typeof func === 'function' ? func : null;
    this.dotNum = dotNum ?? 0;
  }

  /**
   * @name Update
   * @Description
   * Update LindeDatas
   */
  Update(type, legend, color, visible, datas, func, dotNum) {
    this.type = type || this.type;
    this.legend = legend || this.legend;
    this.color = color || this.color;
    this.visible = typeof visible === 'boolean' ? visible : this.visible;
    this.datas = Util.IsObject(datas) && datas.length ? datas : this.datas;
    this.func = typeof func === 'function' ? func : this.func;
    this.dotNum = dotNum || this.dotNum;
  }
}
