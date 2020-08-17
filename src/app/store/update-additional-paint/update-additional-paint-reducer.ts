import { AppState, PaletteState, PaintState } from '../state';
import { IUpdateAdditionalPaintAction } from './i-update-additional-paint-action';

export function updateAdditionalPaint(state: AppState, action: IUpdateAdditionalPaintAction): AppState {
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
