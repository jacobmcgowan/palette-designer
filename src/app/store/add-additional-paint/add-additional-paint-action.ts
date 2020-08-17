import { Action } from '../action';
import { Paint } from '../state';

export interface AddAdditionalPaintAction extends Action {
  paint: Paint;
}
