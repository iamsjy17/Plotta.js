import GraphCanvas from './graphcanvas';
import OffscreenGraphCanvas from './os_graphcanvas';
import Platform from '../platform/platform';

const CanvasFactory = {};

CanvasFactory.CreateRenderCanvas = (canvas) => {
  if (!canvas) return null;
  if (Platform.IsAvailableOffScreen()) return new OffscreenGraphCanvas(canvas);
  return new GraphCanvas(canvas);
};

export default CanvasFactory;
