import { AppActionTypes, SET_LOGGED_IN } from "./types";
import { AppContextState, appContextState } from "./state";

export function appReducer(state = appContextState, action: AppActionTypes): AppContextState {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload
      };
    default:
      return state;
  }
}
