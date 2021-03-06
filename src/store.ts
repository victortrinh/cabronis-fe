import { Reducer, applyMiddleware, combineReducers, createStore } from "redux";

import thunk, { ThunkMiddleware } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { RootState } from "./rootState";

import { appReducer } from "./contexts/appContext/reducer";
import { AppActionTypes } from "./contexts/appContext/types";
import { cartReducer } from "./contexts/cartContext/reducer";
import { CartActionTypes } from "./contexts/cartContext/types";

const rootReducer: Reducer<
  RootState,
  | AppActionTypes
  | CartActionTypes
> = combineReducers({
  appContext: appReducer,
  cartContext: cartReducer
});

let middleware = applyMiddleware(thunk as ThunkMiddleware<RootState>);

if (process.env.NODE_ENV !== "production") {
  middleware = composeWithDevTools(middleware);
}

export const store = createStore(rootReducer, middleware);
