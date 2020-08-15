import { IAppState, Palette } from '../state';
import { IUpdatePaletteAction } from './i-update-palette-action';

export function updatePalette(state: IAppState, action: IUpdatePaletteAction): IAppState {
  return {
    palette: new Palette(action.palette),
  };
}
