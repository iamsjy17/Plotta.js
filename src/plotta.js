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
 * @method UpdateGraph
 * @method AddLine
 * @method DeleteLine
 * @method UpdateLine
 * @method SetFont
 * @method SetTitle
 * @method SetTitleColor
 * @method SetTitleLocation
 * @method ShowGrid
 * @method SetGridColor
 * @method ShowBorder
 * @method SetBorderColor
 * @method SetBorderWidth
 * @method ShowTics
 * @method SetTicsColor
 * @method SetTicsValue
 * @method ShowAxisXLabel
 * @method SetAxisXLabel
 * @method SetAxisXLabelLocation
 * @method SetAxisXLabelColor
 * @method ShowAxisYLabel
 * @method SetAxisYLabel
 * @method SetAxisYLabelLocation
 * @method SetAxisYLabelColor
 * @method ShowTable
 * @method SaveAsPDF
 * @method SaveAsImage
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

  /**
   * @name UpdateGraph
   * @type function
   * @Description
   * Update all graph data.
   */
  UpdateGraph(dataSet) {
    this.GraphModel.UpdateModel(dataSet);
  }

  /**
   * @name AddLine
   * @type function
   * @Description
   * Add New Line.
   */
  AddLine(lineData) {
    this.GraphModel.AddLine(lineData);
  }

  /**
   * @name DeleteLine
   * @type function
   */
  DeleteLine(id) {
    this.GraphModel.DeleteLine(id);
  }

  /**
   * @name UpdateLine
   * @type function
   * @Description
   * Update the line data.
   */
  UpdateLine(lineData) {
    this.GraphModel.UpdateLine(lineData);
  }

  /**
   * @name Font
   * @type function
   */
  SetFont(font) {
    this.GraphModel.SetFont(font);
  }

  /**
   * @name Title
   * @type function
   * @Description
   * Title text, color, location
   */
  SetTitle(title) {
    this.GraphModel.SetTitle(title);
  }

  SetTitleColor(color) {
    this.GraphModel.SetTitleColor(color);
  }

  SetTitleLocation(location) {
    this.GraphModel.SetTitleLocation(location);
  }

  /**
   * @name Grid
   * @type function
   * @Description
   * Grid show, color
   */
  ShowGrid(show) {
    this.GraphModel.ShowGrid(show);
  }

  SetGridColor(color) {
    this.GraphModel.SetGridColor(color);
  }

  /**
   * @name Border
   * @type function
   * @Description
   * Border show, color, width
   */
  ShowBorder(show) {
    this.GraphModel.ShowBorder(show);
  }

  SetBorderColor(color) {
    this.GraphModel.SetBorderColor(color);
  }

  SetBorderWidth(width) {
    this.GraphModel.SetBorderWidth(width);
  }

  /**
   * @name Tics
   * @type function
   * @Description
   * Tics show, x-y value, color
   */
  ShowTics(show) {
    this.GraphModel.ShowTics(show);
  }

  SetTicsColor(color) {
    this.GraphModel.SetTicsColor(color);
  }

  SetTicsValue(value) {
    this.GraphModel.SetTicsValue(value);
  }

  /**
   * @name X-Axis
   * @type function
   * @Description
   * xlable show, label, location, color
   */
  ShowAxisXLabel(show) {
    this.GraphModel.ShowAxisXLabel(show);
  }

  SetAxisXLabel(label) {
    this.GraphModel.SetAxisXLabel(label);
  }

  SetAxisXLabelLocation(location) {
    this.GraphModel.SetAxisXLabelLocation(location);
  }

  SetAxisXLabelColor(color) {
    this.GraphModel.SetAxisXLabelColor(color);
  }

  /**
   * @name Y-Axis
   * @type function
   * @Description
   * ylabel show, label, location, color
   */
  ShowAxisYLabel(show) {
    this.GraphModel.ShowAxisYLabel(show);
  }

  SetAxisYLabel(label) {
    this.GraphModel.SetAxisYLabel(label);
  }

  SetAxisYLabelLocation(location) {
    this.GraphModel.SetAxisYLabelLocation(location);
  }

  SetAxisYLabelColor(color) {
    this.GraphModel.SetAxisYLabelColor(color);
  }

  /**
   * @name ShowTable
   * @type function
   * @Description
   * Table On/Off
   */
  ShowTable(show) {
    this.GraphModel.ShowTable(show);
  }

  /**
   * @name SaveAsPDF
   * @type function
   */
  SaveAsPDF() {
    this.GraphView.SaveAsPDF();
  }

  /**
   * @name SaveAsImage
   * @type function
   */
  SaveAsImage() {
    this.GraphView.SaveAsImage();
  }
}

window.Plotta = Plotta;
