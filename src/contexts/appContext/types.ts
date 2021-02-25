export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_IS_POKEMON = "SET_IS_POKEMON";

interface SetLoggedIn {
  type: typeof SET_LOGGED_IN;
  payload: boolean;
}

interface SetIsPokemon {
  type: typeof SET_IS_POKEMON;
  payload: boolean;
}

export type AppActionTypes = SetIsPokemon | SetLoggedIn;
