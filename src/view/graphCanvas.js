import CanvasHelperFactory from './canvasHelperFactory';

export default class GraphCanvas {
  constructor(canvas) {
    this.canvasHelper = CanvasHelperFactory.Create(canvas);
  }

  Draw(drawData) {
    if (drawData) this.canvasHelper.Draw(drawData);
  }
}
