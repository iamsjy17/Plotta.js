import Util from '../util';
import {Point} from './const';

export type DataType = 'func' | 'data';

export class LineData {
  id: string;
  type: DataType;
  legend: string;
  color: string;
  visible: boolean;
  datas: Point[];
  func: (value: number) => void;
  dotNum: number;

  constructor(
    id: string,
    type: DataType = 'func',
    legend = '',
    color = 'black',
    visible = true,
    datas?: Point[],
    func?: (value: number) => void,
    dotNum = 0
  ) {
    this.id = id;
    this.type = type;
    this.legend = legend;
    this.color = color;
    this.visible = visible;
    this.datas = Util.IsObject(datas) && datas.length ? datas : [];
    this.func = typeof func === 'function' ? func : null;
    this.dotNum = dotNum;
  }

  /**
   * @name Update
   * @Description
   * Update LindeDatas
   */
  Update(
    type?: DataType,
    legend?: string,
    color?: string,
    visible?: boolean,
    datas?: Point[],
    func?: (value: number) => void,
    dotNum?: number
  ) {
    if (type !== undefined) {
      this.type = type;
    }

    if (legend !== undefined) {
      this.legend = legend;
    }

    if (color !== undefined) {
      this.color = color;
    }

    if (visible !== undefined) {
      this.visible = visible;
    }

    if (type !== undefined) {
      this.type = type;
    }

    if (Util.IsObject(datas) && datas.length > 0) {
      this.datas = datas;
    }

    if (func !== undefined) {
      this.func = func;
    }

    if (dotNum !== undefined) {
      this.dotNum = dotNum;
    }
  }
}
