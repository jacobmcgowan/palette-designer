import { IAppState, General } from '../state';
import { IUpdateGeneralAction } from './i-update-general-action';

export function updateGeneral(state: IAppState, action: IUpdateGeneralAction): IAppState {
  return {
    palette: {
      general: new General(action.general),
      additionalPaint: [],
    }
  };
}
