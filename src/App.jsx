import React from "react";
import NavBar from "@components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/App.css";
import Banner from "@components/Banner";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import AppContext from "@appContext";
import useInitialState from "@hooks/useInitialState";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

const App = () => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
