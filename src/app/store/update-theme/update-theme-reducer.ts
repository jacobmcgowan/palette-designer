import { AppState, Theme, Palette } from '../state';
import { IUpdateThemeAction } from './i-update-theme-action';

export function updateTheme(state: AppState, action: IUpdateThemeAction): AppState {
  return {
    palette: new Palette({
      theme: new Theme(action.theme),
      additionalPaint: state.palette.additionalPaint,
    })
  };
}
