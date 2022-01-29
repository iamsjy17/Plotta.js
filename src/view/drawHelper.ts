import {Rect} from '../model/const';
import {
  AxisLabelData,
  BorderData,
  DrawData,
  DrawLineData,
  GridData,
  LegendData,
  TableData,
  TicsData,
  TitleData,
} from './const';

function DrawTitle(ctx: CanvasRenderingContext2D, font: string, title: TitleData): void {
  const {text, color, position} = title;
  ctx.save();
  ctx.font = `20px ${font}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (color) {
    ctx.fillStyle = color;
  }

  ctx.fillText(text, position.x, position.y);
  ctx.restore();
}

function DrawLegends(ctx: CanvasRenderingContext2D, font: string, legendRect: Rect, legendDatas: LegendData[]): void {
  ctx.save();
  ctx.font = `14px ${font}`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  const rectSize = 15;
  const margin = 5;

  legendDatas.forEach(legendData => {
    const {color, legend, point} = legendData;
    ctx.save();
    ctx.fillText(legend, legendRect.x + point.x + rectSize + margin, legendRect.y + point.y);

    if (color) {
      ctx.fillStyle = color;
    }

    ctx.fillRect(legendRect.x + point.x, legendRect.y + point.y, rectSize, rectSize);
    ctx.restore();
  });

  ctx.restore();
}

function DrawAxis(ctx: CanvasRenderingContext2D, font: string, axis: AxisLabelData): void {
  const {xLabel, yLabel} = axis;

  ctx.save();
  ctx.font = `14px ${font}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (xLabel.visible) {
    if (xLabel.color) {
      ctx.fillStyle = xLabel.color;
    }

    ctx.fillText(xLabel.text, xLabel.position.x, xLabel.position.y);
  }

  if (yLabel.visible) {
    ctx.translate(yLabel.position.x, yLabel.position.y);
    ctx.rotate(-0.5 * Math.PI);

    if (yLabel.color) {
      ctx.fillStyle = yLabel.color;
    }

    ctx.fillText(yLabel.text, 0, 0);
  }

  ctx.restore();
}

function DrawBorder(ctx: CanvasRenderingContext2D, rect: Rect, border: BorderData): void {
  const {visible, color, width} = border;

  if (!visible) {
    return;
  }

  ctx.save();

  if (color) {
    ctx.strokeStyle = color;
  }

  if (width) {
    ctx.lineWidth = width;
  }

  ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  ctx.restore();
}

function DrawGrid(ctx: CanvasRenderingContext2D, width: number, height: number, grid: GridData, tics: TicsData): void {
  const {xTics, yTics} = tics;
  const {visible, type, color} = grid;

  if (!visible) {
    return;
  }

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.3;

  xTics.forEach((tic, index, array) => {
    if (index === 0 || index === array.length - 1) {
      return;
    }

    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y);
    ctx.lineTo(tic.x, tic.y - height);
    ctx.stroke();
  });

  yTics.forEach((tic, index, array) => {
    if (index === 0 || index === array.length - 1) {
      return;
    }

    ctx.beginPath();
    ctx.moveTo(tic.x, tic.y);
    ctx.lineTo(tic.x + width, tic.y);
    ctx.stroke();
  });

  ctx.restore();
}

function DrawTics(ctx: CanvasRenderingContext2D, width: number, height: number, tics: TicsData): void {
  const {visible, color, xTics, yTics} = tics;

  if (!visible) {
    return;
  }

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

  xTics.forEach((tic, index) => {
    const yStart = tic.y + ticSize;
    let yEnd;

    if (index === 0) {
      yEnd = tic.y - height;
    } else {
      yEnd = tic.y;
    }

    ctx.beginPath();
    ctx.moveTo(tic.x, yStart);
    ctx.lineTo(tic.x, yEnd);
    ctx.stroke();
    ctx.fillText(String(tic.value), tic.x, tic.y + ticSize + ticValueMargin);
  });
  yTics.forEach((tic, index) => {
    const xStart = tic.x - ticSize;
    let xEnd;

    if (index === 0) {
      xEnd = tic.x + width;
    } else {
      xEnd = tic.x;
    }

    ctx.beginPath();
    ctx.moveTo(xStart, tic.y);
    ctx.lineTo(xEnd, tic.y);
    ctx.stroke();
    ctx.fillText(String(tic.value), tic.x - ticSize - ticValueMargin, tic.y);
  });
  ctx.restore();
}

function DrawLines(ctx: CanvasRenderingContext2D, graphRect: Rect, lineDatas: Map<string, DrawLineData>): void {
  ctx.save();
  ctx.lineWidth = 3;
  const region = new Path2D();
  region.rect(graphRect.x, graphRect.y, graphRect.w, graphRect.h);
  ctx.clip(region, 'evenodd');

  lineDatas.forEach(lineData => {
    const {points, color} = lineData;
    ctx.strokeStyle = color;
    let isStart = true;
    let yCriticalPoint = points[0].y;

    points.forEach(point => {
      if (point.y < graphRect.y) {
        yCriticalPoint = graphRect.y - 5;
      } else if (point.y > graphRect.y + graphRect.h) {
        yCriticalPoint = graphRect.y + graphRect.h + 5;
      }

      if (isStart === true) {
        ctx.beginPath();
        ctx.moveTo(point.x, yCriticalPoint || point.y);
        isStart = false;
      } else {
        ctx.lineTo(point.x, yCriticalPoint || point.y);
      }

      yCriticalPoint = NaN;
    });

    ctx.stroke();
  });

  ctx.restore();
}

function DrawTable(ctx: CanvasRenderingContext2D, font: string, graphRect: Rect, tableData: TableData): void {
  const {visible, selectedTic, colors, legends, legendWidth, datas} = tableData;

  if (!visible || isNaN(selectedTic) || !colors || !legends || !legendWidth || !datas) return;

  const rectSize = 15;
  const margin = 4;

  ctx.save();
  ctx.font = `14px ${font}`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  const selectedTicData = datas[selectedTic];
  if (!selectedTicData || !selectedTicData.canvasPos) return;

  const tableRowPos = [];
  tableRowPos[0] = selectedTicData.canvasPos.y - (rectSize + margin * 2);

  for (let i = 1; i <= selectedTicData.length + 1; i++) {
    tableRowPos[i] = tableRowPos[i - 1] + (rectSize + margin * 2);
  }

  let tableColumnPos = [];
  tableColumnPos[0] = selectedTicData.canvasPos.x + 20;
  tableColumnPos[1] = tableColumnPos[0] + margin * 4 + rectSize + legendWidth;
  tableColumnPos[2] = tableColumnPos[1] + margin * 2 + selectedTicData.width;

  const centerPosX = (graphRect.x + graphRect.w) / 2;
  const tableWidth = tableColumnPos[2] - tableColumnPos[0];
  let tablePoint = null;

  if (selectedTicData.canvasPos.x > centerPosX) {
    tableColumnPos = tableColumnPos.map(pos => pos - tableWidth - 40);
    tablePoint = {x: tableColumnPos[2], y: tableRowPos[0]};
  } else {
    tablePoint = {x: tableColumnPos[0], y: tableRowPos[0]};
  }

  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = 'white';
  ctx.fillRect(
    tableColumnPos[0],
    tableRowPos[0],
    tableColumnPos[2] - tableColumnPos[0],
    tableRowPos[selectedTicData.length + 1] - tableRowPos[0]
  );
  ctx.strokeStyle = '#999999';
  ctx.strokeRect(
    tableColumnPos[0],
    tableRowPos[0],
    tableColumnPos[2] - tableColumnPos[0],
    tableRowPos[selectedTicData.length + 1] - tableRowPos[0]
  );

  for (let i = 1; i <= selectedTicData.length; i++) {
    ctx.beginPath();
    ctx.moveTo(tableColumnPos[0], tableRowPos[i]);
    ctx.lineTo(tableColumnPos[2], tableRowPos[i]);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(tableColumnPos[1], tableRowPos[1]);
  ctx.lineTo(tableColumnPos[1], tableRowPos[selectedTicData.length + 1]);
  ctx.stroke();
  ctx.restore();

  ctx.fillText(`${selectedTic}`, tableColumnPos[0] + margin, tableRowPos[0] + margin);

  for (let i = 0; i < selectedTicData.length; i++) {
    ctx.save();
    ctx.fillText(`${legends[i]}`, tableColumnPos[0] + rectSize + margin * 3, tableRowPos[i + 1] + margin);
    ctx.fillText(`${selectedTicData[i].dataPos.toFixed(3)}`, tableColumnPos[1] + margin, tableRowPos[i + 1] + margin);
    ctx.fillStyle = colors[i];
    ctx.fillRect(tableColumnPos[0] + margin, tableRowPos[i + 1] + margin, rectSize, rectSize);

    if (selectedTicData[i].canvasPos >= graphRect.y && selectedTicData[i].canvasPos <= graphRect.y + graphRect.h) {
      ctx.beginPath();
      ctx.arc(selectedTicData.canvasPos.x, selectedTicData[i].canvasPos, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  ctx.restore();
}

function Draw(ctx: CanvasRenderingContext2D, drawData: DrawData) {
  const {
    font,
    title,
    border,
    axis,
    grid,
    tics,
    lineDatas,
    legendDatas,
    tableData,
    canvasWidth,
    canvasHeight,
    graphRect,
    legendRect,
  } = drawData;

  ctx.font = `12px ${font}`;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  DrawTitle(ctx, font, title);
  DrawBorder(ctx, graphRect, border);
  DrawTics(ctx, graphRect.w, graphRect.h, tics);
  DrawGrid(ctx, graphRect.w, graphRect.h, grid, tics);
  DrawAxis(ctx, font, axis);
  DrawLines(ctx, graphRect, lineDatas);
  DrawLegends(ctx, font, legendRect, legendDatas);
  DrawTable(ctx, font, graphRect, tableData);
}

export default {
  DrawTitle,
  DrawLegends,
  DrawAxis,
  DrawBorder,
  DrawGrid,
  DrawTics,
  DrawLines,
  DrawTable,
  Draw,
};
