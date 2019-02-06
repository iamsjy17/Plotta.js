import Config from './config';
import LineData from './lineData';
import { IsObject } from '../util';

export default class GraphModel {
  constructor(dataSet) {
    this.Invalidated = true;
    this.lineDatas = new Map();
    this.config = new Config();
    this.InitModel(dataSet);
    this.viewHandler = null;
  }

  SetViewHandler(viewHandler) {
    this.viewHandler = viewHandler;
  }

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

  UpdateModel(dataSet) {
    if (!IsObject(dataSet)) return;

    dataSet.linedatas.length
      && dataSet.linedatas.forEach((item) => {
        const {
          id, type, legend, color, visible, datas, func, dotNum
        } = item;

        if (this.lineDatas.has(id)) {
          this.lineDatas.get(id).Update(type, legend, color, visible, datas, func, dotNum);
        } else {
          this.lineDatas.set(id, new LineData(type, legend, color, visible, datas, func, dotNum));
        }
      });

    if (IsObject(dataSet.config)) {
      this.config && this.config.Init(dataSet.config);
    }
    if (this.viewHandler) this.viewHandler.UpdateView();
  }
}
