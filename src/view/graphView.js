import CanvasFactory from './canvasHelperFactory';

export default class GraphView {
  constructor(canvas) {
    this.graphCanvas = CanvasFactory.Create(canvas);
    this.modelHandeler = null;
    this.eventListener = this.GetEventListener();
    this.eventListener.BindEvent(canvas);
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
          this.UpdateView();
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
    if (!this.graphCanvas || !this.modelHandeler) return;

    this.graphCanvas.Draw(this.modelHandeler.GetDrawData());
  }

  UpdateModel(dataSet) {
    this.modelHandeler.UpdateModel(dataSet);
  }

  SetModelHandler(modelHandeler) {
    if (modelHandeler) this.modelHandeler = modelHandeler;
  }
}
