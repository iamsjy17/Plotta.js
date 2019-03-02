import GraphModel from './model/graphModel';
import GraphView from './view/graphView';
import Presenter from './presenter/presenter';
import { IsObject } from './util';

/**
 * @name Plotta
 * @type class
 * @property {Object} GraphModel
 * @property {Object} GraphView
 * @property {Object} Presenter
 *
 * @param {Object} canvas canvas Element
 * @param {Object} dataSet data Object
 *
 * @example
 * var plotta = new Plotta(canvas, {
 *  linedatas: [
 *   {
 *     id: 'line1',
 *     type: 'func',
 *     legend: 'cos',
 *     color: '#55A8DE',
 *     visible: true,
 *     func: Math.cos,
 *     dotNum: 1000
 *   }
 * ],
 * config: {
 *   font: '',
 *   legendVisible: true,
 *   title: {
 *     location: 'center',
 *     color: '#666666',
 *     text: 'Plotta.js'
 *   },
 *   grid: {
 *     type: '',
 *     visible: true,
 *     color: '#888888'
 *   },
 *   border: {
 *     type: '',
 *     visible: true,
 *     color: '#DDDDDD',
 *     width: 1
 *   },
 *   tics: {
 *     visible: true,
 *     color: '#888888',
 *     value: {
 *       x: 2,
 *       y: 2
 *     }
 *   },
 *   axis: {
 *     x: {
 *       visible: true,
 *       label: 'X',
 *       color: '#666666',
 *       location: 'center',
 *       range: {
 *         start: -10,
 *         end: 10
 *       }
 *     },
 *     y: {
 *       visible: true,
 *       label: 'Y',
 *       color: '#666666',
 *       location: 'center',
 *       range: {
 *         start: -10,
 *         end: 10
 *       }
 *     }
 *   },
 *   table: {
 *     visible: true
 *   }
 * }
 * });
 *
 */

export default class Plotta {
  constructor(canvas, dataSet) {
    this.GraphModel = new GraphModel(dataSet);
    this.GraphView = new GraphView(canvas);
    this.Presenter = new Presenter(this.GraphModel, this.GraphView);
  }
}

window.Plotta = Plotta;
