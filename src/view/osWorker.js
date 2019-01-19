import DrawHelper from '../draw/drawHelper';

self.onmessage = (event) => {
  const {
    canvas, width, height, drawData
  } = event.data;
  const ctx = canvas.getContext('2d');
  DrawHelper.Draw(ctx, width, height, drawData);
};
