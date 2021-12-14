import CanvasHelper from './canvasHelper';

const CanvasHelperFactory = {
  Create(canvas: HTMLCanvasElement, dpr: number): CanvasHelper | null {
    if (!canvas) return null;
    // if (Platform.IsAvailableOffScreen) return new OffscreenCanvasHelper(canvas, dpr);
    return new CanvasHelper(canvas, dpr);
  },
};

export default CanvasHelperFactory;
