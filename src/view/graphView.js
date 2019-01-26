import GraphCanvas from './graphCanvas';
import ViewModel from './viewModel';

export default class GraphView {
  constructor(canvas) {
    this.graphCanvas = new GraphCanvas(canvas);
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    this.ViewModel = null;
    this.modelHandler = null;

    this.eventListener = this.GetEventListener();
    this.eventListener.BindEvent(canvas);
  }

  SetModelHandler(modelHandler) {
    this.modelHandler = modelHandler;
  }

  GetEventListener() {
    const EVENT_TYPE = {
      KEYBOARD: 1,
      MOUSE: 2,
      WHEEL: 4,
      ALL: 7
    };
    const keyboardEventList = ['keydown', 'keyup', 'keypress'];
    const mouseEventList = ['click', 'dbclick', 'mousemove', 'mousedown', 'mouseup'];
    const wheelEventList = ['wheel'];

    const EventDispatcher = function (e) {
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
          this.UpdateModel({ config: { tics: { color: '#FFFFFF' } } });
          break;
        }
        case 'mousemove': {
          break;
        }
        case 'mousedown': {
          break;
        }
        case 'mouseup': {
          break;
        }
        case 'wheel': {
          break;
        }
        default: {
          break;
        }
      }
    };

    const BindEvent = function (targetEl, type) {
      if (!targetEl) return;
      let _type = type;
      if (_type === undefined) _type = EVENT_TYPE.ALL;
      const eventList = [];

      _type & EVENT_TYPE.KEYBOARD && eventList.concat(keyboardEventList);
      _type & EVENT_TYPE.MOUSE && eventList.concat(mouseEventList);
      _type & EVENT_TYPE.WHEEL && eventList.concat(wheelEventList);

      for (let i = 0; i < eventList.length; i++) {
        targetEl.addEventListener(eventList[i], EventDispatcher.bind(this));
      }
    };

    return {
      BindEvent: BindEvent.bind(this)
    };
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
