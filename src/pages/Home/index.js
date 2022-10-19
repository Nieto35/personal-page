import NavBar from "@components/NavBar";
import Banner from "@components/Banner";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import React from "react";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
