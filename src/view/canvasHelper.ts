import DrawHelper from './drawHelper';

export default class CanvasHelper {
  presentationCanvas: HTMLCanvasElement;
  backgroundCanvas: HTMLCanvasElement;
  presentationContext: CanvasRenderingContext2D;
  backgroundContext: CanvasRenderingContext2D;
  dpr: number;

  constructor(canvas: HTMLCanvasElement, dpr: number) {
    this.presentationCanvas = canvas;
    this.backgroundCanvas = document.createElement('canvas');
    this.backgroundCanvas.width = this.presentationCanvas.width;
    this.backgroundCanvas.height = this.presentationCanvas.height;

    this.presentationContext = this.presentationCanvas.getContext('2d');
    this.backgroundContext = this.backgroundCanvas.getContext('2d');

    this.dpr = dpr;
    this.backgroundContext.scale(this.dpr, this.dpr);
  }

  Draw(drawData) {
    DrawHelper.Draw(this.backgroundContext, drawData);
    this.presentationContext.clearRect(0, 0, this.presentationCanvas.width, this.presentationCanvas.height);
    this.presentationContext.drawImage(this.backgroundCanvas, 0, 0);
  }
}
