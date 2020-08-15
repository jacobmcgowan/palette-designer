import { IAppState, Paint, Palette } from '../state';
import { IAddAdditionalPaintAction } from './i-add-additional-paint-action';

export function addAdditionalPaint(state: IAppState, action: IAddAdditionalPaintAction): IAppState {
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
