import { AppContextState } from "./contexts/appContext/state";
import { CartContextState } from "./contexts/cartContext/state";

export type RootState = {
  appContext: AppContextState;
  cartContext: CartContextState;
};

export const rootState = {
  appContext: {},
  cartContext: {}
};
