import {Axis} from './axis';
import {HorizontalAlignType, LineType} from './const';
import {Tics} from './tics';

export interface GraphConfig {
  font: string;
  legendVisible: boolean;
  title: string;
  titleColor: string;
  titleLocation: HorizontalAlignType;
  gridType: LineType;
  gridVisible: boolean;
  gridColor: string;
  borderType: LineType;
  borderVisible: boolean;
  borderColor: string;
  borderWidth: number;
  tableVisible: boolean;
  axisX: Axis;
  axisY: Axis;
  tics: Tics;
}

const initialAxis: Axis = {
  visible: true,
  type: 'number',
  label: '',
  color: 'black',
  range: {
    start: -5,
    end: 5,
    value: 10,
  },
};

export const initialConfig: GraphConfig = {
  font: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  legendVisible: true,
  title: 'Title',
  titleColor: 'black',
  titleLocation: 'center',
  gridType: 'solid',
  gridVisible: true,
  gridColor: 'black',
  borderType: 'solid',
  borderVisible: true,
  borderColor: 'black',
  borderWidth: 0.3,
  tableVisible: true,
  axisX: {...initialAxis, label: 'x', location: 'center'},
  axisY: {...initialAxis, label: 'y', location: 'middle'},
  tics: new Tics(),
};
