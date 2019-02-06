/* eslint-disable no-param-reassign */
import CanvasHelperFactory from './canvasHelperFactory';

class GraphCanvas {
  constructor(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    // Size of scale up Canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    this.canvasHelper = CanvasHelperFactory.Create(canvas, dpr);
  }

  Draw(drawData) {
    if (drawData) this.canvasHelper.Draw(drawData);
  }
}

export default GraphCanvas;
