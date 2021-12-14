import DrawHelper from './drawHelper';

/**
 * @name CanvasHelper
 * @type class
 * @property {Object} presentationCanvas
 * @property {Number} dpr Divice Pixel Ratio
 * @property {Object} backgroundCanvas
 * @property {Object} backgroundContext
 * @param {Object} canvas canvas Element
 * @param {Number} dpr Divice Pixel Ratio
 * @method Draw
 */
export default class CanvasHelper {
  constructor(canvas, dpr) {
    this.presentationCanvas = canvas;
    this.backgroundCanvas = document.createElement('canvas');
    this.backgroundCanvas.width = this.presentationCanvas.width;
    this.backgroundCanvas.height = this.presentationCanvas.height;

    this.presentationContext = this.presentationCanvas.getContext('2d');
    this.backgroundContext = this.backgroundCanvas.getContext('2d');

    this.dpr = dpr;
    this.backgroundContext.scale(this.dpr, this.dpr);
  }

  /**
   * @name Draw
   * @type function
   * @param {Object} drawData
   */
  Draw(drawData) {
    DrawHelper.Draw(this.backgroundContext, drawData);
    this.presentationContext.clearRect(0, 0, this.presentationCanvas.width, this.presentationCanvas.height);
    this.presentationContext.drawImage(this.backgroundCanvas, 0, 0);
  }
}
