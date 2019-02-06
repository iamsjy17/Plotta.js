import DrawHelper from './drawHelper';

self.onmessage = (event) => {
  const {
    canvas, dpr, drawData
  } = event.data;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  DrawHelper.Draw(ctx, drawData);
};
