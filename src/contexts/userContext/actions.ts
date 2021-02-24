import { User } from "../../api/user";

import {
  ADD_USER,
  DELETE_USER,
  SET_USERS,
  UPDATE_USER,
  UserActionTypes,
} from "./types";

export const setUsers = (users: User[]): UserActionTypes => ({
  type: SET_USERS,
  payload: users,
});

export const addUser = (user: User): UserActionTypes => ({
  type: ADD_USER,
  payload: user,
});

export const updateUser = (user: User): UserActionTypes => ({
  type: UPDATE_USER,
  payload: user,
});

export const deleteUser = (user: User): UserActionTypes => ({
  type: DELETE_USER,
  payload: user,
});
