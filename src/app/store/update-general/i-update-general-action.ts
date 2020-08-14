import { IAction } from '../action';
import { IGeneral } from '../state';

export interface IUpdateGeneralAction extends IAction {
  general: IGeneral;
}
