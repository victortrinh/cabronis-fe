import { UserContextState, userContextState } from "./state";
import {
  ADD_USER,
  DELETE_USER,
  SET_USERS,
  UPDATE_USER,
  UserActionTypes,
} from "./types";

export function userReducer(
  state = userContextState,
  action: UserActionTypes
): UserContextState {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case UPDATE_USER:
      const payload = action.payload;

      return {
        ...state,
        users: state.users.map((x) => {
          if (x.user_id === payload.user_id) {
            return { ...payload };
          }

          return x;
        }),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((x) => x.user_id !== action.payload.user_id),
      };
    default:
      return state;
  }
}
