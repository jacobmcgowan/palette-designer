import { IAction } from '../action';
import { Paint } from '../state';

export interface IAddAdditionalPaintAction extends IAction {
  paint: Paint;
}
