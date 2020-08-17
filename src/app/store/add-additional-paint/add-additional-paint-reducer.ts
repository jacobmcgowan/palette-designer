import { AppState, PaintState, PaletteState } from '../state';
import { AddAdditionalPaintAction } from './add-additional-paint-action';

export function addAdditionalPaint(state: AppState, action: AddAdditionalPaintAction): AppState {
  return {
    palette: new PaletteState({
      theme: state.palette.theme,
      additionalPaint: [
        new PaintState(action.paint),
        ...state.palette.additionalPaint,
      ],
    })
  };
}
