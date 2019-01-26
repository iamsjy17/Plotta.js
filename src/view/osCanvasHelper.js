// eslint-disable-next-line import/no-unresolved
import Worker from './osWorker';

export default class OffscreenGraphCanvas {
  constructor(canvas) {
    this.presentationCanvas = canvas;
    this.offscreenCanvas = this.presentationCanvas.transferControlToOffscreen();
    this.worker = new Worker();
  }

  Draw(drawData) {
    this.worker.postMessage(
      {
        canvas: this.offscreenCanvas,
        width: this.presentationCanvas.width,
        height: this.presentationCanvas.height,
        drawData
      },
      [this.offscreenCanvas]
    );
  }
}
