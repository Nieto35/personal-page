import React from "react";
import ContentApi from "@components/ContentApi";
import FooterSingle from "@components/FooterSingle";
import { userReducer } from "@reducer/user";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "@middlewares";

const Api = () => {
  const composedEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
  );
  const store = createStore(userReducer, composedEnhancers);
  return (
    <>
      <Provider store={store}>
        <ContentApi />
        <FooterSingle />
      </Provider>
    </>
  );
};

export default Api;
