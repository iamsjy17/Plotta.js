import DrawHelper from './drawHelper';

export default class CanvasHelper {
  constructor(canvas, dpr) {
    this.presentationCanvas = canvas;
    this.dpr = dpr;
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenContext = this.offscreenCanvas.getContext('2d');
    this.offscreenContext.scale(this.dpr, this.dpr);
  }

  Draw(drawData) {
    DrawHelper.Draw(
      this.offscreenContext,
      drawData
    );
    this.presentationContext.drawImage(this.offscreenCanvas);
  }
}
