/* eslint-disable no-param-reassign */
import CanvasHelper from './canvasHelper';
import CanvasHelperFactory from './canvasHelperFactory';
import {DrawData} from './const';

/**
 * @name Plotta
 * @type class
 * @param {Object} canvasHelper
 * Create a canvasHelper for the current platform with the CanvasHelperFactory.
 *
 * See function description
 * @method Draw
 */

class GraphCanvas {
  canvasHelper: CanvasHelper;

  constructor(canvas: HTMLCanvasElement) {
    const dpr = window.devicePixelRatio || 1;
    const {width, height} = canvas;
    // Scale up the size of the canvas.
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    this.canvasHelper = CanvasHelperFactory.Create(canvas, dpr);
  }

  /**
   * @name Draw
   * @description
   * Call the Draw function of the registered CanvasHelper.
   */
  Draw(drawData: DrawData): void {
    if (!drawData) {
      return;
    }

    this.canvasHelper.Draw(drawData);
  }
}

export default GraphCanvas;
