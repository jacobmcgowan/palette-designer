import { IAction } from '../action';
import { IPalette } from '../state';

export interface IUpdatePaletteAction extends IAction {
  palette: IPalette;
}
