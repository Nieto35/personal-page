import React from "react";
import ContentApi from "@components/ContentApi";
import FooterSingle from "@components/FooterSingle";
import DocApi from "@components/DocApi";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "@middlewares";
import rootReducer from "@reducer/rootReducer";
import thunk from "redux-thunk";

const Api = () => {
  const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

  const store = createStore(rootReducer, composedEnhancers);

  return (
    <>
      <Provider store={store}>
        <ContentApi />
        <DocApi />
        <FooterSingle />
      </Provider>
    </>
  );
};

export default Api;
