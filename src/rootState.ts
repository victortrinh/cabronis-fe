import { AppContextState } from "./contexts/appContext/state";
import { CartContextState } from "./contexts/cartContext/state";
import { PackContextState } from "./contexts/packContext/state";
import { UserContextState } from "./contexts/userContext/state";

export type RootState = {
  appContext: AppContextState;
  cartContext: CartContextState;
  packContext: PackContextState;
  userContext: UserContextState;
};

export const rootState = {
  appContext: {},
  cartContext: {},
  packContext: {},
  userContext: {},
};
