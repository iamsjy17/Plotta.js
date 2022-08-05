import CanvasHelper from './canvasHelper';
import OffscreenCanvasHelper from './osCanvasHelper';
import Platform from '../platform/platform';

const CanvasHelperFactory = {
  /**
   * @name Create
   * @type function
   * @return {CanvasHelper} Create a canvasHelper for the current platform with the CanvasHelperFactory.
   */
  Create(canvas: HTMLCanvasElement, dpr: number): CanvasHelper | null {
    if (!canvas) return null;
    // if (Platform.IsAvailableOffScreen) return new OffscreenCanvasHelper(canvas, dpr);
    return new CanvasHelper(canvas, dpr);
  },
};

export default CanvasHelperFactory;
