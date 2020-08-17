import { AppState, PaletteState } from '../state';
import { RemoveAdditionalPaintAction } from './remove-additional-paint-action';

export function removeAdditionalPaint(state: AppState, action: RemoveAdditionalPaintAction): AppState {
  return {
    palette: new PaletteState({
      theme: state.palette.theme,
      additionalPaint: [
        ...state.palette.additionalPaint.slice(0, action.index),
        ...state.palette.additionalPaint.slice(action.index + 1),
      ],
    })
  };
}
