import { AppState, Palette } from '../state';
import { IUpdatePaletteAction } from './i-update-palette-action';

export function updatePalette(state: AppState, action: IUpdatePaletteAction): AppState {
  return {
    palette: new Palette(action.palette),
  };
}
