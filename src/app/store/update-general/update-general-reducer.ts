import { IAppState, General, Palette } from '../state';
import { IUpdateGeneralAction } from './i-update-general-action';

export function updateGeneral(state: IAppState, action: IUpdateGeneralAction): IAppState {
  return {
    palette: new Palette({
      general: new General(action.general),
      additionalPaint: state.palette.additionalPaint,
    })
  };
}
