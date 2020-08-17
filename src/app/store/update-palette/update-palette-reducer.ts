import { AppState, PaletteState } from '../state';
import { IUpdatePaletteAction } from './i-update-palette-action';

export function updatePalette(state: AppState, action: IUpdatePaletteAction): AppState {
  return {
    palette: new PaletteState(action.palette),
  };
}
