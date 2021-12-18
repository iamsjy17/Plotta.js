import GraphModel from './model/graphModel';
import GraphView from './view/graphView';
import Presenter from './presenter/presenter';

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
 *     text: 'Plotta.ts'
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
  GraphModel: GraphModel;
  GraphView: GraphView;
  Presenter: Presenter;

  constructor(canvas, dataSet) {
    this.GraphModel = new GraphModel(dataSet);
    this.GraphView = new GraphView(canvas);
    this.Presenter = new Presenter(this.GraphModel, this.GraphView);
  }

  /**
   * @name UpdateGraph
   * @Description
   * Update all graph data.
   */
  UpdateGraph(dataSet) {
    this.GraphModel.UpdateModel(dataSet);
  }

  /**
   * @name AddLine
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
   * @Description
   * Update the line data.
   */
  UpdateLine(lineData) {
    this.GraphModel.UpdateLine(lineData);
  }

  SetFont(font) {
    this.GraphModel.SetFont(font);
  }

  /**
   * @name Title
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
  // eslint-disable-next-line class-methods-use-this
  SaveAsPDF() {
    // TODO:
    // this.GraphView.SaveAsPDF();
  }

  /**
   * @name SaveAsImage
   * @type function
   */
  // eslint-disable-next-line class-methods-use-this
  SaveAsImage() {
    // TODO:
    // this.GraphView.SaveAsImage();
  }
}

(window as any).Plotta = Plotta;
