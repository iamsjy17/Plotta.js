import CanvasHelperFactory from './canvasHelperFactory';

export default class GraphCanvas {
  constructor(canvas) {
    this.canvasHelper = CanvasHelperFactory.Create(canvas);
  }

  Update(viewModel) {
    this.canvasHelper.Draw(viewModel);
  }
}
