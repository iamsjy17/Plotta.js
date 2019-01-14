import { IsObject } from '../util';
import Axis from './axis';

const GraphConfig = (() => {
  const FONT = Symbol('Font');
  const TITLE = Symbol('Title');
  const TITLE_FONTSIZE = Symbol('TitleFontSize');
  const LEGEND_FONTSIZE = Symbol('LegendFontSize');
  const LEGEND_LOCATION = Symbol('LegendLocation');
  const GRID_TYPE = Symbol('GridType');
  const GRID_VISIBLE = Symbol('GridVisible');
  const BORDER_TYPE = Symbol('BorderVisible');
  const BORDER_VISIBLE = Symbol('BorderVisible');
  const BORDER_COLOR = Symbol('BorderColor');
  const BORDER_WIDTH = Symbol('BorderWidth');
  const AXIS_COLOR = Symbol('AxisColor');
  const AXIS_WIDTH = Symbol('AxisWidth');
  const AXIS_FONTSIZE = Symbol('AxisFontSize');
  const AXIS_X = Symbol('AxisX');
  const AXIS_X2 = Symbol('AxisX2');
  const AXIS_Y = Symbol('AxisY');
  const AXIS_Y2 = Symbol('AxisY2');
  const TICS_COLOR = Symbol('TicsColor');
  const TICS_FONTSIZE = Symbol('TicsFontSize');
  const TICS_VISIBLE = Symbol('TicsVisible');
  const TICS_VALUE = Symbol('TicsValue');

  class GraphConfig {
    constructor(config) {
      this[FONT] = '';
      this[TITLE] = '';
      this[TITLE_FONTSIZE] = 10;
      this[LEGEND_FONTSIZE] = 10;
      this[LEGEND_LOCATION] = { x: 0, y: 0 };
      this[GRID_TYPE] = '';
      this[GRID_VISIBLE] = true;
      this[BORDER_VISIBLE] = true;
      this[BORDER_TYPE] = '';
      this[BORDER_COLOR] = '';
      this[BORDER_WIDTH] = 1;
      this[AXIS_COLOR] = 1;
      this[AXIS_WIDTH] = 1;
      this[AXIS_FONTSIZE] = 1;
      this[AXIS_X] = new Axis();
      this[AXIS_X2] = null;
      this[AXIS_Y] = new Axis();
      this[AXIS_Y2] = null;
      this[TICS_COLOR] = '';
      this[TICS_FONTSIZE] = 10;
      this[TICS_VISIBLE] = true;
      this[TICS_VALUE] = { x: 0.1, y: 0.1 };
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

    get titleFontSize() {
      return this[TITLE_FONTSIZE];
    }

    set titleFontSize(value) {
      if (value && typeof value === 'number') this[TITLE_FONTSIZE] = value;
    }

    get legendFontSize() {
      return this[LEGEND_FONTSIZE];
    }

    set legendFontSize(value) {
      if (value && typeof value === 'number') this[LEGEND_FONTSIZE] = value;
    }

    get legendLocation() {
      return this[LEGEND_LOCATION];
    }

    set legendLocation(value) {
      if (
        value
        && typeof value === 'object'
        && value.x
        && typeof value.x === 'number'
        && value.y
        && typeof value.y === 'object'
      ) {
        this[LEGEND_LOCATION].x = value.x;
        this[LEGEND_LOCATION].y = value.y;
      }
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
      if (value && typeof value === 'boolean') {
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

    get axisColor() {
      return this[AXIS_COLOR];
    }

    set axisColor(value) {
      if (value && typeof value === 'string') {
        this[AXIS_COLOR] = value;
      }
    }

    get axisWidth() {
      return this[AXIS_WIDTH];
    }

    set axisWidth(value) {
      if (value && typeof value === 'number') {
        this[AXIS_WIDTH] = value;
      }
    }

    get axisFontSize() {
      return this[AXIS_FONTSIZE];
    }

    set axisFontSize(value) {
      if (value && typeof value === 'number') {
        this[AXIS_FONTSIZE] = value;
      }
    }

    get axisX() {
      return this[AXIS_X];
    }

    set axisX(value) {
      if (IsObject(value)) {
        this[AXIS_X] = value;
      }
    }

    get axisX2() {
      return this[AXIS_X2];
    }

    set axisX2(value) {
      if (IsObject(value)) {
        this[AXIS_X2] = value;
      }
    }

    get axisY() {
      return this[AXIS_Y];
    }

    set axisY(value) {
      if (IsObject(value)) {
        this[AXIS_Y] = value;
      }
    }

    get axisY2() {
      return this[AXIS_Y2];
    }

    set axisY2(value) {
      if (IsObject(value)) {
        this[AXIS_Y2] = value;
      }
    }

    get ticsColor() {
      return this[TICS_COLOR];
    }

    set ticsColor(value) {
      if (value && typeof value === 'number') {
        this[TICS_COLOR] = value;
      }
    }

    get ticsFontSize() {
      return this[TICS_FONTSIZE];
    }

    set ticsFontSize(value) {
      if (value && typeof value === 'number') {
        this[TICS_FONTSIZE] = value;
      }
    }

    get ticsVisible() {
      return this[TICS_VISIBLE];
    }

    set ticsVisible(value) {
      if (value && typeof value === 'boolean') {
        this[TICS_VISIBLE] = value;
      }
    }

    get ticsValue() {
      return this[TICS_VALUE];
    }

    set ticsValue(value) {
      if (IsObject(value)) {
        this[TICS_VALUE] = value;
      }
    }

    Init(config) {
      if (!IsObject(config)) return;

      this.font = config.font;

      if (IsObject(config.title)) {
        this.title = config.title.text;
        this.titleFontSize = config.title.fontSize;
      }

      if (IsObject(config.legend)) {
        this.legendFontsize = config.legend.fontSize;
        this.legendLocation = config.legend.location;
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
        this.axisColor = config.axis.color;
        this.axisWidth = config.axis.width;
        this.axisFontSize = config.axis.fontSize;
        if (IsObject(config.axis.x)) {
          const {
            type, visible, label, position, range
          } = config.axis.x;

          this.axisX = new Axis(type, visible, label, position, range);
        }
        if (IsObject(config.axis.x2)) {
          const {
            type, visible, label, position, range
          } = config.axis.x2;

          this.axisX2 = new Axis(type, visible, label, position, range);
        }
        if (IsObject(config.axis.y)) {
          const {
            type, visible, label, position, range
          } = config.axis.y;

          this.axisY = new Axis(type, visible, label, position, range);
        }
        if (IsObject(config.axis.y2)) {
          const {
            type, visible, label, position, range
          } = config.axis.y2;

          this.axisY2 = new Axis(type, visible, label, position, range);
        }
      }
      if (IsObject(config.tics)) {
        this.ticsType = config.tics.type;
        this.ticsColor = config.tics.color;
        this.ticsLabelFontSize = config.tics.fontSize;
        this.ticsVisible = config.tics.visible;
        this.ticsValue = config.tics.ticsvalue;
      }
    }
  }
  return GraphConfig;
})();

export default GraphConfig;
