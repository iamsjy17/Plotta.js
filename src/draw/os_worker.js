import DrawHelper from './drawhelper';

self.onmessage = (event) => {
  const {
    canvas, width, height, metaDatas
  } = event.data;
  const ctx = canvas.getContext('2d');
  DrawHelper.Draw(ctx, width, height, metaDatas);
};
