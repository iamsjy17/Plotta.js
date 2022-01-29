import GraphModel from './model/graphModel';
import GraphView from './view/graphView';
import Presenter from './presenter/presenter';
import {GraphConfig} from './model/config';
import {LineData} from './model/lineData';
import {HorizontalAlignType, VerticalAlignType} from './model/const';
import {TicsValue} from './model/tics';

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
 * var plotta = new Plotta(canvas,
 * {
 *   lineDatas: [
 *    {
 *       id: 'line1',
 *       type: 'func',
 *       legend: 'cos',
 *       color: '#55A8DE',
 *       visible: true,
 *       func: Math.cos,
 *       dotNum: 1000
 *     }
 *  ],
 *  config: {
 *    font: '',
 *    legendVisible: true,
 *    title: {
 *       location: 'center',
 *       color: '#666666',
 *       text: 'Plotta.ts'
 *    },
 *    grid: {
 *      type: '',
 *      visible: true,
 *      color: '#888888'
 *    },
 *    border: {
 *      type: '',
 *      visible: true,
 *      color: '#DDDDDD',
 *       width: 1
 *    },
 *    tics: {
 *      visible: true,
 *      color: '#888888',
 *      value: {
 *        x: 2,
 *         y: 2
 *       }
 *    },
 *    axisX: {
 *      visible: true,
 *      label: 'X',
 *      color: '#666666',
 *      location: 'center',
 *      range: {
 *        start: -10,
 *         end: 10
 *       }
 *    },
 *    axisY: {
 *      visible: true,
 *      label: 'Y',
 *      color: '#666666',
 *      location: 'middle',
 *      range: {
 *        start: -10,
 *         end: 10
 *       }
 *    },
 *    table: {
 *       visible: true
 *    }
 *  }
 * });
 *
 */

export default class Plotta {
  GraphModel: GraphModel;
  GraphView: GraphView;
  Presenter: Presenter;

  constructor(canvas: HTMLCanvasElement, dataSet: {lineDatas: LineData[]; graphConfig: GraphConfig}) {
    this.GraphModel = new GraphModel(dataSet.lineDatas, dataSet.graphConfig);
    this.GraphView = new GraphView(canvas);
    this.Presenter = new Presenter(this.GraphModel, this.GraphView);
  }

  /**
   * @name UpdateGraph
   * @Description
   * Update all graph data.
   */
  UpdateGraph(lineDatas?: LineData[], graphConfig?: GraphConfig): void {
    this.GraphModel.UpdateModel(lineDatas, graphConfig);
  }

  /**
   * @name AddLine
   * @Description
   * Add New Line.
   */
  AddLine(lineData: LineData): void {
    this.GraphModel.AddLine(lineData);
  }

  /**
   * @name DeleteLine
   * @type function
   */
  DeleteLine(id: string): void {
    this.GraphModel.DeleteLine(id);
  }

  /**
   * @name UpdateLine
   * @Description
   * Update the line data.
   */
  UpdateLine(lineData: LineData): void {
    this.GraphModel.UpdateLine(lineData);
  }

  SetFont(font: string): void {
    this.GraphModel.SetFont(font);
  }

  /**
   * @name Title
   * @Description
   * Title text, color, location
   */
  SetTitle(title: string): void {
    this.GraphModel.SetTitle(title);
  }

  SetTitleColor(color: string): void {
    this.GraphModel.SetTitleColor(color);
  }

  SetTitleLocation(location: HorizontalAlignType): void {
    this.GraphModel.SetTitleLocation(location);
  }

  /**
   * @name Grid
   * @Description
   * Grid show, color
   */
  ShowGrid(show: boolean): void {
    this.GraphModel.ShowGrid(show);
  }

  SetGridColor(color: string): void {
    this.GraphModel.SetGridColor(color);
  }

  /**
   * @name Border
   * @Description
   * Border show, color, width
   */
  ShowBorder(show: boolean): void {
    this.GraphModel.ShowBorder(show);
  }

  SetBorderColor(color: string): void {
    this.GraphModel.SetBorderColor(color);
  }

  SetBorderWidth(width: number): void {
    this.GraphModel.SetBorderWidth(width);
  }

  /**
   * @name Tics
   * @Description
   * Tics show, x-y value, color
   */
  ShowTics(show: boolean): void {
    this.GraphModel.ShowTics(show);
  }

  SetTicsColor(color: string): void {
    this.GraphModel.SetTicsColor(color);
  }

  SetTicsValue(value: TicsValue): void {
    this.GraphModel.SetTicsValue(value);
  }

  /**
   * @name X-Axis
   * @Description
   * xlable show, label, location, color
   */
  ShowAxisXLabel(show: boolean): void {
    this.GraphModel.ShowAxisXLabel(show);
  }

  SetAxisXLabel(label: string): void {
    this.GraphModel.SetAxisXLabel(label);
  }

  SetAxisXLabelLocation(location: HorizontalAlignType): void {
    this.GraphModel.SetAxisXLabelLocation(location);
  }

  SetAxisXLabelColor(color: string): void {
    this.GraphModel.SetAxisXLabelColor(color);
  }

  /**
   * @name Y-Axis
   * @Description
   * ylabel show, label, location, color
   */
  ShowAxisYLabel(show: boolean): void {
    this.GraphModel.ShowAxisYLabel(show);
  }

  SetAxisYLabel(label: string): void {
    this.GraphModel.SetAxisYLabel(label);
  }

  SetAxisYLabelLocation(location: VerticalAlignType): void {
    this.GraphModel.SetAxisYLabelLocation(location);
  }

  SetAxisYLabelColor(color: string): void {
    this.GraphModel.SetAxisYLabelColor(color);
  }

  /**
   * @name ShowTable
   * @Description
   * Table On/Off
   */
  ShowTable(show: boolean): void {
    this.GraphModel.ShowTable(show);
  }

  /**
   * @name SaveAsPDF
   * @type function
   */
  // eslint-disable-next-line class-methods-use-this
  SaveAsPDF(): void {
    // TODO:
    // this.GraphView.SaveAsPDF();
  }

  /**
   * @name SaveAsImage
   * @type function
   */
  // eslint-disable-next-line class-methods-use-this
  SaveAsImage(): void {
    // TODO:
    // this.GraphView.SaveAsImage();
  }
}

(window as any).Plotta = Plotta;
