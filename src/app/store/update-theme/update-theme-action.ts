import { Action } from '../action';
import { Theme } from '../state';

export interface IUpdateThemeAction extends Action {
  theme: Theme;
}
