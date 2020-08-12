import { ActionType } from './action-type';

export interface IAction {
  readonly type: ActionType;
  [extraProps: string]: any;
}
