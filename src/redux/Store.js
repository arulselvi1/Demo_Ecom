import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import logger from "redux-logger";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

let store;
const initStore = () => {
  store =
    store ??
    createStore(rootReducer, bindMiddleware([thunkMiddleware, logger]));
  return store;
};

export const Store = initStore();
