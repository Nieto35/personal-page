import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "@images/logo.svg";
import navIcon1 from "@images/nav-icon1.svg";
import navIcon2 from "@images/moon.svg";
import navIcon3 from "@images/sol.svg";
import "@styles/NavBar.css";
// import { HashLink } from "react-router-hash-link";
// import { BrowserRouter as Router } from "react-router-dom";
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

const NavBar = () => {
  const { handleClickOn, handleClickOff, darkMode } =
    React.useContext(AppContext);
  const [activeLink, setActiveLink] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    // <Router>
    <Navbar
      expand="md"
      className={scrolled ? (darkMode ? "scrolled-dark" : "scrolled") : ""}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jairo-felipe-nieto-ruiz-2570691a3/"
                target="_blank"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a
                onClick={handleClickOn}
                className={darkMode ? "aIsActive" : ""}
              >
                <img
                  src={navIcon2}
                  alt="moon"
                  className={darkMode ? "isActive" : ""}
                />
              </a>
              <a
                onClick={handleClickOff}
                className={darkMode ? "" : "aIsActive"}
              >
                <img
                  src={navIcon3}
                  alt="sun"
                  className={darkMode ? "" : "isActive"}
                />
              </a>
            </div>
            {/* <HashLink to="#connect"> */}
            <button className="vvd">
              <span>Let’s Connect</span>
            </button>
            {/* </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  );
};

export default NavBar;
