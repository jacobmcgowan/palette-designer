import { IAction } from '../action';
import { Palette } from '../state';

export interface IUpdatePaletteAction extends IAction {
  palette: Palette;
}
