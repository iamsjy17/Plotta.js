import Config from './config';
import LineData from './lineData';
import { IsObject, UPDATE_TYPE } from '../util';

/**
 * @name GraphModel
 * @type class
 * @property {Object} LineDatas
 * @property {Object} Config
 * @property {Object} ViewHandler
 * @property {Boolean} Invalidated
 *
 * See function description
 * @method SetViewHandler
 * @method InitModel
 * @method UpdateModel
 */

export default class GraphModel {
  constructor(dataSet) {
    this.Invalidated = true;
    this.lineDatas = new Map();
    this.config = new Config();
    this.InitModel(dataSet);
    this.viewHandler = null;
  }

  /**
   * @name SetViewHandler
   * @type function
   */
  SetViewHandler(viewHandler) {
    this.viewHandler = viewHandler;
  }

  /**
   * @name InitModel
   * @type function
   * @Description
   * Initializes the graphModel with the input dataSet.
   */
  InitModel(dataSet) {
    if (!IsObject(dataSet)) return;

    dataSet.linedatas.length
      && dataSet.linedatas.forEach((item) => {
        const {
          id, type, legend, color, visible, datas, func, dotNum
        } = item;

        this.lineDatas.set(id, new LineData(type, legend, color, visible, datas, func, dotNum));
      });

    if (IsObject(dataSet.config)) {
      this.config && this.config.Init(dataSet.config);
    }
  }

  // ViewUpdate Methods
  // ViewModelUpdate
  // If there are parameters, update the part of viewmodel, or update the whole viewmodel.

  /**
   * @name UpdateModel
   * @type function
   * @Description
   * Updates the graphModel with the input dataSet.
   */
  UpdateModel(dataSet) {
    if (!IsObject(dataSet)) return;

    if (Object.prototype.hasOwnProperty.call(dataSet, 'linedatas')) {
      this.lineDatas.clear();
      dataSet.linedatas.forEach((item) => {
        this.AddLine(item);
      });
    }

    if (IsObject(dataSet.config)) {
      this.config && this.config.Init(dataSet.config);
    }
    if (this.viewHandler) this.viewHandler.UpdateViewModel();
  }

  /**
   * @name AddLine
   * @type function
   * @Description
   * Add New Line.
   */
  AddLine(lineData) {
    const {
      id, type, legend, color, visible, datas, func, dotNum
    } = lineData;

    if (this.lineDatas.has(id)) {
      return false;
    }
    this.lineDatas.set(id, new LineData(type, legend, color, visible, datas, func, dotNum));
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.NEW_LINE, id);
    return true;
  }

  /**
   * @name DeleteLine
   * @type function
   */
  DeleteLine(id) {
    this.lineDatas.delete(id);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.DELETE_LINE, id);
  }

  /**
   * @name UpdateLine
   * @type function
   * @Description
   * Update the line data.
   */
  UpdateLine(lineData) {
    const {
      id, type, legend, color, visible, datas, func, dotNum
    } = lineData;

    if (this.lineDatas.has(id)) {
      this.lineDatas.get(id).Update(type, legend, color, visible, datas, func, dotNum);
    } else {
      this.lineDatas.set(id, new LineData(type, legend, color, visible, datas, func, dotNum));
    }
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.UPDATE_LINE, id);
  }

  /**
   * @name Font
   * @type function
   */
  SetFont(font) {
    this.config.font = font;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.FONT);
  }

  /**
   * @name Title
   * @type function
   * @Description
   * Title text, color, location
   */
  SetTitle(title) {
    this.config.title = title;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.TITLE);
  }

  SetTitleColor(color) {
    this.config.titleColor = color;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.TITLE_COLOR);
  }

  SetTitleLocation(location) {
    this.config.titleLocation = location;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.TITLE_LOCATION);
  }

  /**
   * @name Grid
   * @type function
   * @Description
   * Grid show, color
   */
  ShowGrid(show) {
    this.config.gridVisible = show;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.GRID_VISIBLE);
  }

  SetGridColor(color) {
    this.config.gridColor = color;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.GRID_COLOR);
  }

  /**
   * @name Border
   * @type function
   * @Description
   * Border show, color, width
   */
  ShowBorder(show) {
    this.config.borderVisible = show;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.BORDER_VISIBLE);
  }

  SetBorderColor(color) {
    this.config.borderColor = color;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.BORDER_COLOR);
  }

  SetBorderWidth(width) {
    this.config.borderWidth = width;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.BORDER_WIDTH);
  }

  /**
   * @name Tics
   * @type function
   * @Description
   * Tics show, x-y value, color
   */
  ShowTics(show) {
    this.config.tics.SetVisible(show);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.TICS_VISIBLE);
  }

  SetTicsColor(color) {
    this.config.tics.SetColor(color);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.TICS_COLOR);
  }

  SetTicsValue(value) {
    this.config.tics.SetValue(value);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.TICS_VALUE);
  }

  /**
   * @name X-Label
   * @type function
   * @Description
   * xlable show, label, location, color
   */
  ShowAxisXLabel(show) {
    this.config.axisX.SetVisible(show);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_VISIBLE);
  }

  SetAxisXLabel(label) {
    this.config.axisX.SetLabel(label);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_LABEL);
  }

  SetAxisXLabelLocation(location) {
    this.config.axisX.SetLocation(location);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_LOCATION);
  }

  SetAxisXLabelColor(color) {
    this.config.axisX.SetColor(color);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_COLOR);
  }

  SetAxisXRange(range) {
    this.config.axisX.SetRange(range);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISX_RANGE);
  }

  /**
   * @name Y-Label
   * @type function
   * @Description
   * ylabel show, label, location, color
   */
  ShowAxisYLabel(show) {
    this.config.axisY.SetVisible(show);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_VISIBLE);
  }

  SetAxisYLabel(label) {
    this.config.axisY.SetLabel(label);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_LABEL);
  }

  SetAxisYLabelLocation(location) {
    this.config.axisY.SetLocation(location);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_LOCATION);
  }

  SetAxisYLabelColor(color) {
    this.config.axisY.SetColor(color);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_COLOR);
  }

  SetAxisYRange(range) {
    this.config.axisY.SetRange(range);
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.AXISY_RANGE);
  }

  /**
   * @name ShowTable
   * @type function
   * @Description
   * Table On/Off
   */
  ShowTable(show) {
    this.config.tableVisible = show;
    if (this.viewHandler) this.viewHandler.UpdateViewModel(UPDATE_TYPE.TABLE_VISIBLE);
  }
}
