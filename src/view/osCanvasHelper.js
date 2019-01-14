export default class OffscreenGraphCanvas {
  constructor(canvas) {
    this.presentationCanvas = canvas;
    this.offscreenCanvas = this.presentationCanvas.transferControlToOffscreen();
    this.offscreenContext = this.offscreenCanvas.getContext('2d');
    this.worker = new Worker('./offscreenWorker.js');
  }

  Draw(viewModel) {
    this.worker.postMessage(
      {
        ctx: this.offscreenContext,
        width: this.presentationCanvas.width,
        height: this.presentationCanvas.height,
        viewModel
      },
      [this.offscreenCanvas]
    );
  }
}
