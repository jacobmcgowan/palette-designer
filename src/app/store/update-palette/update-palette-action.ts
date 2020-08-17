import { Action } from '../action';
import { Palette } from '../state';

export interface UpdatePaletteAction extends Action {
  palette: Palette;
}
