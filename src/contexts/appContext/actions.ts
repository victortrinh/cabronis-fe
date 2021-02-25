import {
  setAuthenticationToken,
  setCurrentUser,
} from "../../storage/authentication";
import { setIsPokemonStorage } from "../../storage/cardType";

import { AppActionTypes, SET_IS_POKEMON, SET_LOGGED_IN } from "./types";

export function setLoggedIn(loggedIn: boolean, data?: any): AppActionTypes {
  if (data) {
    const { response } = data;
    setCurrentUser({ email: response.email, roles: response.roles });
    setAuthenticationToken(response.Authorization);
  }

  return {
    type: SET_LOGGED_IN,
    payload: loggedIn,
  };
}

export function setIsPokemon(isPokemon: boolean): AppActionTypes {
  setIsPokemonStorage(isPokemon);

  return {
    type: SET_IS_POKEMON,
    payload: isPokemon,
  };
}
