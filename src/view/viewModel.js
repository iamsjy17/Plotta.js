/* eslint-disable max-len */
/* eslint-disable no-console */
import { IsObject } from '../util';
import ViewModelHelper from './ViewModelHelper';

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
  }

  GetDrawData() {
    return this.drawData;
  }

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

  IsNewTic(mousePos) {
    const selectedTic = this.viewModelHelper.GetSelectedTic(
      mousePos,
      this.drawData.tableData.datas
    );
    if (this.drawData.tableData.selectedTic !== selectedTic) {
      this.drawData.tableData.selectedTic = selectedTic;
      return true;
    }
    return false;
  }

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

  InvalidateModel() {
    if (!this.graphModel) return;
    this.Init();
  }
}
