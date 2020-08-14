import { IAppState, General, Palette } from '../state';
import { IRemoveAdditionalPaintAction } from './i-remove-additional-paint-action';

export function removeAdditionalPaint(state: IAppState, action: IRemoveAdditionalPaintAction): IAppState {
  return {
    palette: new Palette({
      general: state.palette.general,
      additionalPaint: [
        ...state.palette.additionalPaint.slice(0, action.index),
        ...state.palette.additionalPaint.slice(action.index + 1),
      ],
    })
  };
}
