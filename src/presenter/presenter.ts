import GraphModel from '../model/graphModel';
import GraphView from '../view/graphView';
import {UPDATE_TYPE} from '../model/model';
import {LineData} from '../model/lineData';
import {GraphConfig} from '../model/config';

export interface ViewHandler {
  UpdateViewModel: (updateType?: UPDATE_TYPE, value?: any) => void;
}

export interface ModelHandler {
  GetModel: () => GraphModel;
  UpdateModel: (lineDatas?: LineData[], graphConfig?: Partial<GraphConfig>) => void;
}

export default class Presenter {
  GraphModel: GraphModel;
  GraphView: GraphView;

  constructor(graphModel: GraphModel, graphView: GraphView) {
    this.GraphModel = graphModel;
    this.GraphView = graphView;

    this.GraphModel.SetViewHandler(this.getviewHandler());
    this.GraphView.SetModelHandler(this.getModelHandler());
  }

  private getviewHandler(): ViewHandler {
    return {
      UpdateViewModel: (updateType: UPDATE_TYPE, value: any) => this.GraphView.UpdateViewModel(updateType, value),
    };
  }

  private getModelHandler(): ModelHandler {
    return {
      GetModel: () => this.GraphModel,
      UpdateModel: (lineDatas?: LineData[], graphConfig?: GraphConfig) =>
        this.GraphModel.UpdateModel(lineDatas, graphConfig),
    };
  }
}
