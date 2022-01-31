import {Point} from './const';

export type TicsType = 'number';

export interface Tics {
  type: TicsType;
  visible: boolean;
  color: string;
  value: Point;
}
