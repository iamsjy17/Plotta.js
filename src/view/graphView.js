import GraphCanvas from './graphCanvas';
import ViewModel from './viewModel';

export default class GraphView {
  constructor(canvas) {
    //  Size of the actual Canvas
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    this.graphCanvas = new GraphCanvas(canvas);
    this.ViewModel = null;
    this.modelHandler = null;

    this.BindEvent(canvas);
  }

  SetModelHandler(modelHandler) {
    this.modelHandler = modelHandler;
  }

  BindEvent(targetEl, type) {
    if (!targetEl) return;

    const EVENT_TYPE = {
      KEYBOARD: 1,
      MOUSE: 2,
      WHEEL: 4,
      ALL: 7
    };

    let _type = type;
    if (_type === undefined) _type = EVENT_TYPE.ALL;

    const OnMouseMove = function (mousePos) {
      if (!this.graphCanvas || !this.modelHandler || !this.viewModel) return;

      if (this.viewModel.IsNewTic(mousePos)) this.graphCanvas.Draw(this.viewModel.GetDrawData());
    }.bind(this);

    const OnZoomInOut = function (dataSet) {
      this.UpdateModel(dataSet);
      this.UpdateView();
    }.bind(this);

    const EventDispatcher = function (e) {
      const mousePos = { x: e.offsetX, y: e.offsetY };
      if (!this.viewModel.IsInGraph(mousePos)) return;
      switch (e.type) {
        case 'keydown': {
          break;
        }
        case 'keyup': {
          break;
        }
        case 'keypress': {
          break;
        }
        case 'click': {
          break;
        }
        case 'dbclick': {
          break;
        }
        case 'mousemove': {
          OnMouseMove(mousePos);
          break;
        }
        case 'mousedown': {
          break;
        }
        case 'mouseup': {
          break;
        }
        case 'wheel': {
          if (e.ctrlKey === true) {
            const curModel = this.modelHandler.GetModel();
            const rangeX = curModel.config.axisX.range;
            const rangeY = curModel.config.axisY.range;
            let ticsX = curModel.config.tics.value.x;
            let ticsY = curModel.config.tics.value.y;

            const minXrange = ticsX * 3;
            const minYrange = ticsY * 3;
            const maxXrange = ticsX * 100;
            const maxYrange = ticsY * 100;

            if (e.deltaY <= 0) {
              if (rangeX.value <= minXrange || rangeY.value <= minYrange) {
                break;
              }
              ticsX *= -1; // ZoomOut
              ticsY *= -1; // ZoomOut
            } else if (rangeX.value >= maxXrange || rangeY.value >= maxYrange) {
              break;
            }

            const dataSet = {
              config: {
                axis: {
                  x: {
                    range: {
                      start: rangeX.start - ticsX,
                      end: rangeX.end + ticsX
                    }
                  },
                  y: {
                    range: {
                      start: rangeY.start - ticsY,
                      end: rangeY.end + ticsY
                    }
                  }
                }
              }
            };
            OnZoomInOut(dataSet);
          }
          break;
        }
        default: {
          break;
        }
      }
    }.bind(this);

    const keyboardEventList = ['keydown', 'keyup', 'keypress'];
    const mouseEventList = ['click', 'dbclick', 'mousemove', 'mousedown', 'mouseup'];
    const wheelEventList = ['wheel'];
    const eventList = [];

    if (_type & EVENT_TYPE.KEYBOARD) {
      keyboardEventList.forEach((event) => {
        eventList.push(event);
      });
    }
    if (_type & EVENT_TYPE.MOUSE) {
      mouseEventList.forEach((event) => {
        eventList.push(event);
      });
    }
    if (_type & EVENT_TYPE.WHEEL) {
      wheelEventList.forEach((event) => {
        eventList.push(event);
      });
    }

    for (let i = 0; i < eventList.length; i++) {
      targetEl.addEventListener(eventList[i], EventDispatcher);
    }
  }

  UpdateView() {
    if (!this.graphCanvas || !this.modelHandler) return;

    if (this.viewModel) {
      this.viewModel.InvalidateModel();
    } else {
      this.viewModel = new ViewModel(
        this.modelHandler.GetModel(),
        this.canvasWidth,
        this.canvasHeight
      );
    }

    this.graphCanvas.Draw(this.viewModel.GetDrawData());
  }

  UpdateModel(dataSet) {
    this.modelHandler.UpdateModel(dataSet);
  }
}
