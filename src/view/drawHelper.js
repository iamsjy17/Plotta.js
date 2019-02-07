const DrawHelper = {};

DrawHelper.DrawTitle = function (ctx, font, title) {
  const { text, color, position } = title;
  ctx.save();
  ctx.font = `20px ${font}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (color) ctx.fillStyle = color;
  ctx.fillText(text, position.x, position.y);
  ctx.restore();
};

DrawHelper.DrawLegends = function (ctx, font, legendRect, legendDatas) {
  ctx.save();
  ctx.font = `14px ${font}`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  const rectSize = 15;
  const margin = 5;
  legendDatas.forEach((legendData) => {
    const { color, legend, point } = legendData;
    ctx.save();
    ctx.fillText(legend, legendRect.x + point.x + rectSize + margin, legendRect.y + point.y);
    if (color) ctx.fillStyle = color;
    ctx.fillRect(legendRect.x + point.x, legendRect.y + point.y, rectSize, rectSize);
    ctx.restore();
  });
  ctx.restore();
};

DrawHelper.DrawAxis = function (ctx, font, axis) {
  const { xLabel, yLabel } = axis;

  ctx.save();
  ctx.font = `14px ${font}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (xLabel.visible) {
    if (xLabel.color) ctx.fillStyle = xLabel.color;
    ctx.fillText(xLabel.text, xLabel.position.x, xLabel.position.y);
  }

  if (yLabel.visible) {
    ctx.translate(yLabel.position.x, yLabel.position.y);
    ctx.rotate(-0.5 * Math.PI);
    if (yLabel.color) ctx.fillStyle = yLabel.color;
    ctx.fillText(yLabel.text, 0, 0);
  }
  ctx.restore();
};

DrawHelper.DrawBorder = function (ctx, rect, border) {
  const {
    visible, type, color, width
  } = border;

  if (!visible) return;

  ctx.save();
  if (color) ctx.strokeStyle = color;
  if (width) ctx.lineWidth = width;
  ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  ctx.restore();
};

DrawHelper.DrawGrid = function (ctx, width, height, grid, tics) {
  const { xTics, yTics } = tics;
  const { visible, type, color } = grid;
  if (!visible) return;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.3;

  xTics.forEach((tic) => {
    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y);
    ctx.lineTo(tic.x, tic.y - height);
    ctx.stroke();
  });
  yTics.forEach((tic) => {
    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y);
    ctx.lineTo(tic.x + width, tic.y);
    ctx.stroke();
  });
  ctx.restore();
};

DrawHelper.DrawTics = function (ctx, tics) {
  const {
    visible, color, xTics, yTics
  } = tics;

  if (!visible) return;

  const ticSize = 10;
  const ticValueMargin = 15;

  ctx.save();
  if (color) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  }
  ctx.lineWidth = 0.3;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  xTics.forEach((tic) => {
    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y + ticSize);
    ctx.lineTo(tic.x, tic.y);
    ctx.stroke();
    ctx.fillText(tic.value, tic.x, tic.y + ticSize + ticValueMargin);
  });
  yTics.forEach((tic) => {
    ctx.beginPath();
    ctx.moveTo(tic.x - ticSize, tic.y);
    ctx.lineTo(tic.x, tic.y);
    ctx.stroke();
    ctx.fillText(tic.value, tic.x - ticSize - ticValueMargin, tic.y);
  });
  ctx.restore();
};

DrawHelper.DrawLines = function (ctx, graphRect, lineDatas) {
  ctx.save();
  ctx.lineWidth = 3;
  const region = new Path2D();
  region.rect(graphRect.x, graphRect.y, graphRect.w, graphRect.h);
  ctx.clip(region, 'evenodd');
  lineDatas.forEach((lineData) => {
    const { points, color } = lineData;
    ctx.strokeStyle = color;
    // let isTop = false;
    // let isBottom = false;
    let isStart = true;
    // const isEnd = false;
    let yCriticalPoint = points[0].y;
    points.forEach((point, index) => {
      if (point.y < graphRect.y) {
        // if (isTop) {
        // return;
        // }
        // isTop = true;
        // isBottom = false;
        // isEnd = true;
        yCriticalPoint = graphRect.y - 1;
      } else if (point.y > graphRect.y + graphRect.h) {
        // if (isBottom) {
        // return;
        // }
        // isTop = false;
        // isBottom = true;
        // isEnd = true;
        yCriticalPoint = graphRect.y + graphRect.h + 1;
      }

      if (isStart === true) {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        isStart = false;
        // isEnd = false;
        // } else if (isEnd === true) {
        // ctx.lineTo(point.x, yCriticalPoint || point.y);
        // ctx.stroke();
        // isStart = true;
        // isEnd = false;
      } else {
        ctx.lineTo(point.x, yCriticalPoint || point.y);
        // isTop = false;
        // isBottom = false;
      }
      yCriticalPoint = NaN;
    });
    ctx.stroke();
  });
  ctx.restore();
};

DrawHelper.Draw = function (ctx, drawData) {
  const {
    font,
    title,
    legend,
    border,
    axis,
    grid,
    tics,
    lineDatas,
    legendDatas,
    canvasWidth,
    canvasHeight,
    graphRect,
    legendRect
  } = drawData;
  ctx.font = `12px ${font}`;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  DrawHelper.DrawTitle(ctx, font, title);
  DrawHelper.DrawBorder(ctx, graphRect, border);
  DrawHelper.DrawTics(ctx, tics);
  DrawHelper.DrawGrid(ctx, graphRect.w, graphRect.h, grid, tics);
  DrawHelper.DrawAxis(ctx, font, axis);
  DrawHelper.DrawLines(ctx, graphRect, lineDatas);
  DrawHelper.DrawLegends(ctx, font, legendRect, legendDatas);
};

export default DrawHelper;
