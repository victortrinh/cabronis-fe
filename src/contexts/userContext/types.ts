import { User } from "../../api/user";

export const SET_USERS = "SET_USERS";
export const ADD_USER = "ADD_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

interface SetUsers {
  type: typeof SET_USERS;
  payload: User[];
}

interface AddUser {
  type: typeof ADD_USER;
  payload: User;
}

interface DeleteUser {
  type: typeof DELETE_USER;
  payload: User;
}

interface UpdateUser {
  type: typeof UPDATE_USER;
  payload: User;
}

export type UserActionTypes = AddUser | DeleteUser | SetUsers | UpdateUser;
