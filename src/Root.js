import { Provider } from "react-redux";
import React from "react";
import reducers from "reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";

const configureStore = initialState => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, reduxPromise))
  );
  return store;
};

export default ({ children, initialState = {} }) => {
  return <Provider store={configureStore(initialState)}>{children}</Provider>;
};
