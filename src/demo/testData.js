const x2 = x => x * x;
const dataSet = {
  linedatas: [
    {
      id: 'line1',
      type: 'func',
      legend: 'cos',
      color: '#FF69B4',
      visible: true,
      func: Math.cos,
      dotNum: 1000
    },
    {
      id: 'line2',
      type: 'func',
      legend: 'sin',
      color: '#7B68EE',
      visible: true,
      func: Math.sin,
      dotNum: 1000
    },
    {
      id: 'line3',
      type: 'func',
      legend: 'x^2',
      color: '#00FF7F',
      visible: true,
      func: x2,
      dotNum: 1000
    },
    {
      id: 'line4',
      type: 'func',
      legend: 'sinh',
      color: '#72222E',
      visible: true,
      func: Math.sinh,
      dotNum: 1000
    },
    {
      id: 'line5',
      type: 'func',
      legend: 'cosh',
      color: '#AF110F',
      visible: true,
      func: Math.cosh,
      dotNum: 1000
    },
    {
      id: 'line6',
      type: 'func',
      legend: 'tanh',
      color: '#FF110F',
      visible: true,
      func: Math.tanh,
      dotNum: 1000
    }
  ],
  config: {
    font: '',
    legendVisible: true,
    title: {
      location: 'center',
      color: 'red',
      text: 'Hello Graph'
    },
    grid: {
      type: '',
      visible: true,
      color: 'blue'
    },
    border: {
      type: '',
      visible: true,
      color: 'red',
      width: 1
    },
    tics: {
      visible: true,
      color: 'green',
      value: {
        x: 2,
        y: 2
      }
    },
    axis: {
      x: {
        visible: true,
        // type: 'PI',
        label: 'xLabel',
        color: 'red',
        location: 'center',
        range: {
          start: -10,
          end: 10
        }
      },
      y: {
        visible: true,
        label: 'yLabel',
        color: 'blue',
        location: 'center',
        range: {
          start: -10,
          end: 10
        }
      }
    }
  }
};

window.testData = dataSet;
