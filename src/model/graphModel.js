import Config from './config';
import LineData from './lineData';
import { IsObject } from '../util';

export default class GraphModel {
  constructor(dataSet) {
    this.lineDatas = new Map();
    this.config = new Config();
    this.Init(dataSet);
    this.viewHandeler = null;
  }

  SetViewHandler(viewHandeler) {
    if (viewHandeler) this.viewHandeler = viewHandeler;
  }

  Init(dataSet) {
    if (!IsObject(dataSet)) return;

    dataSet.linedatas.length
      && dataSet.linedatas.forEach((item) => {
        // TODO: validationCheck
        const {
          id, type, axisX, axisY, legend, color, visible, datas, func, dotNum
        } = item;

        this.lineDatas.set(
          id,
          new LineData(type, axisX, axisY, legend, color, visible, datas, func, dotNum)
        );
      });

    if (IsObject(dataSet.config)) {
      this.config && this.config.Init(dataSet.config);
    }
    if (this.viewHandeler) this.viewHandeler.UpdateView();
  }

  Update(dataSet) {
    if (!IsObject(dataSet)) return;

    dataSet.linedatas.length
      && dataSet.linedatas.forEach((item) => {
        // TODO: validationCheck
        const {
          id, type, axisX, axisY, legend, color, visible, datas, func, dotNum
        } = item;

        if (this.lineDatas.has(id)) {
          this.lineDatas
            .get(id)
            .Update(type, axisX, axisY, legend, color, visible, datas, func, dotNum);
        } else {
          this.lineDatas.set(
            id,
            new LineData(type, axisX, axisY, legend, color, visible, datas, func, dotNum)
          );
        }
      });

    if (IsObject(dataSet.config)) {
      this.config && this.config.Init(dataSet.config);
    }
    if (this.viewHandeler) this.viewHandeler.UpdateView();
  }
}
