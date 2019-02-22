import DrawHelper from './drawHelper';

self.onmessage = (event) => {
  const { canvas, dpr, drawData } = event.data;
  if (canvas) {
    self.canvas = canvas;
    self.ctx = canvas.getContext('2d');
  }

  if (dpr) {
    self.ctx.scale(dpr, dpr);
  }

  if (drawData) {
    DrawHelper.Draw(self.ctx, drawData);
  }
};
