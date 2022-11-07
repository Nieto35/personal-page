import React from "react";
// IMAGES
import logo from "@images/logo.png";
import navIcon1 from "@images/nav-icon1.svg";
import navIcon2 from "@images/moon.svg";
import navIcon3 from "@images/sol.svg";
import unitedState from "@images/estados-unidos.png";
import espana from "@images/espana.png";
// CLOSE IMAGES
// STYLES
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Select from "react-select";
import "@styles/NavBar.css";
// CLOSE STYLES
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT
// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import navBarEnglish from "@constants/NavBar/en-US.json";
import navBarSpanish from "@constants/NavBar/es-ES.json";
// CLOSE LANGUAGE
// ROUTER DOM 6
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//CLOSE ROUTER DOM 6
// WINDOWS
import { useLocation } from "react-router-dom";
// CLOSE WINDOWS

const NavBar = () => {
  const {
    handleClickOn,
    handleClickOff,
    darkMode,
    languages,
    onSpanish,
    onEnglish,
  } = React.useContext(AppContext);
  const [activeLink, setActiveLink] = React.useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // SCROLL WINDOW

  const location = useLocation().pathname;

  React.useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  // CLOSE SCROLL WINDOW

  // LANGUAGE

  const options = [
    {
      value: "en",
      label: (
        <Row className="language-label">
          <Col>
            <span>EN</span>
          </Col>
          <Col>
            <img src={unitedState} alt="united state" />
          </Col>
        </Row>
      ),
    },
    {
      value: "es",
      label: (
        <Row className="language-label">
          <Col>
            <span>ES</span>
          </Col>
          <Col>
            <img src={espana} alt="spanish spain" />
          </Col>
        </Row>
      ),
    },
  ];

  const handleChangeLanguage = ({ value }) => {
    if (value === "es") {
      onSpanish();
    } else {
      onEnglish();
    }
  };
  // CLOSE LANGUAGE

  return (
    // <Router>
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? navBarSpanish : navBarEnglish}
    >
      <Navbar expand="md" className={darkMode ? "scrolled-dark" : "scrolled"}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    return "active navbar-link";
                  } else {
                    return "navbar-link";
                  }
                }}
                to="/home"
              >
                <FormattedMessage id="route.Home" defaultMessage="Home" />
              </NavLink>

              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    return "active navbar-link";
                  } else {
                    return "navbar-link";
                  }
                }}
                to="/api"
              >
                <FormattedMessage id="route.Api" defaultMessage="Api" />
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    return "active navbar-link";
                  } else {
                    return "navbar-link";
                  }
                }}
                to="/documentation"
              >
                <FormattedMessage
                  id="route.Projects"
                  defaultMessage="Projects"
                />
              </NavLink>
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
              <div>
                <Select
                  defaultValue={languages[0].state ? options[1] : options[0]}
                  options={options}
                  onChange={handleChangeLanguage}
                  className={
                    darkMode ? "select-language-dark" : "select-language"
                  }
                  classNamePrefix={
                    darkMode ? "select-language-dark" : "select-language"
                  }
                ></Select>
              </div>
              <HashLink
                to={location === "/home" ? "/#connect" : "/home/#connect"}
              >
                <button className="vvd">
                  <span>
                    <FormattedMessage
                      id="route.Connect"
                      defaultMessage="Let’s Connect"
                    />
                  </span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </IntlProvider>
    // </Router>
  );
};

export default NavBar;
