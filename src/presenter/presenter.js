import { IsObject } from '../util';

/**
 * @name Presenter
 * @type class
 * @property {Object} GraphModel
 * @property {Object} GraphView
 *
 */
export default class Presenter {
  constructor(graphModel, graphView) {
    this.GraphModel = graphModel;
    this.GraphView = graphView;
    this.GraphModel.SetViewHandler(this._getviewHandler());
    this.GraphView.SetModelHandler(this._getModelHandler());
  }

  // eslint-disable-next-line class-methods-use-this
  _getviewHandler() {
    return {
      UpdateViewModel: function (updateType, value) {
        this.GraphView.UpdateViewModel(updateType, value);
      }.bind(this),
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
      }.bind(this),
    };
  }
}
