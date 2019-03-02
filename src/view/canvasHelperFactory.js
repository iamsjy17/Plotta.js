import CanvasHelper from './canvasHelper';
import OffscreenCanvasHelper from './osCanvasHelper';
import Platform from '../platform/platform';

/**
 * @name CanvasHelperFactory
 * @type Object
 * @method Create
 */

const CanvasHelperFactory = {
  /**
   * @name BindEvent
   * @type function
   * @param {Object} canvas canvas Element
   * @param {Number} Divice Pixel Ratio
   * @return {Object} Create a canvasHelper for the current platform with the CanvasHelperFactory.
   */
  Create(canvas, dpr) {
    if (!canvas) return null;
    if (Platform.IsAvailableOffScreen) return new OffscreenCanvasHelper(canvas, dpr);
    return new CanvasHelper(canvas, dpr);
  }
};

export default CanvasHelperFactory;
