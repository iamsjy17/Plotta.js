'use strict';

var dataSet = {
  linedatas: [{
    id: 'string',
    type: 'string',
    axisY: 'y2',
    legend: 'string',
    color: 'string',
    visible: true,
    data: [0, 1, 2]
  }, {
    id: 'string',
    type: 'string',
    axisX: 'x2',
    legend: 'string',
    color: 'string',
    visible: true,
    func: Math.sin,
    dotNum: 100
  }],

  config: {
    font: 'string',
    title: {
      fontSize: 10,
      text: 'string'
    },
    legend: {
      fontSize: 10,
      location: {
        x: 0,
        y: 0
      }
    },
    grid: {
      type: 'string',
      visible: true
    },
    border: {
      type: 'string',
      visible: true,
      color: 'string',
      width: 1
    },
    axis: {
      color: 'string',
      width: 1,
      fontSize: 10,
      x: {
        type: 'string',
        visible: false,
        label: 'string',
        position: 'string',
        range: {
          start: 0,
          end: 360
        }
      },
      x2: {
        type: 'string',
        visible: false,
        label: 'string',
        position: 'string',
        range: {
          start: 0,
          end: 360
        }
      },
      y: {
        type: 'string',
        visible: false,
        label: 'string',
        position: 'string',
        range: {
          start: 0,
          end: 360
        }
      },
      y2: {
        type: 'string',
        visible: false,
        label: 'string',
        position: 'string',
        range: {
          start: 0,
          end: 360
        }
      },
      tics: {
        type: 'string',
        color: 'string',
        fontSize: 10,
        visible: true,
        value: {
          x: 1,
          y: 1
        }
      }
    }
  }
};