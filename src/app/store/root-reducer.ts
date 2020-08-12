import { ActionType, IAction } from './action';
import { IAppState } from './state';
import { updateGeneral, IUpdateGeneralAction } from './update-general';

export function rootReducer(state: IAppState, action: IAction): IAppState {
  switch (action.type) {
    case ActionType.UpdateGeneral:
      state = updateGeneral(state, action as IUpdateGeneralAction);
      break;
  }

  return state;
}
