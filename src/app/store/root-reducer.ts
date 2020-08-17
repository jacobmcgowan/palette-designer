import { ActionType, Action } from './action';
import { AppState } from './state';
import { updateTheme, IUpdateThemeAction } from './update-theme';
import { addAdditionalPaint, AddAdditionalPaintAction } from './add-additional-paint';
import { updateAdditionalPaint, UpdateAdditionalPaintAction } from './update-additional-paint';
import { removeAdditionalPaint, RemoveAdditionalPaintAction } from './remove-additional-paint';
import { updatePalette, UpdatePaletteAction } from './update-palette';

export function rootReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case ActionType.UpdateTheme:
      state = updateTheme(state, action as IUpdateThemeAction);
      break;
    case ActionType.AddAdditionalPaint:
      state = addAdditionalPaint(state, action as AddAdditionalPaintAction);
      break;
    case ActionType.UpdateAdditionalPaint:
      state = updateAdditionalPaint(state, action as UpdateAdditionalPaintAction);
      break;
    case ActionType.RemoveAdditionalPaint:
      state = removeAdditionalPaint(state, action as RemoveAdditionalPaintAction);
      break;
    case ActionType.UpdatePalette:
      state = updatePalette(state, action as UpdatePaletteAction);
      break;
  }

  return state;
}
