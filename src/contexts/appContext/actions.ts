import { setAuthenticationToken, setCurrentUser } from "../../storage/authentication";

import { AppActionTypes, SET_LOGGED_IN } from "./types";

export function setLoggedIn(loggedIn: boolean, data?: any): AppActionTypes {
  if(data) {
    const {response} = data;
    setCurrentUser({ email: response.email, roles: response.roles });
    setAuthenticationToken(response.Authorization);
  }
  
  return {
    type: SET_LOGGED_IN,
    payload: loggedIn
  };
}
