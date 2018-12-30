export default class OffscreenGraphCanvas {
  constructor(canvas) {
    this.presentationCanvas = canvas;
    this.renderCanvas = this.presentationCanvas.transferControlToOffscreen();
    this.worker = new Worker('./offscreenWorker.js');
  }

  Draw(metaDatas) {
    this.worker.postMessage(
      {
        canvas: this.renderCanvas,
        width: this.renderCanvas.width,
        height: this.renderCanvas.height,
        metaDatas
      },
      [this.renderCanvas]
    );
  }
}
