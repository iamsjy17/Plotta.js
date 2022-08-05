const xy = x => x;
const testData = {
  lineDatas: [
    {
      id: 'line1',
      type: 'func',
      legend: 'cos',
      color: '#55A8DE',
      visible: true,
      func: Math.cos,
      dotNum: 1000,
    },
    {
      id: 'line2',
      type: 'func',
      legend: 'sin',
      color: '#A2CCB6',
      visible: true,
      func: Math.sin,
      dotNum: 1000,
    },
    {
      id: 'line3',
      type: 'func',
      legend: 'x = y',
      color: '#C94346',
      visible: true,
      func: xy,
      dotNum: 1000,
    },
    {
      id: 'line4',
      type: 'func',
      legend: 'sinh',
      color: '#F7CE6F',
      visible: true,
      func: Math.sinh,
      dotNum: 1000,
    },
    {
      id: 'line5',
      type: 'func',
      legend: 'cosh',
      color: '#9168F6',
      visible: true,
      func: Math.cosh,
      dotNum: 1000,
    },
  ],
  graphConfig: {
    font: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    legendVisible: true,
    title: {
      visible: true,
      location: 'center',
      color: '#666666',
      text: 'Plotta.ts',
    },
    grid: {
      visible: true,
      type: 'solid',
      color: '#888888',
    },
    border: {
      visible: true,
      type: 'solid',
      color: '#DDDDDD',
      width: 1,
    },
    tableVisible: true,
    axisX: {
      visible: true,
      type: 'number',
      label: 'X',
      color: '#666666',
      location: 'center',
      range: {
        start: -10,
        end: 10,
      },
    },
    axisY: {
      visible: true,
      type: 'number',
      label: 'Y',
      color: '#666666',
      location: 'middle',
      range: {
        start: -10,
        end: 10,
      },
    },
    tics: {
      visible: true,
      color: '#888888',
      type: 'solid',
      value: {
        x: 2,
        y: 2,
      },
    },
  },
};
export default testData;
window.testData = testData;
