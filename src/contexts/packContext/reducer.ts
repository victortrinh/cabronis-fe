import { PackContextState, packContextState } from "./state";
import {
  ADD_PACK,
  DELETE_PACK,
  PackActionTypes,
  SET_PACKS,
  UPDATE_PACK,
} from "./types";

export function packReducer(
  state = packContextState,
  action: PackActionTypes
): PackContextState {
  switch (action.type) {
    case SET_PACKS:
      return {
        ...state,
        packs: action.payload,
      };
    case ADD_PACK:
      return {
        ...state,
        packs: state.packs.concat(action.payload),
      };
    case UPDATE_PACK:
      const payload = action.payload;

      return {
        ...state,
        packs: state.packs.map((x) => {
          if (x.pack_id === payload.pack_id) {
            return { ...payload };
          }

          return x;
        }),
      };
    case DELETE_PACK:
      return {
        ...state,
        packs: state.packs.filter((x) => x.pack_id !== action.payload.pack_id),
      };
    default:
      return state;
  }
}
