import { AppState, Palette } from '../state';
import { IRemoveAdditionalPaintAction } from './i-remove-additional-paint-action';

export function removeAdditionalPaint(state: AppState, action: IRemoveAdditionalPaintAction): AppState {
  return {
    palette: new Palette({
      theme: state.palette.theme,
      additionalPaint: [
        ...state.palette.additionalPaint.slice(0, action.index),
        ...state.palette.additionalPaint.slice(action.index + 1),
      ],
    })
  };
}
