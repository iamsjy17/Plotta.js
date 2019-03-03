/* eslint-disable max-len */
/* eslint-disable no-console */
import { IsObject } from '../util';
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
   * @name IsNewTic
   * @type function
   * @return {Boolean}
   * @Description
   * If a new tick is selected, update drawdata's selected tic and change viewmodel to invalidated state. And returns true.
   */
  IsNewTic(mousePos) {
    const selectedTic = this.viewModelHelper.GetSelectedTic(
      mousePos,
      this.drawData.tableData.datas
    );
    if (this.drawData.tableData.selectedTic !== selectedTic) {
      this.drawData.tableData.selectedTic = selectedTic;
      this.invalidated = true;
      return true;
    }
    return false;
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
    if (legendVisible) this.drawData.legendDatas = this.viewModelHelper.GetLegendDatas(this.graphModel.lineDatas);

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
    this.drawData.tableData.visible = tableVisible;
    this.drawData.tableData.colors = tableDatas.colors;
    this.drawData.tableData.legends = tableDatas.legends;
    this.drawData.tableData.legendWidth = tableDatas.legendWidth;
    this.drawData.tableData.datas = tableDatas.datas;
  }

  /**
   * @name InvalidateModel
   * @type function
   * @description
   * Update the viewmodel using the current graph model. Then change viewmodel to invalidated state.
   */
  InvalidateModel() {
    if (!this.graphModel) return;
    this.Init();
    this.invalidated = true;
  }
}
