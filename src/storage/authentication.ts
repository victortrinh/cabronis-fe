import { User } from "../api/user";

const USER_KEY = "user";
const AUTHENTICATION_KEY = "authenticationToken";

export const isLoggedIn : boolean = localStorage.getItem(USER_KEY) !== null;

export const setCurrentUser = (user: User) =>  localStorage.setItem(USER_KEY, JSON.stringify(user));

export const getCurrentUser = (): User | null => {
  const currentUser = localStorage.getItem(USER_KEY);

  if (currentUser) {
    return JSON.parse(currentUser) as User;
  }

  return null;
};

export const removeCurrentUser = () => localStorage.removeItem(USER_KEY);

export const setAuthenticationToken = (authenticationToken: string) =>  localStorage.setItem(AUTHENTICATION_KEY, authenticationToken);

export const authenticationToken : string | null =  localStorage.getItem(AUTHENTICATION_KEY);

export const removeAuthenticationToken = () =>  localStorage.removeItem(AUTHENTICATION_KEY);