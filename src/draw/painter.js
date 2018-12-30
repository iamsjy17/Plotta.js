import CanvasFactory from './canvasfactory';

export default class Painter {
  constructor(canvas) {
    this.graphCanvas = CanvasFactory.CreateRenderCanvas(canvas);
  }

  Draw(lineDatas, config) {
    if (!this.graphCanvas) return;

    /*
      data Convert
    */
    const metaDatas = [];
    this.graphCanvas.Draw(metaDatas);
  }
}
