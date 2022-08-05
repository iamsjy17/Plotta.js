import DrawHelper from './drawHelper';

self.onmessage = event => {
  const {canvas, dpr, viewModel} = event.data;
  const _self = self as any;

  if (canvas) {
    _self.canvas = canvas;
    _self.ctx = canvas.getContext('2d');
  }

  if (dpr) {
    _self?.ctx?.scale(dpr, dpr);
  }

  if (viewModel) {
    DrawHelper.Draw(_self?.ctx, viewModel);
  }
};
