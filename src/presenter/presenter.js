import { IsObject } from '../util';

export default class Presenter {
  constructor(graphModel, graphView) {
    this.GraphModel = graphModel;
    this.GraphView = graphView;

    this.GraphModel.SetViewHandler(this._getviewHandler());
    this.GraphView.SetModelHandler(this._getModelHandler());
    this.GraphView.UpdateView();
  }

  // eslint-disable-next-line class-methods-use-this
  _getviewHandler() {
    return {
      UpdateView: function () {
        this.GraphView.UpdateView();
      }.bind(this)
    };
  }

  // eslint-disable-next-line class-methods-use-this
  _getModelHandler() {
    return {
      GetModel: function () {
        return this.GraphModel;
      }.bind(this),
      UpdateModel: function (dataSet) {
        this.GraphModel.UpdateModel(dataSet);
      }.bind(this)
    };
  }
}
