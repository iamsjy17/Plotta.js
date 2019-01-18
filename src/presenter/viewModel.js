/* eslint-disable no-console */
import { IsObject } from '../util';

class ViewModel {
  constructor(graphModel) {
    this.GraphModel = graphModel;
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
