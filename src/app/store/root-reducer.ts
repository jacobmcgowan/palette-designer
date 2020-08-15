import { ActionType, IAction } from './action';
import { IAppState } from './state';
import { updateGeneral, IUpdateGeneralAction } from './update-general';
import { addAdditionalPaint, IAddAdditionalPaintAction } from './add-additional-paint';
import { updateAdditionalPaint, IUpdateAdditionalPaintAction } from './update-additional-paint';
import { removeAdditionalPaint, IRemoveAdditionalPaintAction } from './remove-additional-paint';
import { updatePalette, IUpdatePaletteAction } from './update-palette';

export function rootReducer(state: IAppState, action: IAction): IAppState {
  switch (action.type) {
    case ActionType.UpdateGeneral:
      state = updateGeneral(state, action as IUpdateGeneralAction);
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
