import CanvasHelper from './canvasHelper';
import OffscreenCanvasHelper from './osCanvasHelper';
import Platform from '../platform/platform';

const CanvasHelperFactory = {
  Create(canvas) {
    if (!canvas) return null;
    if (Platform.IsAvailableOffScreen()) return new OffscreenCanvasHelper(canvas);
    return new CanvasHelper(canvas);
  }
};

export default CanvasHelperFactory;
