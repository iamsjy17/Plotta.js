/**
 * @name OffscreenCanvasHelper
 * @type class
 * @property {Object} presentationCanvas
 * @property {Number} dpr Divice Pixel Ratio
 * @property {Object} offscreenCanvas
 * @property {Object} worker Worker for OffscreenCanvas
 * @param {Object} canvas canvas Element
 * @param {Number} dpr Divice Pixel Ratio
 * @method Draw
 */

export default class OffscreenCanvasHelper {
  presentationCanvas: HTMLCanvasElement;
  offscreenCanvas: OffscreenCanvas;
  dpr: number;
  worker: Worker;

  constructor(canvas: HTMLCanvasElement, dpr: number) {
    this.presentationCanvas = canvas;
    this.offscreenCanvas = this.presentationCanvas.transferControlToOffscreen();
    this.dpr = dpr;
    this.worker = new Worker('./osWorker');
    this.worker.postMessage(
      {
        canvas: this.offscreenCanvas,
        dpr: this.dpr,
      },
      [this.offscreenCanvas]
    );
  }

  /**
   * @name Draw
   * @description
   * Pass DrawData to the Worker.
   */
  Draw(drawData): void {
    this.worker.postMessage({
      drawData,
    });
  }
}
