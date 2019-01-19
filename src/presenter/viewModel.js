/* eslint-disable no-console */
import { IsObject } from '../util';

export default class ViewModel {
  constructor(graphModel) {
    this.GraphModel = graphModel;
    this.DrawData = {};
  }

  GetDrawData() {
    return this.DrawData;
  }

  Init() {
    if (!this.GraphModel) return;
    console.log('Init');
  }

  InvalidateModel() {
    if (!this.GraphModel) return;
    console.log('Invalidated');
  }
}
