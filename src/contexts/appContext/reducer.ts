import { AppContextState, appContextState } from "./state";
import { AppActionTypes, SET_IS_POKEMON, SET_LOGGED_IN } from "./types";

export function appReducer(
  state = appContextState,
  action: AppActionTypes
): AppContextState {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case SET_IS_POKEMON:
      return {
        ...state,
        isPokemon: action.payload,
      };
    default:
      return state;
  }
}
