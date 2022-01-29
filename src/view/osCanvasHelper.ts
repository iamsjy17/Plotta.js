import {DrawData} from './const';

/**
 * @name OffscreenCanvasHelper
 * @type class
 * @property {HTMLCanvasElement} presentationCanvas
 * @property {OffscreenCanvas} offscreenCanvas
 * @property {number} dpr Divice Pixel Ratio
 * @property {Worker} worker Worker for OffscreenCanvas
 * @param {HTMLCanvasElement} canvas canvas Element
 * @param {number} dpr Divice Pixel Ratio
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
  Draw(drawData: DrawData): void {
    this.worker.postMessage({
      drawData,
    });
  }
}
