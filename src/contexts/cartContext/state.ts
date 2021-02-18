import { Pack } from "../../api/pack";
import { getCart } from "../../storage/cartSession";

export type CartPack = Pack & {
  quantity: number;
};

export type CartContextState = Readonly<{
  cart: CartPack[];
}>;

export const cartContextState: CartContextState = {
  cart: getCart(),
};
