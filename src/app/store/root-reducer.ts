import { ActionType, IAction } from './action';
import { AppState } from './state';
import { updateTheme, IUpdateThemeAction } from './update-theme';
import { addAdditionalPaint, IAddAdditionalPaintAction } from './add-additional-paint';
import { updateAdditionalPaint, IUpdateAdditionalPaintAction } from './update-additional-paint';
import { removeAdditionalPaint, IRemoveAdditionalPaintAction } from './remove-additional-paint';
import { updatePalette, IUpdatePaletteAction } from './update-palette';

export function rootReducer(state: AppState, action: IAction): AppState {
  switch (action.type) {
    case ActionType.UpdateTheme:
      state = updateTheme(state, action as IUpdateThemeAction);
      break;
    case ActionType.AddAdditionalPaint:
      state = addAdditionalPaint(state, action as IAddAdditionalPaintAction);
      break;
    case ActionType.UpdateAdditionalPaint:
      state = updateAdditionalPaint(state, action as IUpdateAdditionalPaintAction);
      break;
    case ActionType.RemoveAdditionalPaint:
      state = removeAdditionalPaint(state, action as IRemoveAdditionalPaintAction);
      break;
    case ActionType.UpdatePalette:
      state = updatePalette(state, action as IUpdatePaletteAction);
      break;
  }

  return state;
}
