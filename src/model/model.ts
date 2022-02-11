export type HorizontalAlignType = 'left' | 'center' | 'right';
export type VerticalAlignType = 'top' | 'middle' | 'bottom';
export type LineType = 'solid' | 'dot';

export interface Point {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export enum UPDATE_TYPE {
  NEW_LINE = 0,
  DELETE_LINE = 1,
  UPDATE_LINE = 2,
  FONT = 3,
  TITLE = 4,
  TITLE_COLOR = 5,
  TITLE_LOCATION = 6,
  GRID_VISIBLE = 7,
  GRID_COLOR = 8,
  BORDER_VISIBLE = 9,
  BORDER_COLOR = 10,
  BORDER_WIDTH = 11,
  TICS_VISIBLE = 12,
  TICS_COLOR = 13,
  TICS_VALUE = 14,
  AXISX_VISIBLE = 15,
  AXISX_LABEL = 16,
  AXISX_LOCATION = 17,
  AXISX_COLOR = 18,
  AXISX_RANGE = 19,
  AXISY_VISIBLE = 20,
  AXISY_LABEL = 21,
  AXISY_LOCATION = 22,
  AXISY_COLOR = 23,
  AXISY_RANGE = 24,
  TABLE_VISIBLE = 25,
  NEW_TIC = 26,
}
