import {HorizontalAlignType, Point, Rect, UPDATE_TYPE, VerticalAlignType} from '../model/model';
import GraphModel from '../model/graphModel';
import {LineData} from '../model/lineData';
import {DrawLineData, Legend, PosData, TableData, TicData, ViewModel} from './viewModel';
import {Axis} from '../model/axis';

const initialViewModel: ViewModel = {
  font: '',
  title: {
    visible: true,
    text: '',
    color: 'black',
    position: null,
  },
  border: {
    visible: true,
    type: 'solid',
    color: '',
    width: 1,
  },
  grid: {
    visible: true,
    type: 'solid',
    color: '',
  },
  axis: {
    xLabel: {
      visible: true,
      text: '',
      color: 'black',
      position: null,
    },
    yLabel: {
      visible: true,
      text: '',
      color: 'black',
      position: null,
    },
  },
  tics: {
    visible: true,
    color: 'black',
    xTics: null,
    yTics: null,
  },
  lineDatas: null,
  legendData: null,
  tableData: {
    visible: true,
    selectedTic: NaN,
    colors: [],
    legends: [],
    datas: [],
    legendWidth: 0,
  },
};

/**
 * @name ViewModelHelper
 * @type class
 * @property {GraphModel} graphModel
 * @property {number} canvasWidth
 * @property {number} canvasHeight
 * @property {boolean} Invalidated
 * @property {ViewModel} viewModel
 *
 * See function description
 * @method GetViewModel
 * @method IsInGraph
 * @method IsNewTic
 * @method Init
 * @method InvalidateModel
 * @method GetAxisXPos
 * @method GetAxisYPos
 * @method GetxTics
 * @method GetyTics
 * @method CanvasPoint2DataPoint
 * @method DataPoint2CanvasPoint
 * @method GraphPoint2DataPoint
 * @method DataPoint2GraphPoint
 * @method CanvasPoint2GraphPoint
 * @method GraphPoint2CanvasPoint
 * @method GetLineDatas
 * @method GetLegends
 * @method GetSelectedTic
 * @method GetTableData
 */
export default class ViewModelHelper {
  private static GetLocationRatio(location: HorizontalAlignType | VerticalAlignType): number {
    let ratio = 50;
    const _location = location.toLowerCase();

    switch (_location) {
      case 'left':
      case 'top':
        ratio = 20;
        break;
      case 'right':
      case 'bottom':
        ratio = 80;
        break;
      case 'center':
      case 'middle':
      default:
        break;
    }

    return ratio;
  }

  private static LEFT_OFFSET = 80;
  private static RIGHT_OFFSET = 20;
  private static TOP_OFFSET = 80;
  private static BOTTOM_OFFSET = 70;

  private get axisX(): Axis {
    return this.graphModel.config.axisX;
  }

  private get axisY(): Axis {
    return this.graphModel.config.axisY;
  }

  graphModel: GraphModel;
  canvasWidth: number;
  canvasHeight: number;

  invalidated: boolean;
  viewModel: ViewModel;
  graphRect: Rect;
  legendRect?: Rect;

  constructor(graphModel: GraphModel, canvasWidth: number, canvasHeight: number) {
    this.graphModel = graphModel;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.invalidated = true;
    this.viewModel = initialViewModel;
    this.graphRect = {
      x: ViewModelHelper.LEFT_OFFSET,
      y: ViewModelHelper.TOP_OFFSET,
      w: this.canvasWidth - (ViewModelHelper.LEFT_OFFSET + ViewModelHelper.RIGHT_OFFSET),
      h: this.canvasHeight - (ViewModelHelper.TOP_OFFSET + ViewModelHelper.BOTTOM_OFFSET),
    };

    this.Init();
  }

  GetViewModel() {
    return this.viewModel;
  }

  /**
   * @name IsInGraph
   * @Description
   * Returns true if the mouse is in the graph area.
   */
  IsInGraph(mousePos: Point): boolean {
    if (
      mousePos.x <= this.graphRect.x + this.graphRect.w &&
      mousePos.x >= this.graphRect.x &&
      mousePos.y <= this.graphRect.y + this.graphRect.h &&
      mousePos.y >= this.graphRect.y
    ) {
      return true;
    }

    return false;
  }

  /**
   * @name GetNewTic
   * @Description
   * If a new tick is selected, update viewModel's selected tic and change viewmodel to invalidated state. And returns true.
   */
  GetNewTic(mousePos: Point): {result: boolean; selectedTic: number} {
    const selectedTic = this.GetSelectedTic(mousePos, this.viewModel.tableData.datas);

    if (this.viewModel.tableData.selectedTic !== selectedTic) {
      return {result: true, selectedTic};
    }

    return {result: false, selectedTic: NaN};
  }

  /**
   * @name Init
   * @Description
   * Update the viewmodel using the current graph model.
   * The viewmodel is data that can be drawn directly using the canvas coordinate system.
   */
  Init(): void {
    if (!this.graphModel) {
      return;
    }

    const {font, legendVisible, title, grid, border, axisX, axisY, tics, tableVisible} = this.graphModel.config;

    this.viewModel.canvasWidth = this.canvasWidth;
    this.viewModel.canvasHeight = this.canvasHeight;

    // LegendDatas
    this.viewModel.legendData = {visible: legendVisible, legends: this.GetLegends()};

    // ViewRect
    this.viewModel.graphRect = this.graphRect;
    this.viewModel.legendRect = this.legendRect;

    // Title
    this.viewModel.font = font;
    this.viewModel.title.text = title.text;
    this.viewModel.title.visible = title.visible;
    this.viewModel.title.color = title.color;
    this.viewModel.title.position = this.GetTitlePos(title.location);

    // Border
    this.viewModel.border = border;

    // Grid
    this.viewModel.grid = grid;

    // AxisX
    this.viewModel.axis.xLabel.visible = axisX.visible;
    this.viewModel.axis.xLabel.text = axisX.label;
    this.viewModel.axis.xLabel.color = axisX.color;
    this.viewModel.axis.xLabel.position = this.GetAxisXPos(axisX.location as HorizontalAlignType);

    // AxisY
    this.viewModel.axis.yLabel.visible = axisY.visible;
    this.viewModel.axis.yLabel.text = axisY.label;
    this.viewModel.axis.yLabel.color = axisY.color;
    this.viewModel.axis.yLabel.position = this.GetAxisYPos(axisY.location as VerticalAlignType);

    // Tics
    this.viewModel.tics.visible = tics.visible;
    this.viewModel.tics.color = tics.color;
    this.viewModel.tics.xTics = this.GetxTics();
    this.viewModel.tics.yTics = this.GetyTics();

    // LineDatas
    this.viewModel.lineDatas = this.GetLineDatas(this.graphModel.lineDatas);

    // tableDatas
    const tableDatas = this.GetTableData(this.graphModel.lineDatas, tics.value.x);

    if (tableDatas) {
      this.viewModel.tableData.visible = tableVisible;
      this.viewModel.tableData.colors = tableDatas.colors;
      this.viewModel.tableData.legends = tableDatas.legends;
      this.viewModel.tableData.legendWidth = tableDatas.legendWidth;
      this.viewModel.tableData.datas = tableDatas.datas;
    } else {
      this.viewModel.tableData.legendWidth = 0;
      this.viewModel.tableData.datas = null;
    }
  }

  /**
   * @name InvalidateModel
   * @description
   * Update the viewmodel using the current graph model. Then change viewmodel to invalidated state.
   */
  InvalidateModel(updateType: UPDATE_TYPE, value?: any): void {
    if (!this.graphModel) {
      return;
    }

    switch (updateType) {
      case UPDATE_TYPE.NEW_LINE:
      case UPDATE_TYPE.UPDATE_LINE:
      case UPDATE_TYPE.DELETE_LINE: {
        // value : id;
        // Update Rect, Tics, Table, Lines, Axis, Legends

        // LegendDatas
        this.viewModel.legendData = {visible: this.graphModel.config.legendVisible, legends: this.GetLegends()};

        // Rect
        this.viewModel.graphRect = this.graphRect;
        this.viewModel.legendRect = this.legendRect;

        if (updateType === UPDATE_TYPE.DELETE_LINE) {
          this.viewModel.lineDatas.delete(value);
        } else {
          this.viewModel.lineDatas.set(value, this.GetLineData(this.graphModel.lineDatas.get(value)));
        }

        // Tics
        this.viewModel.tics.xTics = this.GetxTics();
        this.viewModel.tics.yTics = this.GetyTics();

        // Axis Position
        this.viewModel.axis.xLabel.position = this.GetAxisXPos(this.axisX.location as HorizontalAlignType);
        this.viewModel.axis.yLabel.position = this.GetAxisYPos(this.axisY.location as VerticalAlignType);

        // TableDatas
        const tableDatas = this.GetTableData(this.graphModel.lineDatas, this.graphModel.config.tics.value.x);

        if (tableDatas) {
          this.viewModel.tableData.legendWidth = tableDatas.legendWidth;
          this.viewModel.tableData.datas = tableDatas.datas;
        } else {
          this.viewModel.tableData.legendWidth = 0;
          this.viewModel.tableData.datas = null;
        }

        break;
      }
      case UPDATE_TYPE.FONT: {
        // Update Font Table, Legends
        this.viewModel.font = this.graphModel.config.font;

        // legendDatas
        this.viewModel.legendData = {visible: this.graphModel.config.legendVisible, legends: this.GetLegends()};

        // tableDatas
        const tableDatas = this.GetTableData(this.graphModel.lineDatas, this.graphModel.config.tics.value.x);

        if (tableDatas) {
          this.viewModel.tableData.legendWidth = tableDatas.legendWidth;
          this.viewModel.tableData.datas = tableDatas.datas;
        } else {
          this.viewModel.tableData.legendWidth = 0;
          this.viewModel.tableData.datas = null;
        }

        break;
      }
      case UPDATE_TYPE.TITLE:
        this.viewModel.title.text = this.graphModel.config.title.text;
        break;
      case UPDATE_TYPE.TITLE:
        this.viewModel.title.text = this.graphModel.config.title.text;
        break;
      case UPDATE_TYPE.TITLE_COLOR:
        this.viewModel.title.color = this.graphModel.config.title.color;
        break;
      case UPDATE_TYPE.TITLE_LOCATION:
        this.viewModel.title.position = this.GetTitlePos(this.graphModel.config.title.location);
        break;
      case UPDATE_TYPE.GRID_VISIBLE:
        this.viewModel.grid.visible = this.graphModel.config.grid.visible;
        break;
      case UPDATE_TYPE.GRID_COLOR:
        this.viewModel.grid.color = this.graphModel.config.grid.color;
        break;
      case UPDATE_TYPE.BORDER_VISIBLE:
        this.viewModel.border.visible = this.graphModel.config.border.visible;
        break;
      case UPDATE_TYPE.BORDER_COLOR:
        this.viewModel.border.color = this.graphModel.config.border.color;
        break;
      case UPDATE_TYPE.BORDER_WIDTH:
        this.viewModel.border.width = this.graphModel.config.border.width;
        break;
      case UPDATE_TYPE.TICS_VISIBLE:
        this.viewModel.tics.visible = this.graphModel.config.tics.visible;
        break;
      case UPDATE_TYPE.TICS_COLOR:
        this.viewModel.tics.color = this.graphModel.config.tics.color;
        break;
      case UPDATE_TYPE.AXISX_VISIBLE:
        this.viewModel.axis.xLabel.visible = this.graphModel.config.axisX.visible;
        break;
      case UPDATE_TYPE.AXISX_LABEL:
        this.viewModel.axis.xLabel.text = this.graphModel.config.axisX.label;
        break;
      case UPDATE_TYPE.AXISX_LOCATION:
        this.viewModel.axis.xLabel.position = this.GetAxisXPos(
          this.graphModel.config.axisX.location as HorizontalAlignType
        );
        break;
      case UPDATE_TYPE.AXISX_COLOR:
        this.viewModel.axis.xLabel.color = this.graphModel.config.axisX.color;
        break;
      case UPDATE_TYPE.AXISY_VISIBLE:
        this.viewModel.axis.yLabel.visible = this.graphModel.config.axisY.visible;
        break;
      case UPDATE_TYPE.AXISY_LABEL:
        this.viewModel.axis.yLabel.text = this.graphModel.config.axisY.label;
        break;
      case UPDATE_TYPE.AXISY_LOCATION:
        this.viewModel.axis.yLabel.position = this.GetAxisYPos(
          this.graphModel.config.axisY.location as VerticalAlignType
        );
        break;
      case UPDATE_TYPE.AXISY_COLOR:
        this.viewModel.axis.yLabel.color = this.graphModel.config.axisY.color;
        break;
      case UPDATE_TYPE.NEW_TIC:
        this.viewModel.tableData.selectedTic = value;
        break;
      case UPDATE_TYPE.AXISX_RANGE:
      case UPDATE_TYPE.TICS_VALUE:
      case UPDATE_TYPE.AXISY_RANGE:
      default:
        this.Init();
        break;
    }
    this.invalidated = true;
  }

  /**
   * @name GetLegends
   * @Description
   * Get Legend Data Using Line Data.
   * Default Font Size : 14px,
   * Decreases the height of the GraphRect by the height of the calculated LegendRect.
   */
  private GetLegends(): Legend[] {
    const legendDatas: Legend[] = [];
    const lineHeight = 30;
    const defaultLegendWidth = 30;
    const legendRect = {
      x: this.graphRect.x,
      y: this.graphRect.y + this.graphRect.h + ViewModelHelper.BOTTOM_OFFSET,
      w: this.graphRect.w,
      h: 0,
    };
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');

    let lineWidth = 0;
    let curLegendWidth = 0;

    ctx.save();

    ctx.font = `14px ${this.graphModel.config.font}`;

    this.graphModel.lineDatas.forEach(value => {
      const {legend, color, visible} = value;
      const point = {x: 0, y: 0};

      if (!visible) {
        return;
      }

      if (legendRect.h === 0) {
        legendRect.h = lineHeight;
      }

      curLegendWidth = defaultLegendWidth + ctx.measureText(legend).width;
      lineWidth += curLegendWidth;

      if (lineWidth > legendRect.w) {
        legendRect.h += lineHeight;
        lineWidth = curLegendWidth;
      }

      point.x = lineWidth - curLegendWidth;
      point.y = legendRect.h - lineHeight;

      legendDatas.push({name: legend, color, point});
    });

    ctx.restore();

    this.legendRect = legendRect;
    this.graphRect.h =
      this.canvasHeight - (ViewModelHelper.TOP_OFFSET + ViewModelHelper.BOTTOM_OFFSET + this.legendRect.h);
    this.legendRect.y = this.graphRect.y + this.graphRect.h + ViewModelHelper.BOTTOM_OFFSET;

    return legendDatas;
  }

  /**
   * @name GetTitlePos
   * @Description
   * Default Y : TOP_OFFSET / 2 (40px)
   * X : Depend On Location info
   * left 20, center 50, right 80 (ratio)
   */
  private GetTitlePos(location: HorizontalAlignType | VerticalAlignType): Point {
    const ratio = ViewModelHelper.GetLocationRatio(location);

    return {x: this.graphRect.x + (this.graphRect.w * ratio) / 100, y: ViewModelHelper.TOP_OFFSET / 2};
  }

  /**
   * @name GetAxisXPos
   * @Description
   * Default Y : Graph Bottom Pos + 50px
   * X : Depend On Location info
   * left 20, center 50, right 80 (ratio)
   */
  private GetAxisXPos(location: HorizontalAlignType): Point {
    const ratio = ViewModelHelper.GetLocationRatio(location);

    return {
      x: this.graphRect.x + (this.graphRect.w * ratio) / 100,
      y: this.graphRect.y + this.graphRect.h + 50,
    };
  }

  /**
   * @name GetAxisYPos
   * @Description
   * Default X : Graph Left Pos - 50px
   * Y : Depend On Location info
   * top 20, middle 50, bottom 80 (ratio)
   */
  private GetAxisYPos(location: VerticalAlignType): Point {
    const ratio = ViewModelHelper.GetLocationRatio(location);

    return {
      x: this.graphRect.x - 50,
      y: this.graphRect.y + (this.graphRect.h * ratio) / 100,
    };
  }

  /**
   * @name GetxTics
   * @Description
   * Gets the tics contained in the x-axis range
   */
  private GetxTics(): TicData[] {
    if (!this.graphModel?.config) {
      return [];
    }

    const ticValue = this.graphModel?.config?.tics?.value?.x;

    if (!this.axisX || !this.axisY || !ticValue || ticValue <= 0) {
      return [];
    }

    const result: TicData[] = [];
    let _ticValue = this.axisX.range.start;
    let tic = null;

    while (_ticValue <= this.axisX.range.end) {
      tic = {...this.DataPoint2CanvasPoint(_ticValue, this.axisY.range.start), value: _ticValue};
      result.push(tic);
      _ticValue += ticValue;
    }

    return result;
  }

  /**
   * @name GetyTics
   * @Description
   * Gets the tics contained in the y-axis range
   */
  private GetyTics(): TicData[] {
    if (!this.graphModel?.config) {
      return [];
    }

    const ticValue = this.graphModel?.config?.tics?.value?.y;

    if (!this.axisX || !this.axisY || !ticValue || ticValue <= 0) {
      return [];
    }

    const result: TicData[] = [];

    let _ticValue = this.axisY.range.start;
    let tic = null;

    while (_ticValue <= this.axisY.range.end) {
      tic = {...this.DataPoint2CanvasPoint(this.axisX.range.start, _ticValue), value: _ticValue};
      result.push(tic);
      _ticValue += ticValue;
    }

    return result;
  }

  /**
   * @name CanvasPoint2DataPoint
   * @Description
   * Change the Canvas Point to Data Point.
   */
  private CanvasPoint2DataPoint({x, y}: Point): Point | null {
    const graphPoint = this.CanvasPoint2GraphPoint(x, y);

    if (!graphPoint) {
      return null;
    }

    return this.GraphPoint2DataPoint(graphPoint);
  }

  /**
   * @name DataPoint2CanvasPoint
   * @Description
   * Change the Data Point to Canvas Point.
   */
  private DataPoint2CanvasPoint(x: number, y: number): Point | null {
    const graphPoint = this.DataPoint2GraphPoint(x, y);

    if (!graphPoint) {
      return null;
    }

    return this.GraphPoint2CanvasPoint(graphPoint);
  }

  /**
   * @name GraphPoint2DataPoint
   * @Description
   * Change the Graph Point to Data Point.
   */
  private GraphPoint2DataPoint({x, y}: Point): Point | null {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return null;
    }

    const axisXValue = Math.abs(this.axisX.range.end - this.axisX.range.start);
    const axisYValue = Math.abs(this.axisY.range.end - this.axisY.range.start);

    return {
      x: (x / this.graphRect.w) * axisXValue + this.axisX.range.start,
      y: (y / this.graphRect.h) * axisYValue + this.axisY.range.start,
    };
  }

  /**
   * @name DataPoint2GraphPoint
   * @Description
   * Change the Data Point to Graph Point.
   */
  private DataPoint2GraphPoint(x: number, y: number): Point | null {
    if (
      !this.axisX.range ||
      !this.axisY.range ||
      typeof x !== 'number' ||
      typeof y !== 'number' ||
      this.axisX.range.start > x ||
      this.axisX.range.end < x
    ) {
      return null;
    }

    const axisXValue = Math.abs(this.axisX.range.end - this.axisX.range.start);
    const axisYValue = Math.abs(this.axisY.range.end - this.axisY.range.start);

    return {
      x: ((x - this.axisX.range.start) / axisXValue) * this.graphRect.w,
      y: ((y - this.axisY.range.start) / axisYValue) * this.graphRect.h,
    };
  }

  /**
   * @name CanvasPoint2GraphPoint
   * @Description
   * Change the Canvas Point to Graph Point.
   */
  private CanvasPoint2GraphPoint(x: number, y: number): Point | null {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return null;
    }

    const graphPoint = {
      x: x - this.graphRect.x,
      y: this.graphRect.y + this.graphRect.h - y,
    };

    if (graphPoint.x > this.graphRect.w || graphPoint.x < 0) {
      return null;
    }

    return graphPoint;
  }

  /**
   * @name GraphPoint2CanvasPoint
   * @Description
   * Change the Graph Point to Canvas Point.
   */
  private GraphPoint2CanvasPoint({x, y}: Point): Point | null {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return null;
    }

    const canvasPoint = {
      x: this.graphRect.x + x,
      y: this.graphRect.y + this.graphRect.h - y,
    };

    if (canvasPoint.x > this.graphRect.x + this.graphRect.w || canvasPoint.x < this.graphRect.x) {
      return null;
    }

    return canvasPoint;
  }

  /**
   * @name GetLineDatas
   * @Description
   * If the type is 'func', get the result value y of the function.
   * convert the x and y values to Canvas Pos.
   */
  private GetLineDatas(lineDatas: Map<string, LineData>): Map<string, DrawLineData> {
    const _lineDatas = new Map();

    lineDatas.forEach((value, key) => {
      _lineDatas.set(key, this.GetLineData(value));
    });

    return _lineDatas;
  }

  private GetLineData(lineData: LineData): DrawLineData {
    const {type, color, visible, datas, func, dotNum} = lineData;

    if (!visible) {
      return null;
    }

    const points = [];

    let x;
    let y;
    let canvasPoint = null;

    if (type === 'func' && typeof func === 'function') {
      const axisXValue = Math.abs(this.axisX.range.end - this.axisX.range.start);
      const coefficientX = axisXValue / dotNum;

      for (let i = 0; i <= dotNum; i++) {
        x = i * coefficientX + this.axisX.range.start;
        y = func(x * (this.axisX.type === 'PI' ? Math.PI : 1));

        if (typeof x !== 'number') {
          x = NaN;
        }

        if (typeof y !== 'number') {
          y = NaN;
        }

        canvasPoint = this.DataPoint2CanvasPoint(x, y);

        if (canvasPoint) {
          points.push(canvasPoint);
        }
      }
    } else if (typeof datas === 'object' && datas.length) {
      datas.forEach(point => {
        ({x, y} = point);

        if (typeof x !== 'number') {
          x = NaN;
        }

        if (typeof y !== 'number') {
          y = NaN;
        }

        canvasPoint = this.DataPoint2CanvasPoint(x, y);

        if (canvasPoint) {
          points.push(canvasPoint);
        }
      });
    }

    return {points, color};
  }

  /**
   * @name GetSelectedTic
   * @Description
   * Gets the value of the Tic where the mouse cursor is located.
   */
  private GetSelectedTic(mousePos: Point, datas: PosData[]): number {
    if (mousePos == null || datas == null) {
      return NaN;
    }

    const selectedTicPos = this.CanvasPoint2DataPoint(mousePos);

    if (selectedTicPos === null) {
      return NaN;
    }

    const ticsArray = Object.keys(datas)
      .map(Number)
      .filter(tic => !isNaN(tic))
      .sort((a, b) => a - b);

    const binarySearch = function (arr: number[], value: number): number {
      const mid = Math.floor(arr.length / 2);

      if (value === arr[mid]) {
        return arr[mid];
      }

      if (value < arr[mid + 1] && value > arr[mid]) {
        return Math.abs(value - arr[mid]) < Math.abs(value - arr[mid + 1]) ? arr[mid] : arr[mid + 1];
      }

      if (arr[mid] < value && arr.length > 1) {
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), value);
      }

      if (arr[mid] > value && arr.length > 1) {
        return binarySearch(arr.splice(0, mid), value);
      }

      return arr[mid];
    };

    return binarySearch(ticsArray, selectedTicPos.x);
  }

  /**
   * @name GetTableData
   * @Description
   * The y values of each line corresponding to the current x value are converted to table information.
   * The table information includes the width of each column.
   */
  private GetTableData(lineDatas: Map<string, LineData>, tic: number): TableData | null {
    if (!lineDatas || lineDatas.size === 0) {
      return null;
    }

    let index = -1;
    let legendWidth = 0;
    let curlegendWidth = 0;

    const tableData: TableData = {};
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');

    ctx.font = `14px ${this.graphModel.config.font}`;

    lineDatas.forEach(lineData => {
      const {type, legend, color, visible, datas, func, dotNum} = lineData;

      if (!visible) {
        return;
      }

      index++;
      let x;
      let y;

      curlegendWidth = ctx.measureText(legend).width;
      legendWidth = legendWidth > curlegendWidth ? legendWidth : curlegendWidth;

      if (!tableData.legends) {
        tableData.legends = [];
      }

      if (!tableData.colors) {
        tableData.colors = [];
      }

      if (!tableData.datas) {
        tableData.datas = [];
      }

      tableData.legends[index] = legend;
      tableData.colors[index] = color;

      if (type === 'func' && typeof func === 'function') {
        x = this.axisX.range.start;
        const ticDatas = [];

        while (x <= this.axisX.range.end) {
          y = func(x * (this.axisX.type === 'PI' ? Math.PI : 1));

          if (typeof x !== 'number') {
            x = NaN;
          }

          if (typeof y !== 'number') {
            y = NaN;
          }

          ticDatas.push({x, y});
          x += tic;
        }

        ticDatas.forEach(point => {
          ({x, y} = point);

          if (typeof x !== 'number') {
            x = NaN;
          }

          if (typeof y !== 'number') {
            y = NaN;
          }

          if (!tableData.datas[x]) {
            tableData.datas[x] = {length: 1};
          } else {
            tableData.datas[x].length++;
          }

          tableData.datas[x][index] = {
            dataPos: y,
            canvasPos: this.DataPoint2CanvasPoint(0, y).y,
          };

          x += tic;
        });
      } else if (typeof datas === 'object' && datas.length) {
        datas.forEach((point, idx, array) => {
          ({x, y} = point);

          if (typeof x !== 'number') {
            x = NaN;
          }

          if (typeof y !== 'number') {
            y = NaN;
          }

          if (!tableData.datas[x]) {
            tableData.datas[x] = {length: 1};
          } else {
            tableData.datas[x].length++;
          }

          tableData.datas[x][index] = {
            dataPos: y,
            canvasPos: this.DataPoint2CanvasPoint(0, y).y,
          };
        });
      }
    });

    if (!tableData.datas || tableData.datas.length === 0) {
      return null;
    }

    let valueWidth = 0;
    let curValueWidth = 0;

    const tics = Object.keys(tableData.datas);

    tics.forEach(tic => {
      const x = Number(tic);

      Array.prototype.forEach.call(tableData.datas[x], (value: {dataPos: number}) => {
        curValueWidth = ctx.measureText(value.dataPos.toFixed(3)).width;
        valueWidth = valueWidth > curValueWidth ? valueWidth : curValueWidth;
      });

      const array = Array.prototype.filter.call(tableData.datas[x], (cur: {dataPos: number}) => {
        if (cur.dataPos >= this.axisY.range.start && cur.dataPos <= this.axisY.range.end) {
          return true;
        }

        return false;
      });

      if (array.length > 0) {
        tableData.datas[x].canvasPos = this.DataPoint2CanvasPoint(
          x,
          array.reduce(
            (acc: {dataPos: number}, cur: {dataPos: number}) => {
              acc.dataPos += cur.dataPos;
              return acc;
            },
            {dataPos: 0}
          ).dataPos / array.length
        );

        tableData.datas[x].width = valueWidth;
      }
    });

    tableData.legendWidth = legendWidth;

    return tableData;
  }
}
