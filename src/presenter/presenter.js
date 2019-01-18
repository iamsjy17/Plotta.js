import ViewModel from './viewModel';
import { IsObject } from '../util';

class Presenter {
  constructor(graphModel, graphView) {
    this.GraphModel = graphModel;
    this.GraphView = graphView;
    this.ViewModel = new ViewModel(graphModel);

    this.GraphModel.SetViewHandeler(this._getModelHandeler());
    this.GraphView.SetModelHandeler(this._getViewHandeler());
    this.GraphView.UpdateView();
  }

  _getViewHandeler() {
    return {
      UpdateView() {
        this.GraphView.UpdateView();
      }
    }.bind(this);
  }

  _getModelHandeler() {
    return {
      GetViewModel() {
        this.ViewModel.InvalidateModel();
        /* Model => ViewModel */
        return this.ViewModel;
      },
      UpdateModel(dataSet) {
        this.GraphModel.UpdateModel(dataSet);
      }
    }.bind(this);
  }
}
