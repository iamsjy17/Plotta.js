const dataSet = {
  linedatas: [
    {
      id: 'line1',
      type: 'data',
      legend: 'dummyData',
      color: '#FFA500',
      visible: true,
      datas: [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 3 }]
    },
    {
      id: 'line2',
      type: 'func',
      legend: 'Sin',
      color: '#FFAAAA',
      visible: true,
      func: Math.sin,
      dotNum: 100
    }
  ],

  config: {
    font: 'Arial',
    title: 'Hello Graph',
    grid: {
      type: '',
      visible: true
    },
    border: {
      type: '',
      visible: true,
      color: '#AFAAFA',
      width: 1
    },
    axis: {
      x: {
        type: 'string',
        visible: true,
        label: 'xLabel',
        position: 'string',
        range: {
          start: 0,
          end: 360
        }
      },
      y: {
        type: 'string',
        visible: true,
        label: 'yLabel',
        position: 'string',
        range: {
          start: 0,
          end: 360
        }
      },
      tics: {
        type: '',
        color: '#AFAAFA',
        visible: true,
        value: {
          x: 1,
          y: 1
        }
      }
    }
  }
};

window.testData = dataSet;
