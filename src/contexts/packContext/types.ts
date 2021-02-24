import { Pack } from "../../api/pack";

export const SET_PACKS = "SET_PACKS";
export const ADD_PACK = "ADD_PACKS";
export const UPDATE_PACK = "UPDATE_PACK";
export const DELETE_PACK = "DELETE_PACK";

interface SetPacks {
  type: typeof SET_PACKS;
  payload: Pack[];
}

interface AddPack {
  type: typeof ADD_PACK;
  payload: Pack;
}

interface DeletePack {
  type: typeof DELETE_PACK;
  payload: Pack;
}

interface UpdatePack {
  type: typeof UPDATE_PACK;
  payload: Pack;
}

export type PackActionTypes = AddPack | DeletePack | SetPacks | UpdatePack;
