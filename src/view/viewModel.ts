import {LineType, Point, Rect} from '../model/model';

export interface LegendData {
  legend: string;
  color: string;
  point: Point;
}

export interface PosData {
  [key: number]: {
    dataPos: number;
    canvasPos: number;
  };
  canvasPos?: Point;
  width?: number;
  length: number;
}

export interface TableData {
  visible?: boolean;
  selectedTic?: number;
  colors?: string[];
  legends?: string[];
  datas?: PosData[];
  legendWidth?: number;
}

export interface TitleData {
  text: string;
  color: string;
  position: Point | null;
}

export interface AxisLabelData {
  xLabel: {
    visible: boolean;
    text: string;
    color: string;
    position: Point | null;
  };
  yLabel: {
    visible: boolean;
    text: string;
    color: string;
    position: Point | null;
  };
}

export interface BorderData {
  visible: boolean;
  type: LineType;
  color: string;
  width: number;
}

export interface GridData {
  visible: boolean;
  type: LineType;
  color: string;
}

export type TicData = Point & {value: number};
export interface TicsData {
  visible: boolean;
  color: string;
  xTics: TicData[];
  yTics: TicData[];
}

export interface DrawLineData {
  points: Point[];
  color: string;
}

export interface ViewModel {
  canvasWidth?: number;
  canvasHeight?: number;
  graphRect?: Rect;
  legendRect?: Rect;
  font: string;
  title: TitleData;
  border: BorderData;
  grid: GridData;
  axis: AxisLabelData;
  tics: TicsData;
  lineDatas: Map<string, DrawLineData>;
  legendDatas: LegendData[];
  tableData: TableData;
}
