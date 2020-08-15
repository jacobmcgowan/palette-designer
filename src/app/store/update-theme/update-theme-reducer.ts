import { IAppState, Theme, Palette } from '../state';
import { IUpdateThemeAction } from './i-update-theme-action';

export function updateTheme(state: IAppState, action: IUpdateThemeAction): IAppState {
  return {
    palette: new Palette({
      theme: new Theme(action.theme),
      additionalPaint: state.palette.additionalPaint,
    })
  };
}
