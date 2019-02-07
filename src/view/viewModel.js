/* eslint-disable max-len */
/* eslint-disable no-console */
import { IsObject } from '../util';
import PosHelper from './posHelper';

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
      legendDatas: null
    };

    this.Init();
  }

  GetDrawData() {
    return this.drawData;
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
      tics
    } = this.graphModel.config;
    this.posHelper = new PosHelper(font, axisX, axisY, this.canvasWidth, this.canvasHeight);

    this.drawData.canvasWidth = this.canvasWidth;
    this.drawData.canvasHeight = this.canvasHeight;

    // LegendDatas
    if (legendVisible) this.drawData.legendDatas = this.posHelper.LegendDatas2CanvasPoint(this.graphModel.lineDatas);

    // ViewRect
    this.drawData.graphRect = this.posHelper.GetGraphRect();
    this.drawData.legendRect = this.posHelper.GetLegendRect();

    // Title
    this.drawData.font = font;
    this.drawData.title.text = title;
    this.drawData.title.color = titleColor;
    this.drawData.title.position = this.posHelper.GetTitlePos(titleLocation);

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
    this.drawData.axis.xLabel.position = this.posHelper.GetAxisXPos(axisX.location);

    // AxisY
    this.drawData.axis.yLabel.visible = axisY.visible;
    this.drawData.axis.yLabel.text = axisY.label;
    this.drawData.axis.yLabel.color = axisY.color;
    this.drawData.axis.yLabel.position = this.posHelper.GetAxisYPos(axisY.location);

    // Tics
    this.drawData.tics.visible = tics.visible;
    this.drawData.tics.color = tics.color;
    this.drawData.tics.xTics = this.posHelper.GetxTics(tics.value.x);
    this.drawData.tics.yTics = this.posHelper.GetyTics(tics.value.y);

    // LineDatas
    this.drawData.lineDatas = this.posHelper.LineDatas2CanvasPoint(this.graphModel.lineDatas);
  }

  InvalidateModel() {
    if (!this.graphModel) return;
    this.Init();
  }
}
