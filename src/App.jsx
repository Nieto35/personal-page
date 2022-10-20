import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/App.css";

import AppContext from "@appContext";
import useInitialState from "@hooks/useInitialState";
import Router from "@router";

const App = () => {
  const initialState = useInitialState();

  return (
    <>
      <AppContext.Provider value={initialState}>
        <Router />
      </AppContext.Provider>
    </>
  );
};

export default App;
