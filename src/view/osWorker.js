import DrawHelper from '../draw/drawHelper';

self.onmessage = (event) => {
  const {
    ctx, width, height, viewModel
  } = event.data;
  DrawHelper.Draw(ctx, width, height, viewModel);
};
