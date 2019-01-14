import ViewModel from './viewModel';
import { IsObject } from '../util';

class Presenter {
  constructor(graphModel, graphView) {
    this.GraphModel = graphModel;
    this.GraphView = graphView;
    this.ViewModel = null;

    this.GraphModel.SetViewHandeler(this._getModelHandeler());
    this.GraphView.SetModelHandeler(this._getViewHandeler());
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
        /* Model => ViewModel */
        return this.ViewModel;
      },
      UpdateModel(dataSet) {
        this.GraphModel.UpdateMdel(dataSet);
      }
    }.bind(this);
  }
}
