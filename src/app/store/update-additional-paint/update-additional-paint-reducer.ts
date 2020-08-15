import { IAppState, Palette, Paint } from '../state';
import { IUpdateAdditionalPaintAction } from './i-update-additional-paint-action';

export function updateAdditionalPaint(state: IAppState, action: IUpdateAdditionalPaintAction): IAppState {
  return {
    palette: new Palette({
      theme: state.palette.theme,
      additionalPaint: state.palette.additionalPaint
        .map((paint, index) => {
          if (index !== action.index) {
            return paint;
          }

          return new Paint(action.paint);
        }),
    })
  };
}
