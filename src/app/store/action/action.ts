import { ActionType } from './action-type';

export interface Action {
  readonly type: ActionType;
  [extraProps: string]: any;
}
