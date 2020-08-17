import { IAction } from '../action';
import { Theme } from '../state';

export interface IUpdateThemeAction extends IAction {
  theme: Theme;
}
