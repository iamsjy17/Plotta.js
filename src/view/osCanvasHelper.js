// eslint-disable-next-line import/no-unresolved

/**
 * @name CanvasHelper
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
  constructor(canvas, dpr) {
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
   * @type function
   * @param {Object} drawData
   * @description
   * Pass DrawData to the Worker.
   */
  Draw(drawData) {
    this.worker.postMessage({
      drawData,
    });
  }
}
