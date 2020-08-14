import { IAppState, Paint, Palette } from '../state';
import { IAddAdditionalPaintAction } from './i-add-additional-paint-action';

export function addAdditionalPaint(state: IAppState, action: IAddAdditionalPaintAction): IAppState {
  return {
    palette: new Palette({
      general: state.palette.general,
      additionalPaint: [
        ...state.palette.additionalPaint,
        new Paint(action.paint),
      ],
    })
  };
}
