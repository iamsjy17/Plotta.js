import {LineData} from './lineData';
import {GraphConfig, initialConfig} from './config';
import {HorizontalAlignType, UPDATE_TYPE, VerticalAlignType} from './const';
import {AxisRange} from './axis';
import {TicsValue} from './tics';
import {ViewHandler} from '../presenter/presenter';

export default class GraphModel {
  Invalidated: boolean;
  lineDatas: Map<string, LineData>;
  config: GraphConfig;
  viewHandler: ViewHandler;

  constructor(lineDatas: LineData[], graphConfig: GraphConfig = initialConfig) {
    this.Invalidated = true;
    this.lineDatas = new Map();
    this.config = graphConfig;

    this.SetLineDatas(lineDatas);
  }

  SetViewHandler(viewHandler: ViewHandler): void {
    this.viewHandler = viewHandler;
  }

  /**
   * @name UpdateModel
   * @Description
   * Update the part of viewmodel, or update the whole viewmodel.
   */
  UpdateModel(lineDatas?: LineData[], graphConfig?: Partial<GraphConfig>): void {
    if (!this.viewHandler) {
      return;
    }

    let isUpdated = false;

    if (lineDatas) {
      this.SetLineDatas(lineDatas);

      isUpdated = true;
    }

    if (graphConfig) {
      this.config = {...this.config, ...graphConfig};

      isUpdated = true;
    }

    if (isUpdated) {
      this.viewHandler.UpdateViewModel();
    }
  }

  AddLine(lineData: LineData): void {
    const {id, type, legend, color, visible, datas, func, dotNum} = lineData;

    if (this.lineDatas.has(id) || !this.viewHandler) {
      return;
    }

    this.lineDatas.set(id, new LineData(id, type, legend, color, visible, datas, func, dotNum));
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.NEW_LINE, id);
  }

  DeleteLine(id: string): void {
    if (!this.lineDatas.has(id) || !this.viewHandler) {
      return;
    }

    this.lineDatas.delete(id);
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.DELETE_LINE, id);
  }

  UpdateLine(lineData: LineData): void {
    if (!this.viewHandler) {
      return;
    }

    const {id, type, legend, color, visible, datas, func, dotNum} = lineData;

    if (this.lineDatas.has(id)) {
      this.lineDatas.get(id).Update(type, legend, color, visible, datas, func, dotNum);
    } else {
      this.lineDatas.set(id, new LineData(id, type, legend, color, visible, datas, func, dotNum));
    }

    this.viewHandler.UpdateViewModel(UPDATE_TYPE.UPDATE_LINE, id);
  }

  SetFont(font: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.font = font;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.FONT);
  }

  /**
   * @name Title
   * @Description
   * Title text, color, location
   */
  SetTitle(title: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.title = title;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.TITLE);
  }

  SetTitleColor(color: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.titleColor = color;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.TITLE_COLOR);
  }

  SetTitleLocation(location: HorizontalAlignType): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.titleLocation = location;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.TITLE_LOCATION);
  }

  /**
   * @name Grid
   * @Description
   * Grid show, color
   */
  ShowGrid(show: boolean): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.gridVisible = show;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.GRID_VISIBLE);
  }

  SetGridColor(color: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.gridColor = color;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.GRID_COLOR);
  }

  /**
   * @name Border
   * @Description
   * Border show, color, width
   */
  ShowBorder(show: boolean): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.borderVisible = show;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.BORDER_VISIBLE);
  }

  SetBorderColor(color: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.borderColor = color;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.BORDER_COLOR);
  }

  SetBorderWidth(width: number): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.borderWidth = width;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.BORDER_WIDTH);
  }

  /**
   * @name Tics
   * @Description
   * Tics show, x-y value, color
   */
  ShowTics(show: boolean): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.tics.visible = show;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.TICS_VISIBLE);
  }

  SetTicsColor(color: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.tics.color = color;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.TICS_COLOR);
  }

  SetTicsValue(value: TicsValue): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.tics.value = value;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.TICS_VALUE);
  }

  /**
   * @name AxisX
   * @Description
   * AxisX show, label, location, color
   */
  ShowAxisXLabel(show: boolean): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisX.visible = show;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_VISIBLE);
  }

  SetAxisXLabel(label: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisX.label = label;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_LABEL);
  }

  SetAxisXLabelLocation(location: HorizontalAlignType): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisX.location = location;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_LOCATION);
  }

  SetAxisXLabelColor(color: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisX.color = color;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_COLOR);
  }

  SetAxisXRange(range: AxisRange): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisX.range = {
      start: range.start,
      end: range.end,
      value: Math.abs(range.end - range.start),
    };

    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_RANGE);
  }

  /**
   * @name AxisY
   * @Description
   * AxisY show, label, location, color
   */
  ShowAxisYLabel(show: boolean): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisY.visible = show;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_VISIBLE);
  }

  SetAxisYLabel(label: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisY.label = label;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_LABEL);
  }

  SetAxisYLabelLocation(location: VerticalAlignType): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisY.location = location;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_LOCATION);
  }

  SetAxisYLabelColor(color: string): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisY.color = color;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_COLOR);
  }

  SetAxisYRange(range: AxisRange): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.axisY.range = {
      start: range.start,
      end: range.end,
      value: Math.abs(range.end - range.start),
    };
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_RANGE);
  }

  /**
   * @name ShowTable
   * @Description
   * Table On/Off
   */
  ShowTable(show: boolean): void {
    if (!this.viewHandler) {
      return;
    }

    this.config.tableVisible = show;
    this.viewHandler.UpdateViewModel(UPDATE_TYPE.TABLE_VISIBLE);
  }

  /**
   * @name SetLineDatas
   * @Description
   * Set graphModel with input lineDatas.
   */
  private SetLineDatas(lineDatas: LineData[]): void {
    if (!lineDatas || lineDatas.length === 0) {
      return;
    }

    lineDatas.forEach(lineData => {
      const {id, type, legend, color, visible, datas, func, dotNum} = lineData;

      this.lineDatas.set(id, new LineData(id, type, legend, color, visible, datas, func, dotNum));
    });
  }
}
