// eslint-disable-next-line import/no-unresolved
import Worker from './osWorker';

export default class OffscreenCanvasHelper {
  constructor(canvas, dpr) {
    this.presentationCanvas = canvas;
    this.offscreenCanvas = this.presentationCanvas.transferControlToOffscreen();
    this.dpr = dpr;
    this.worker = new Worker();
    this.worker.postMessage(
      {
        canvas: this.offscreenCanvas,
        dpr: this.dpr
      },
      [this.offscreenCanvas]
    );
  }

  Draw(drawData) {
    this.worker.postMessage({
      drawData
    });
  }
}
