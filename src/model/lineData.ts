import Util from '../util';
import {Point} from './model';

export type DataType = 'func' | 'data';

export interface LineData {
  id: string;
  type: DataType;
  legend: string;
  color: string;
  visible: boolean;
  datas: Point[];
  func: (value: number) => void;
  dotNum: number;
}
