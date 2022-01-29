export interface TicsValue {
  x: number;
  y: number;
}

export type TicsType = 'number';

export class Tics {
  type: TicsType;
  visible: boolean;
  color: string;
  value: TicsValue;

  constructor(
    type: TicsType = 'number',
    visible = true,
    color = 'black',
    value = {
      x: 1,
      y: 1,
    }
  ) {
    this.type = type || 'number';
    this.visible = typeof visible === 'boolean' ? visible : true;
    this.color = color || 'black';
    this.value = value;
  }
}
