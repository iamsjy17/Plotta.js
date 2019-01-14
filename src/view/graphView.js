import CanvasFactory from './canvasHelperFactory';
import EventListener from '../Event/EventListener';

export default class GraphView {
  constructor(canvas) {
    this.graphCanvas = CanvasFactory.CreateGraphCanvas(canvas);
    this.modelHandeler = null;
    EventListener.BindEvent(canvas);
  }

  UpdateView() {
    if (!this.graphCanvas || !this.modelHandeler) return;

    this.graphCanvas.Draw(this.modelHandeler.GetViewModel());
  }

  SetModelHandler(modelHandeler) {
    if (modelHandeler) this.modelHandeler = modelHandeler;
  }
}
