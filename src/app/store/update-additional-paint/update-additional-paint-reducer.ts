import { IAppState, General, Palette, Paint } from '../state';
import { IUpdateAdditionalPaintAction } from './i-update-additional-paint-action';

export function updateAdditionalPaint(state: IAppState, action: IUpdateAdditionalPaintAction): IAppState {
  return {
    palette: new Palette({
      general: state.palette.general,
      additionalPaint: state.palette.additionalPaint
        .map((paint, index) => {
          if (index !== action.index) {
            return paint;
          }

          return new Paint(paint);
        }),
    })
  };
}
