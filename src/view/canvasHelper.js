import DrawHelper from './drawHelper';

export default class CanvasHelper {
  constructor(canvas, dpr) {
    this.presentationCanvas = canvas;
    this.dpr = dpr;
    this.backgroundCanvas = document.createElement('canvas');
    this.backgroundContext = this.backgroundCanvas.getContext('2d');
    this.backgroundContext.scale(this.dpr, this.dpr);
  }

  Draw(drawData) {
    DrawHelper.Draw(this.backgroundContext, drawData);
    this.presentationContext.drawImage(this.backgroundCanvas);
  }
}
