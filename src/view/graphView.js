import GraphCanvas from './graphCanvas';
import ViewModel from './viewModel';

/**
 * @name Plotta
 * @type class
 * @property {Number} canvasWidth Size of the actual Canvas Width
 * @property {Number} canvasHeight Size of the actual Canvas Height
 * @property {Object} graphCanvas Instance of GraphCanvas
 * @property {Object} viewModel
 * @property {Object} modelHandler
 * @property {Number} renderStack Render Command Count
 * @param {Object} canvas canvas Element
 *
 */

export default class GraphView {
  constructor(canvas) {
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.graphCanvas = new GraphCanvas(canvas);
    this.viewModel = null;
    this.modelHandler = null;
    this.renderStack = 0;
    this.BindEvent(canvas);
  }

  SetModelHandler(modelHandler) {
    this.modelHandler = modelHandler;
  }

  /**
   * @name BindEvent
   * @type function
   * @param {Object} targetEl Target Element
   * @param {Number} type Event Type
   */
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

    const EventDispatcher = function (e) {
      const mousePos = { x: e.offsetX, y: e.offsetY };
      if (!this.viewModel || !this.viewModel.IsInGraph(mousePos)) return;
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
          if (!this.graphCanvas || !this.modelHandler || !this.viewModel) return;

          if (this.viewModel.IsNewTic(mousePos)) {
            this.renderStack++; // Render Count++;
          }
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

            this.UpdateModel(dataSet); // UpdateMode -> UpdateViewModel -> Render Count++
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

  /**
   * @name UpdateModel
   * @type function
   * @Description
   * Update the graph model. Only for properties that exist in the delivered dataSet
   */
  UpdateModel(dataSet) {
    this.modelHandler.UpdateModel(dataSet);
  }

  /**
   * @name UpdateViewModel
   * @type function
   * @Description
   * If there is no ViewModel, create a new model,
   * and if there is a ViewModel, update the ViewModel to the current graph model.
   * + Render Count++;
   */
  UpdateViewModel() {
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
    this.renderStack++;
  }

  /**
   * @name Render
   * @type function
   * @Description
   * If the ViewModel is in the Invalidated state
   * and there is a RenderStack that is not drawn, draw it.
   */
  Render() {
    if (this.renderStack > 0 && this.viewModel.invalidated) {
      this.graphCanvas.Draw(this.viewModel.GetDrawData());
      this.renderStack--;
      this.viewModel.invalidated = false;
    }
    requestAnimationFrame(this.Render.bind(this));
  }
}
