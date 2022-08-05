import {HorizontalAlignType, VerticalAlignType} from './model';

export interface AxisRange {
  start: number;
  end: number;
}

export type AxisType = 'number' | 'PI';

export interface Axis {
  visible?: boolean;
  type?: AxisType;
  label?: string;
  color?: string;
  location?: HorizontalAlignType | VerticalAlignType;
  range: AxisRange;
}
