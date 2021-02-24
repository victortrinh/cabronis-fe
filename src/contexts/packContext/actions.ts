import { Pack } from "../../api/pack";

import {
  ADD_PACK,
  DELETE_PACK,
  PackActionTypes,
  SET_PACKS,
  UPDATE_PACK,
} from "./types";

export const setPacks = (packs: Pack[]): PackActionTypes => ({
  type: SET_PACKS,
  payload: packs,
});

export const addPack = (pack: Pack): PackActionTypes => ({
  type: ADD_PACK,
  payload: pack,
});

export const updatePack = (pack: Pack): PackActionTypes => ({
  type: UPDATE_PACK,
  payload: pack,
});

export const deletePack = (pack: Pack): PackActionTypes => ({
  type: DELETE_PACK,
  payload: pack,
});
