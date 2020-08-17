import { AppState, ThemeState, PaletteState } from '../state';
import { IUpdateThemeAction } from './update-theme-action';

export function updateTheme(state: AppState, action: IUpdateThemeAction): AppState {
  return {
    palette: new PaletteState({
      theme: new ThemeState(action.theme),
      additionalPaint: state.palette.additionalPaint,
    })
  };
}
