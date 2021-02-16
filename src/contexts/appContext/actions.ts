import { AppActionTypes, SET_LOGGED_IN } from "./types";
import { setAuthenticationToken, setCurrentUser } from "../../storage/authentication";

export function setLoggedIn(loggedIn: boolean, data?: any): AppActionTypes {
  if(data) {
    setCurrentUser({ email: data.email });
    setAuthenticationToken(data.response.Authorization);
  }
  
  return {
    type: SET_LOGGED_IN,
    payload: loggedIn
  };
}
