import { IAction } from '../action';
import { Paint } from '../state';

export interface IUpdateAdditionalPaintAction extends IAction {
  index: number;
  paint: Paint;
}
