import GraphModel from './model/graphModel';
import GraphView from './view/graphView';
import Presenter from './presenter/presenter';
import { IsObject } from './util';

class Plotta {
  constructor(canvas, dataSet) {
    this.GraphModel = new GraphModel(dataSet);
    this.GraphView = new GraphView(canvas);
    this.Presenter = new Presenter(this.GraphModel, this.GraphView);
  }
}
