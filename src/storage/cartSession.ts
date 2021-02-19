import { CartPack } from "../contexts/cartContext/state";

const CART_KEY = "cart";

export const getCart = (): CartPack[] => {
  const data = sessionStorage.getItem(CART_KEY);

  if (data) {
    return JSON.parse(data) as CartPack[];
  }

  return [];
};

export const setCart = (cart: CartPack[]) =>
  sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
