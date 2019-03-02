import CanvasHelper from './canvasHelper';
import OffscreenCanvasHelper from './osCanvasHelper';
import Platform from '../platform/platform';

/**
 * @name CanvasHelperFactory
 * @type Object
 * @method Create
 * Create a canvasHelper for the current platform with the CanvasHelperFactory.
 */

const CanvasHelperFactory = {
  Create(canvas, dpr) {
    if (!canvas) return null;
    if (Platform.IsAvailableOffScreen) return new OffscreenCanvasHelper(canvas, dpr);
    return new CanvasHelper(canvas, dpr);
  }
};

export default CanvasHelperFactory;
