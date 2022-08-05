import {Axis} from './axis';
import {HorizontalAlignType, LineType} from './model';
import {Tics} from './tics';

export interface GraphConfig {
  font: string;
  legendVisible: boolean;
  title: {visible: boolean; text: string; color: string; location: HorizontalAlignType};
  grid: {
    visible: boolean;
    type: LineType;
    color: string;
  };
  border: {
    visible: boolean;
    type: LineType;
    color: string;
    width: number;
  };
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
  },
};

export const initialConfig: GraphConfig = {
  font: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  legendVisible: true,
  title: {
    visible: true,
    text: 'Title',
    color: 'black',
    location: 'center',
  },
  grid: {
    visible: true,
    type: 'solid',
    color: 'black',
  },
  border: {
    visible: true,
    type: 'solid',
    color: 'black',
    width: 0.3,
  },
  tableVisible: true,
  axisX: {...initialAxis, label: 'x', location: 'center'},
  axisY: {...initialAxis, label: 'y', location: 'middle'},
  tics: {type: 'number', visible: true, color: 'black', value: {x: 1, y: 1}},
};
