import {GraphConfig} from '../model/config';
import {UPDATE_TYPE} from '../model/const';
import {LineData} from '../model/lineData';
import {ModelHandler} from '../presenter/presenter';
import GraphCanvas from './graphCanvas';
import ViewModel from './viewModel';

enum EVENT_TYPE {
  KEYBOARD = 1,
  MOUSE = 2,
  WHEEL = 4,
  ALL = 7,
}

/**
 * @name Plotta
 * @type class
 * @property {number} canvasWidth Size of the actual Canvas Width
 * @property {number} canvasHeight Size of the actual Canvas Height
 * @property {GraphCanvas} graphCanvas Instance of GraphCanvas
 * @property {ViewModel} viewModel
 * @property {ModelHandler} modelHandler
 * @param {HTMLCanvasElement} canvas canvas Element
 *
 *
 * See function description
 * @method SetModelHandler
 * @method BindEvent
 * @method UpdateModel
 * @method UpdateViewModel
 * @method Render
 *
 */

export default class GraphView {
  canvasWidth: number;
  canvasHeight: number;
  graphCanvas: GraphCanvas;
  viewModel?: ViewModel;
  modelHandler?: ModelHandler;

  constructor(canvas: HTMLCanvasElement) {
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.graphCanvas = new GraphCanvas(canvas);
    this.viewModel = null;
    this.modelHandler = null;
    this.BindEvent(canvas);
  }

  SetModelHandler(modelHandler: ModelHandler): void {
    this.modelHandler = modelHandler;
    this.UpdateViewModel();
  }

  /**
   * @name BindEvent
   * @param {HTMLCanvasElement} canvasEl Target Element
   */
  BindEvent(canvasEl?: HTMLCanvasElement, type?: EVENT_TYPE): void {
    if (!canvasEl) {
      return;
    }

    let _type = type;

    if (_type === undefined) {
      _type = EVENT_TYPE.ALL;
    }

    let frameTick = false;

    const EventDispatcher = (e: MouseEvent | WheelEvent) => {
      if (frameTick) {
        return;
      }

      frameTick = true;

      requestAnimationFrame(() => {
        frameTick = false;
        const mousePos = {x: e.offsetX, y: e.offsetY};

        if (!this.viewModel || !this.viewModel.IsInGraph(mousePos)) {
          return;
        }

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
            if (!this.graphCanvas || !this.modelHandler || !this.viewModel) {
              return;
            }

            const newTic = this.viewModel.GetNewTic(mousePos);

            if (newTic.result) {
              this.UpdateViewModel(UPDATE_TYPE.NEW_TIC, newTic.selectedTic);
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
            const graphModel = this.modelHandler.GetModel();
            const rangeX = graphModel.config.axisX.range;
            const rangeY = graphModel.config.axisY.range;
            let ticsX = graphModel.config.tics.value.x;
            let ticsY = graphModel.config.tics.value.y;

            const minXrange = ticsX * 3;
            const minYrange = ticsY * 3;
            const maxXrange = ticsX * 100;
            const maxYrange = ticsY * 100;

            if ((e as WheelEvent).deltaY <= 0) {
              if (rangeX.value <= minXrange || rangeY.value <= minYrange) {
                break;
              }
              ticsX *= -1; // ZoomOut
              ticsY *= -1; // ZoomOut
            } else if (rangeX.value >= maxXrange || rangeY.value >= maxYrange) {
              break;
            }

            graphModel.SetAxisXRange({
              start: rangeX.start - ticsX,
              end: rangeX.end + ticsX,
            });

            graphModel.SetAxisYRange({
              start: rangeY.start - ticsY,
              end: rangeY.end + ticsY,
            });

            e.preventDefault();
            break;
          }
          default: {
            break;
          }
        }
      });
    };

    const keyboardEventList = ['keydown', 'keyup', 'keypress'];
    const mouseEventList = ['click', 'dbclick', 'mousemove', 'mousedown', 'mouseup'];
    const wheelEventList = ['wheel'];
    const eventList: string[] = [];

    if (_type & EVENT_TYPE.KEYBOARD) {
      keyboardEventList.forEach(event => {
        eventList.push(event);
      });
    }
    if (_type & EVENT_TYPE.MOUSE) {
      mouseEventList.forEach(event => {
        eventList.push(event);
      });
    }
    if (_type & EVENT_TYPE.WHEEL) {
      wheelEventList.forEach(event => {
        eventList.push(event);
      });
    }

    for (let i = 0; i < eventList.length; i++) {
      canvasEl.addEventListener(eventList[i], EventDispatcher);
    }
  }

  /**
   * @name UpdateModel
   * @Description
   * Update the graph model. Only for properties that exist in the delivered dataSet
   */
  UpdateModel(lineDatas?: LineData[], graphConfig?: Partial<GraphConfig>): void {
    this.modelHandler.UpdateModel(lineDatas, graphConfig);
  }

  /**
   * @name UpdateViewModel
   * @Description
   * If there is no ViewModel, create a new model,
   * and if there is a ViewModel, update the ViewModel to the current graph model.
   * + Render Count++;
   */
  UpdateViewModel(updateType?: UPDATE_TYPE, value?: any): void {
    if (!this.graphCanvas || !this.modelHandler) {
      return;
    }

    if (this.viewModel) {
      this.viewModel.InvalidateModel(updateType, value);
    } else {
      this.viewModel = new ViewModel(this.modelHandler.GetModel(), this.canvasWidth, this.canvasHeight);
    }

    requestAnimationFrame(this.Render.bind(this));
  }

  /**
   * @name Render
   * @Description
   * If the ViewModel is in the Invalidated state
   * and there is a RenderStack that is not drawn, draw it.
   */
  Render(): void {
    if (!this.viewModel.invalidated) {
      return;
    }

    this.graphCanvas.Draw(this.viewModel.GetDrawData());
    this.viewModel.invalidated = false;
  }
}
