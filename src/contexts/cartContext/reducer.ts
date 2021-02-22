import { setCart } from "../../storage/cartSession";

import { CartContextState, cartContextState } from "./state";
import { ADD_TO_CART, CartActionTypes, REMOVE_FROM_CART } from "./types";

export function cartReducer(
  state = cartContextState,
  action: CartActionTypes
): CartContextState {
  switch (action.type) {
    case ADD_TO_CART:
      let cart;

      if (state.cart.map((x) => x.sellable_id).includes(action.payload.sellable_id)) {
        cart = state.cart.map((content) =>
          content.sellable_id === action.payload.sellable_id
            ? {
                ...content,
                quantity: content.quantity + action.payload.quantity,
              }
            : content
        );
      } else {
        cart = [...state.cart, action.payload];
      }
      setCart(cart);

      return {
        ...state,
        cart,
      };
    case REMOVE_FROM_CART:
      const cartRemoval = state.cart.filter(
        (pack) => pack.sellable_id !== action.payload.sellable_id
      );
      setCart(cartRemoval);

      return {
        ...state,
        cart: cartRemoval,
      };
    default:
      return state;
  }
}
