export const EVENT_TYPE = {
  KEYBOARD: 1,
  MOUSE: 2,
  WHEEL: 4,
  ALL: 7
};

const EventListener = {
  keyboardEventList: ['keydown', 'keyup', 'keypress'],
  mouseEventList: ['click', 'dbclick', 'mousemove', 'mousedown', 'mouseup'],
  wheelEventList: ['wheel'],

  BindEvent(targetEl, type) {
    if (!targetEl) return;
    let _type = type;
    if (_type === undefined) _type = EVENT_TYPE.ALL;
    const eventList = [];

    _type & EVENT_TYPE.KEYBOARD && eventList.concat(this.keyboardEventList);
    _type & EVENT_TYPE.MOUSE && eventList.concat(this.mouseEventList);
    _type & EVENT_TYPE.WHEEL && eventList.concat(this.wheelEventList);

    for (let i = 0; i < eventList.length; i++) {
      targetEl.addEventListener(eventList[i], this.EventDispatcher);
    }
  },
  EventDispatcher(e) {
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
  }
};

export default EventListener;
