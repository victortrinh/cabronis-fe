import { Reducer, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { AppActionTypes } from "./contexts/appContext/types";
import { RootState } from "./rootState";
import { appReducer } from "./contexts/appContext/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer: Reducer<
  RootState,
  | AppActionTypes
> = combineReducers({
  appContext: appReducer
});

let middleware = applyMiddleware(thunk as ThunkMiddleware<RootState>);

if (process.env.NODE_ENV !== "production") {
  middleware = composeWithDevTools(middleware);
}

export const store = createStore(rootReducer, middleware);
