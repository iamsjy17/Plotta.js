/* eslint-disable no-param-reassign */
import CanvasHelper from './canvasHelper';
import CanvasHelperFactory from './canvasHelperFactory';
import {ViewModel} from './viewModel';

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
  Draw(viewModel: ViewModel): void {
    if (!viewModel) {
      return;
    }

    this.canvasHelper.Draw(viewModel);
  }
}

export default GraphCanvas;
