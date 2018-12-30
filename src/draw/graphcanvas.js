import DrawHelper from './drawhelper';

export default class GraphCanvas {
  constructor(canvas) {
    this.presentationCanvas = canvas;
    this.presentationContext = this.presentationCanvas.getContext('2d');
    this.renderCanvas = document.createElement('canvas');
    this.renderContext = this.renderCanvas.getContext('2d');
  }

  Draw(metaDatas) {
    DrawHelper.Draw(
      this.renderContext,
      this.presentationCanvas.width,
      this.presentationCanvas.height,
      metaDatas
    );
    this.presentationContext.drawImage(this.renderCanvas);
  }
}
