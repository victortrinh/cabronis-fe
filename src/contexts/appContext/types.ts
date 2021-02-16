export const SET_LOGGED_IN = "SET_LOGGED_IN";

interface SetLoggedIn {
  type: typeof SET_LOGGED_IN;
  payload: boolean;
}

export type AppActionTypes =  SetLoggedIn;
