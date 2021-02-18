import { CartPack } from "./state";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

interface AddToCart {
  type: typeof ADD_TO_CART;
  payload: CartPack;
}

interface RemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: CartPack;
}

export type CartActionTypes = AddToCart | RemoveFromCart;
