import DrawHelper from '../draw/drawHelper';

export default class GraphCanvas {
  constructor(canvas) {
    this.presentationCanvas = canvas;
    this.presentationContext = this.presentationCanvas.getContext('2d');
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenContext = this.offscreenCanvas.getContext('2d');
  }

  Draw(drawData) {
    DrawHelper.Draw(
      this.offscreenContext,
      this.presentationCanvas.width,
      this.presentationCanvas.height,
      drawData
    );
    this.presentationContext.drawImage(this.offscreenCanvas);
  }
}
