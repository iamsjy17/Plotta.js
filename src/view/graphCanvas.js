/* eslint-disable no-param-reassign */
import CanvasHelperFactory from './canvasHelperFactory';

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
  constructor(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    // Scale up the size of the canvas.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    this.canvasHelper = CanvasHelperFactory.Create(canvas, dpr);
  }

  /**
   * @name Draw
   * @type function
   * @param {Object} drawData ViewModel.DrawData
   * @description
   * Call the Draw function of the registered CanvasHelper.
   */
  Draw(drawData) {
    if (drawData) this.canvasHelper.Draw(drawData);
  }
}

export default GraphCanvas;
