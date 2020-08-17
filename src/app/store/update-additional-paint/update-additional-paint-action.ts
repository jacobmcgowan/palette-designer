import { Action } from '../action';
import { Paint } from '../state';

export interface UpdateAdditionalPaintAction extends Action {
  index: number;
  paint: Paint;
}
