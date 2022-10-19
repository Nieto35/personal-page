import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/App.css";

import AppContext from "@appContext";
import useInitialState from "@hooks/useInitialState";
import Home from "@pages/Home";

const App = () => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Home />
      </AppContext.Provider>
    </>
  );
};

export default App;
