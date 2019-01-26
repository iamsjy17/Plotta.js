import { IsObject } from '../util';
import Axis from './axis';
import Tics from './tics';

const GraphConfig = (() => {
  const FONT = Symbol('Font');
  const TITLE = Symbol('Title');
  const GRID_TYPE = Symbol('GridType');
  const GRID_VISIBLE = Symbol('GridVisible');
  const BORDER_TYPE = Symbol('BorderVisible');
  const BORDER_VISIBLE = Symbol('BorderVisible');
  const BORDER_COLOR = Symbol('BorderColor');
  const BORDER_WIDTH = Symbol('BorderWidth');
  const AXIS_X = Symbol('AxisX');
  const AXIS_Y = Symbol('AxisY');
  const TICS = Symbol('Tics');

  class GraphConfig {
    constructor(config) {
      this[FONT] = '';
      this[TITLE] = '';
      this[GRID_TYPE] = '';
      this[GRID_VISIBLE] = true;
      this[BORDER_VISIBLE] = true;
      this[BORDER_TYPE] = '';
      this[BORDER_COLOR] = '';
      this[BORDER_WIDTH] = 1;
      this[AXIS_X] = new Axis();
      this[AXIS_Y] = new Axis();
      this[TICS] = new Tics();
      this.Init(config);
    }

    // Properties Getter/Setter
    get font() {
      return this[FONT];
    }

    set font(value) {
      if (value && typeof value === 'string') this[FONT] = value;
    }

    get title() {
      return this[TITLE];
    }

    set title(value) {
      if (value && typeof value === 'string') this[TITLE] = value;
    }

    get gridType() {
      return this[GRID_TYPE];
    }

    set gridType(value) {
      if (value && typeof value === 'string') {
        this[GRID_TYPE] = value;
      }
    }

    get gridVisible() {
      return this[GRID_VISIBLE];
    }

    set gridVisible(value) {
      if (value && typeof value === 'boolean') {
        this[GRID_VISIBLE] = value;
      }
    }

    get borderType() {
      return this[BORDER_TYPE];
    }

    set borderType(value) {
      if (value && typeof value === 'string') {
        this[BORDER_TYPE] = value;
      }
    }

    get borderVisible() {
      return this[BORDER_VISIBLE];
    }

    set borderVisible(value) {
      if (value && typeof value === 'boolean') {
        this[BORDER_VISIBLE] = value;
      }
    }

    get borderColor() {
      return this[BORDER_COLOR];
    }

    set borderColor(value) {
      if (value && typeof value === 'string') {
        this[BORDER_COLOR] = value;
      }
    }

    get borderWidth() {
      return this[BORDER_WIDTH];
    }

    set borderWidth(value) {
      if (value && typeof value === 'number') {
        this[BORDER_WIDTH] = value;
      }
    }

    get axisX() {
      return this[AXIS_X];
    }

    set axisX(axis) {
      if (axis instanceof Axis) {
        this[AXIS_X] = axis;
      }
    }

    get axisY() {
      return this[AXIS_Y];
    }

    set axisY(axis) {
      if (axis instanceof Axis) {
        this[AXIS_Y] = axis;
      }
    }

    get tics() {
      return this[TICS];
    }

    set tics(tics) {
      if (IsObject(tics)) {
        this[TICS] = tics;
      }
    }

    Init(config) {
      if (!IsObject(config)) return;

      this.font = config.font;

      if (config.title) {
        this.title = config.title;
      }

      if (IsObject(config.grid)) {
        this.gridType = config.grid.type;
        this.gridVisible = config.grid.visible;
      }

      if (IsObject(config.border)) {
        this.borderType = config.border.type;
        this.borderVisible = config.border.visible;
        this.borderColor = config.border.color;
        this.borderWidth = config.border.width;
      }

      if (IsObject(config.axis)) {
        if (IsObject(config.axis.x)) {
          const {
            type, visible, label, range
          } = config.axis.x;

          if (this.axisX) this.axisX.SetData(type, visible, label, range);
          else this.axisX = new Axis(type, visible, label, range);
        }
        if (IsObject(config.axis.y)) {
          const {
            type, visible, label, range
          } = config.axis.y;

          if (this.axisY) this.axisY.SetData(type, visible, label, range);
          else this.axisY = new Axis(type, visible, label, range);
        }
      }
      if (IsObject(config.tics)) {
        const {
          type, visible, color, value
        } = config.tics;

        if (this.tics) this.tics.SetData(type, visible, color, value);
        else this.tics = new Tics(type, visible, color, value);
      }
    }
  }
  return GraphConfig;
})();

export default GraphConfig;
