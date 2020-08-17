import { AppState, PaletteState } from '../state';
import { UpdatePaletteAction } from './update-palette-action';

export function updatePalette(state: AppState, action: UpdatePaletteAction): AppState {
  return {
    palette: new PaletteState(action.palette),
  };
}
