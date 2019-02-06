import { IsObject } from '../util';
import Axis from './axis';
import Tics from './tics';

const GraphConfig = (() => {
  const FONT = Symbol('Font');
  const LEGEND_VISIBLE = Symbol('LegendVisible');
  const TITLE = Symbol('Title');
  const TITLE_COLOR = Symbol('TitleColor');
  const TITLE_LOCATION = Symbol('TitleLocation');
  const GRID_TYPE = Symbol('GridType');
  const GRID_VISIBLE = Symbol('GridVisible');
  const GRID_COLOR = Symbol('GridColor');
  const BORDER_TYPE = Symbol('BorderType');
  const BORDER_VISIBLE = Symbol('BorderVisible');
  const BORDER_COLOR = Symbol('BorderColor');
  const BORDER_WIDTH = Symbol('BorderWidth');
  const AXIS_X = Symbol('AxisX');
  const AXIS_Y = Symbol('AxisY');
  const TICS = Symbol('Tics');

  class GraphConfig {
    constructor(config) {
      this[FONT] = "'Helvetica Neue', Helvetica, Arial, sans-serif";
      this[LEGEND_VISIBLE] = true;
      this[TITLE] = '';
      this[TITLE_COLOR] = 'black';
      this[TITLE_LOCATION] = 'center';
      this[GRID_VISIBLE] = true;
      this[GRID_TYPE] = 'solid';
      this[GRID_COLOR] = 'black';
      this[BORDER_VISIBLE] = true;
      this[BORDER_TYPE] = 'solid';
      this[BORDER_COLOR] = 'black';
      this[BORDER_WIDTH] = 0.3;
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

    get legendVislble() {
      return this[LEGEND_VISIBLE];
    }

    set legendVislble(value) {
      if (value && typeof value === 'boolean') this[LEGEND_VISIBLE] = value;
    }

    get title() {
      return this[TITLE];
    }

    set title(value) {
      if (value && typeof value === 'string') this[TITLE] = value;
    }

    get titleColor() {
      return this[TITLE_COLOR];
    }

    set titleColor(value) {
      if (value && typeof value === 'string') this[TITLE_COLOR] = value;
    }

    get titleLocation() {
      return this[TITLE_LOCATION];
    }

    set titleLocation(value) {
      if (value && typeof value === 'string') this[TITLE_LOCATION] = value;
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

    get gridColor() {
      return this[GRID_COLOR];
    }

    set gridColor(value) {
      if (value && typeof value === 'string') {
        this[GRID_COLOR] = value;
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
      if (tics instanceof Tics) {
        this[TICS] = tics;
      }
    }

    Init(config) {
      if (!IsObject(config)) return;

      this.font = config.font;
      this.legendVisible = config.legendVisible;

      if (IsObject(config.title)) {
        this.title = config.title.text;
        this.titleColor = config.title.color;
        this.titleLocation = config.title.location;
      }

      if (IsObject(config.grid)) {
        this.gridType = config.grid.type;
        this.gridVisible = config.grid.visible;
        this.gridColor = config.grid.color;
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
            visible, type, label, color, location, range
          } = config.axis.x;

          if (this.axisX) this.axisX.SetData(visible, type, label, color, location, range);
          else this.axisX = new Axis(visible, type, label, color, location, range);
        }
        if (IsObject(config.axis.y)) {
          const {
            visible, label, color, location, range
          } = config.axis.y;

          if (this.axisY) this.axisY.SetData(visible, 'Number', label, color, location, range);
          else this.axisY = new Axis(visible, 'Number', label, color, location, range);
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
