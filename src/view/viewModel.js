/* eslint-disable max-len */
/* eslint-disable no-console */
import { UPDATE_TYPE, IsObject } from '../util';
import ViewModelHelper from './ViewModelHelper';

/**
 * @name ViewModel
 * @type class
 * @property {Object} graphModel
 * @property {Number} canvasWidth
 * @property {Number} canvasHeight
 * @property {Object} drawData
 * @property {String} drawData.font default Helvetica Neue', Helvetica, Arial, sans-serif
 * @property {Object} drawData.title default color : black
 * @property {Object} drawData.border default visible : true, width : 1
 * @property {Object} drawData.grid default visible : true
 * @property {Object} drawData.axis default visible : true, color : black
 * @property {Object} drawData.tics default visible : true, color : black
 * @property {Object} drawData.lineDatas
 * @property {Object} drawData.legendDatas
 * @property {Object} drawData.tableData
 * @property {Boolean} Invalidated
 * @property {Object} ViewModelHelper Calc DataPos to ViewPos(Canvas Pos), Calc ViewPos(Canvas Pos) to DataPos
 * @param {Object} graphModel
 * @param {Number} width canvasWidth
 * @param {Number} height canvasHeight
 *
 * See function description
 * @method GetDrawData
 * @method IsInGraph
 * @method IsNewTic
 * @method Init
 * @method InvalidateModel
 */
export default class ViewModel {
  constructor(graphModel, width, height) {
    this.graphModel = graphModel;
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.drawData = {
      font: '',
      title: {
        text: '',
        color: 'black',
        position: null
      },
      border: {
        visible: true,
        type: '',
        color: '',
        width: 1,
        rect: null
      },
      grid: {
        visible: true,
        type: '',
        color: ''
      },
      axis: {
        xLabel: {
          visible: true,
          text: '',
          color: 'black',
          position: null
        },
        yLabel: {
          visible: true,
          text: '',
          color: 'black',
          position: null
        }
      },
      tics: {
        visible: true,
        color: 'black',
        xTics: null,
        yTics: null
      },
      lineDatas: null,
      legendDatas: null,
      tableData: {
        visible: true,
        selectedTic: NaN,
        colors: [],
        legends: [],
        datas: []
      }
    };

    this.Init();
    this.invalidated = true;
  }

  /**
   * @name GetDrawData
   * @type function
   * @return {Object} drawData
   */
  GetDrawData() {
    return this.drawData;
  }

  /**
   * @name IsInGraph
   * @type function
   * @return {Boolean}
   * @Description
   * Returns true if the mouse is in the graph area.
   */
  IsInGraph(mousePos) {
    const graphRect = this.viewModelHelper.GetGraphRect();
    if (
      mousePos.x <= graphRect.x + graphRect.w
      && mousePos.x >= graphRect.x
      && mousePos.y <= graphRect.y + graphRect.h
      && mousePos.y >= graphRect.y
    ) return true;
    return false;
  }

  /**
   * @name GetNewTic
   * @type function
   * @return {Boolean, Number} result, newTic
   * @Description
   * If a new tick is selected, update drawdata's selected tic and change viewmodel to invalidated state. And returns true.
   */
  GetNewTic(mousePos) {
    const selectedTic = this.viewModelHelper.GetSelectedTic(
      mousePos,
      this.drawData.tableData.datas
    );
    if (this.drawData.tableData.selectedTic !== selectedTic) {
      return { result: true, selectedTic };
    }
    return { result: false, selectedTic: null };
  }

  /**
   * @name Init
   * @type function
   * @Description
   * Update the viewmodel using the current graph model.
   * The viewmodel is data that can be drawn directly using the canvas coordinate system.
   */
  Init() {
    if (!this.graphModel) return;
    const {
      font,
      legendVisible,
      title,
      titleColor,
      titleLocation,
      gridType,
      gridVisible,
      gridColor,
      borderType,
      borderVisible,
      borderColor,
      borderWidth,
      axisX,
      axisY,
      tics,
      tableVisible
    } = this.graphModel.config;
    this.viewModelHelper = new ViewModelHelper(
      font,
      axisX,
      axisY,
      this.canvasWidth,
      this.canvasHeight
    );

    this.drawData.canvasWidth = this.canvasWidth;
    this.drawData.canvasHeight = this.canvasHeight;

    // LegendDatas
    this.drawData.legendDatas = this.viewModelHelper.GetLegendDatas(this.graphModel.lineDatas);

    // ViewRect
    this.drawData.graphRect = this.viewModelHelper.GetGraphRect();
    this.drawData.legendRect = this.viewModelHelper.GetLegendRect();

    // Title
    this.drawData.font = font;
    this.drawData.title.text = title;
    this.drawData.title.color = titleColor;
    this.drawData.title.position = this.viewModelHelper.GetTitlePos(titleLocation);

    // Border
    this.drawData.border.visible = borderVisible;
    this.drawData.border.type = borderType;
    this.drawData.border.color = borderColor;
    this.drawData.border.width = borderWidth;

    // Grid
    this.drawData.grid.visible = gridVisible;
    this.drawData.grid.type = gridType;
    this.drawData.grid.color = gridColor;

    // AxisX
    this.drawData.axis.xLabel.visible = axisX.visible;
    this.drawData.axis.xLabel.text = axisX.label;
    this.drawData.axis.xLabel.color = axisX.color;
    this.drawData.axis.xLabel.position = this.viewModelHelper.GetAxisXPos(axisX.location);

    // AxisY
    this.drawData.axis.yLabel.visible = axisY.visible;
    this.drawData.axis.yLabel.text = axisY.label;
    this.drawData.axis.yLabel.color = axisY.color;
    this.drawData.axis.yLabel.position = this.viewModelHelper.GetAxisYPos(axisY.location);

    // Tics
    this.drawData.tics.visible = tics.visible;
    this.drawData.tics.color = tics.color;
    this.drawData.tics.xTics = this.viewModelHelper.GetxTics(tics.value.x);
    this.drawData.tics.yTics = this.viewModelHelper.GetyTics(tics.value.y);

    // LineDatas
    this.drawData.lineDatas = this.viewModelHelper.GetLineDatas(this.graphModel.lineDatas);

    // tableDatas
    const tableDatas = this.viewModelHelper.GetTableDatas(this.graphModel.lineDatas, tics.value.x);
    if (tableDatas) {
      this.drawData.tableData.visible = tableVisible;
      this.drawData.tableData.colors = tableDatas.colors;
      this.drawData.tableData.legends = tableDatas.legends;
      this.drawData.tableData.legendWidth = tableDatas.legendWidth;
      this.drawData.tableData.datas = tableDatas.datas;
    } else {
      this.drawData.tableData.legendWidth = 0;
      this.drawData.tableData.datas = null;
    }
  }

  /**
   * @name InvalidateModel
   * @type function
   * @description
   * Update the viewmodel using the current graph model. Then change viewmodel to invalidated state.
   */
  InvalidateModel(updateType, value) {
    if (!this.graphModel) return;
    switch (updateType) {
      case UPDATE_TYPE.NEW_LINE:
      case UPDATE_TYPE.UPDATE_LINE:
      case UPDATE_TYPE.DELETE_LINE: {
        // value : id;
        // Update Rect, Tics, Table, Lines, Axis, Legends

        // LegendDatas
        this.drawData.legendDatas = this.viewModelHelper.GetLegendDatas(this.graphModel.lineDatas);

        // Rect
        this.drawData.graphRect = this.viewModelHelper.GetGraphRect();
        this.drawData.legendRect = this.viewModelHelper.GetLegendRect();

        if (updateType === UPDATE_TYPE.DELETE_LINE) {
          this.drawData.lineDatas.delete(value);
        } else {
          this.drawData.lineDatas.set(
            value,
            this.viewModelHelper.GetLineData(this.graphModel.lineDatas.get(value))
          );
        }

        // Tics
        this.drawData.tics.xTics = this.viewModelHelper.GetxTics(
          this.graphModel.config.tics.value.x
        );
        this.drawData.tics.yTics = this.viewModelHelper.GetyTics(
          this.graphModel.config.tics.value.y
        );

        // Axis Position
        this.drawData.axis.xLabel.position = this.viewModelHelper.GetAxisXPos(
          this.graphModel.config.axisX.location
        );
        this.drawData.axis.yLabel.position = this.viewModelHelper.GetAxisYPos(
          this.graphModel.config.axisY.location
        );

        // TableDatas
        const tableDatas = this.viewModelHelper.GetTableDatas(
          this.graphModel.lineDatas,
          this.graphModel.config.tics.value.x
        );
        if (tableDatas) {
          this.drawData.tableData.legendWidth = tableDatas.legendWidth;
          this.drawData.tableData.datas = tableDatas.datas;
        } else {
          this.drawData.tableData.legendWidth = 0;
          this.drawData.tableData.datas = null;
        }
        break;
      }
      case UPDATE_TYPE.FONT: {
        // Update Font Table, Legends
        this.drawData.font = this.graphModel.config.font;
        this.viewModelHelper.font = this.graphModel.config.font;

        // legendDatas
        this.drawData.legendDatas = this.viewModelHelper.GetLegendDatas(this.graphModel.lineDatas);

        // tableDatas
        const tableDatas = this.viewModelHelper.GetTableDatas(
          this.graphModel.lineDatas,
          this.graphModel.config.tics.value.x
        );
        if (tableDatas) {
          this.drawData.tableData.legendWidth = tableDatas.legendWidth;
          this.drawData.tableData.datas = tableDatas.datas;
        } else {
          this.drawData.tableData.legendWidth = 0;
          this.drawData.tableData.datas = null;
        }
        break;
      }
      case UPDATE_TYPE.TITLE:
        this.drawData.title.text = this.graphModel.config.title;
        break;
      case UPDATE_TYPE.TITLE_COLOR:
        this.drawData.title.color = this.graphModel.config.titleColor;
        break;
      case UPDATE_TYPE.TITLE_LOCATION:
        this.drawData.title.position = this.viewModelHelper.GetTitlePos(
          this.graphModel.config.titleLocation
        );
        break;
      case UPDATE_TYPE.GRID_VISIBLE:
        this.drawData.grid.visible = this.graphModel.config.gridVisible;
        break;
      case UPDATE_TYPE.GRID_COLOR:
        this.drawData.grid.color = this.graphModel.config.gridColor;
        break;
      case UPDATE_TYPE.BORDER_VISIBLE:
        this.drawData.border.visible = this.graphModel.config.borderVisible;
        break;
      case UPDATE_TYPE.BORDER_COLOR:
        this.drawData.border.color = this.graphModel.config.borderColor;
        break;
      case UPDATE_TYPE.BORDER_WIDTH:
        this.drawData.border.width = this.graphModel.config.borderWidth;
        break;
      case UPDATE_TYPE.TICS_VISIBLE:
        this.drawData.tics.visible = this.graphModel.config.tics.visible;
        break;
      case UPDATE_TYPE.TICS_COLOR:
        this.drawData.tics.color = this.graphModel.config.tics.color;
        break;
      case UPDATE_TYPE.AXISX_VISIBLE:
        this.drawData.axis.xLabel.visible = this.graphModel.config.axisX.visible;
        break;
      case UPDATE_TYPE.AXISX_LABEL:
        this.drawData.axis.xLabel.text = this.graphModel.config.axisX.label;
        break;
      case UPDATE_TYPE.AXISX_LOCATION:
        this.drawData.axis.xLabel.position = this.viewModelHelper.GetAxisXPos(
          this.graphModel.config.axisX.location
        );
        break;
      case UPDATE_TYPE.AXISX_COLOR:
        this.drawData.axis.xLabel.color = this.graphModel.config.axisX.color;
        break;
      case UPDATE_TYPE.AXISY_VISIBLE:
        this.drawData.axis.yLabel.visible = this.graphModel.config.axisY.visible;
        break;
      case UPDATE_TYPE.AXISY_LABEL:
        this.drawData.axis.yLabel.text = this.graphModel.config.axisY.label;
        break;
      case UPDATE_TYPE.AXISY_LOCATION:
        this.drawData.axis.yLabel.position = this.viewModelHelper.GetAxisYPos(
          this.graphModel.config.axisY.location
        );
        break;
      case UPDATE_TYPE.AXISY_COLOR:
        this.drawData.axis.yLabel.color = this.graphModel.config.axisY.color;
        break;
      case UPDATE_TYPE.NEW_TIC:
        this.drawData.tableData.selectedTic = value;
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
}
