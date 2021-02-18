import { ADD_TO_CART, CartActionTypes, REMOVE_FROM_CART } from "./types";

import { CartPack } from "./state";

export const addToCart = (pack: CartPack): CartActionTypes => ({
  type: ADD_TO_CART,
  payload: pack,
});

export const removeFromCart = (pack: CartPack): CartActionTypes => ({
  type: REMOVE_FROM_CART,
  payload: pack,
});
