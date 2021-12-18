import DrawHelper from './drawHelper';

self.onmessage = event => {
  const {canvas, dpr, drawData} = event.data;
  const _self = self as any;

  if (canvas) {
    _self.canvas = canvas;
    _self.ctx = canvas.getContext('2d');
  }

  if (dpr) {
    _self?.ctx?.scale(dpr, dpr);
  }

  if (drawData) {
    DrawHelper.Draw(_self?.ctx, drawData);
  }
};
