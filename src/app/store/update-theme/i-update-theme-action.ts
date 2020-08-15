import { IAction } from '../action';
import { ITheme } from '../state';

export interface IUpdateThemeAction extends IAction {
  theme: ITheme;
}
