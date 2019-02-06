import CanvasHelper from './canvasHelper';
import OffscreenCanvasHelper from './osCanvasHelper';
import Platform from '../platform/platform';

const CanvasHelperFactory = {
  Create(canvas, dpr) {
    if (!canvas) return null;
    if (Platform.IsAvailableOffScreen) return new OffscreenCanvasHelper(canvas, dpr);
    return new CanvasHelper(canvas, dpr);
  }
};

export default CanvasHelperFactory;
