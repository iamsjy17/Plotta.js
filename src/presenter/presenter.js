import ViewModel from './viewModel';
import { IsObject } from '../util';

export default class Presenter {
  constructor(graphModel, graphView) {
    this.GraphModel = graphModel;
    this.GraphView = graphView;
    this.ViewModel = new ViewModel(graphModel);

    this.GraphModel.SetViewHandler(this._getViewHandeler());
    this.GraphView.SetModelHandler(this._getModelHandeler());
    this.GraphView.UpdateView();
  }

  // eslint-disable-next-line class-methods-use-this
  _getViewHandeler() {
    return {
      UpdateView: function () {
        this.GraphView.UpdateView();
      }.bind(this)
    };
  }

  // eslint-disable-next-line class-methods-use-this
  _getModelHandeler() {
    return {
      GetDrawData: function () {
        this.ViewModel.InvalidateModel();
        /* Model => ViewModel */
        return this.ViewModel.GetDrawData();
      }.bind(this),
      UpdateModel: function (dataSet) {
        this.GraphModel.UpdateModel(dataSet);
      }.bind(this)
    };
  }
}
