import { ADD_TO_CART, CartActionTypes, REMOVE_FROM_CART } from "./types";
import { CartContextState, cartContextState } from "./state";

import { setCart } from "../../storage/cartSession";

export function cartReducer(
  state = cartContextState,
  action: CartActionTypes
): CartContextState {
  switch (action.type) {
    case ADD_TO_CART:
      let cart;

      if (state.cart.map((x) => x.id).includes(action.payload.id)) {
        cart = state.cart.map((content) =>
          content.id === action.payload.id
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
        (pack) => pack.id !== action.payload.id
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
