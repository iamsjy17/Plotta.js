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
  NEW_LINE,
  DELETE_LINE,
  UPDATE_LINE,
  FONT,
  LEGEND_VISIBLE,
  TITLE,
  TITLE_VISIBLE,
  TITLE_COLOR,
  TITLE_LOCATION,
  GRID_VISIBLE,
  GRID_COLOR,
  BORDER_VISIBLE,
  BORDER_COLOR,
  BORDER_WIDTH,
  TICS_VISIBLE,
  TICS_COLOR,
  TICS_VALUE,
  AXISX_VISIBLE,
  AXISX_LABEL,
  AXISX_LOCATION,
  AXISX_COLOR,
  AXISX_RANGE,
  AXISY_VISIBLE,
  AXISY_LABEL,
  AXISY_LOCATION,
  AXISY_COLOR,
  AXISY_RANGE,
  TABLE_VISIBLE,
  NEW_TIC,
}
