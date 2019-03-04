import Config from './config';
import LineData from './lineData';
import { IsObject } from '../util';

/**
 * @name GraphModel
 * @type class
 * @property {Object} LineDatas
 * @property {Object} Config
 * @property {Object} ViewHandler
 * @property {Boolean} Invalidated
 *
 * See function description
 * @method SetViewHandler
 * @method InitModel
 * @method UpdateModel
 */

export default class GraphModel {
  constructor(dataSet) {
    this.Invalidated = true;
    this.lineDatas = new Map();
    this.config = new Config();
    this.InitModel(dataSet);
    this.viewHandler = null;
  }

  /**
   * @name SetViewHandler
   * @type function
   */
  SetViewHandler(viewHandler) {
    this.viewHandler = viewHandler;
  }

  /**
   * @name InitModel
   * @type function
   * @Description
   * Initializes the graphModel with the input dataSet.
   */
  InitModel(dataSet) {
    if (!IsObject(dataSet)) return;

    dataSet.linedatas.length
      && dataSet.linedatas.forEach((item) => {
        const {
          id, type, legend, color, visible, datas, func, dotNum
        } = item;

        this.lineDatas.set(id, new LineData(type, legend, color, visible, datas, func, dotNum));
      });

    if (IsObject(dataSet.config)) {
      this.config && this.config.Init(dataSet.config);
    }
  }

  /**
   * @name UpdateModel
   * @type function
   * @Description
   * Updates the graphModel with the input dataSet.
   */
  UpdateModel(dataSet) {
    if (!IsObject(dataSet)) return;

    dataSet.linedatas
      && dataSet.linedatas.forEach((item) => {
        const {
          id, type, legend, color, visible, datas, func, dotNum
        } = item;

        if (this.lineDatas.has(id)) {
          this.lineDatas.get(id).Update(type, legend, color, visible, datas, func, dotNum);
        } else {
          this.lineDatas.set(id, new LineData(type, legend, color, visible, datas, func, dotNum));
        }
      });

    if (IsObject(dataSet.config)) {
      this.config && this.config.Init(dataSet.config);
    }
    if (this.viewHandler) this.viewHandler.UpdateViewModel();
  }
}
