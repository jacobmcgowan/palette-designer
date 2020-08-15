import { AppState, Paint, Palette } from '../state';
import { IAddAdditionalPaintAction } from './i-add-additional-paint-action';

export function addAdditionalPaint(state: AppState, action: IAddAdditionalPaintAction): AppState {
  return {
    palette: new Palette({
      theme: state.palette.theme,
      additionalPaint: [
        new Paint(action.paint),
        ...state.palette.additionalPaint,
      ],
    })
  };
}
