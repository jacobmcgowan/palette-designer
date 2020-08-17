import { AppState, PaletteState, PaintState } from '../state';
import { UpdateAdditionalPaintAction } from './update-additional-paint-action';

export function updateAdditionalPaint(state: AppState, action: UpdateAdditionalPaintAction): AppState {
  return {
    palette: new PaletteState({
      theme: state.palette.theme,
      additionalPaint: state.palette.additionalPaint
        .map((paint, index) => {
          if (index !== action.index) {
            return paint;
          }

          return new PaintState(action.paint);
        }),
    })
  };
}
