export default class Presenter {
  GraphModel: any;
  GraphView: any;

  constructor(graphModel, graphView) {
    this.GraphModel = graphModel;
    this.GraphView = graphView;

    this.GraphModel.SetViewHandler(this._getviewHandler());
    this.GraphView.SetModelHandler(this._getModelHandler());
  }

  _getviewHandler() {
    return {
      UpdateViewModel: function (updateType, value) {
        this.GraphView.UpdateViewModel(updateType, value);
      }.bind(this),
    };
  }

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
