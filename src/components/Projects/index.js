import React from "react";
// STYLES
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import "@styles/Projects.css";
// CLOSE STYLES
// COMPONENTS
import ProjectCard from "@components/ProjectCard";
// CLOSE COMPONENTS
// IMAGES
import diplomaReact from "@images/titles/diploma-react.jpg";
import diplomaWebpack from "@images/titles/diploma-webpack.jpg";
import diplomaReactPractico from "@images/titles/diploma-react-practico.jpg";
import diplomaReactEstado from "@images/titles/diploma-react-estado.jpg";
import diplomaReactPatronesRender from "@images/titles/diploma-react-patrones-render.jpg";
import diplomaReactRouter from "@images/titles/diploma-react-router.jpg";

import diplomaReactReduxProfesional from "@images/titles/diploma-react-redux-profesional.jpg";
import diplomaJest from "@images/titles/diploma-jest.jpg";
import diplomaReactStateMachines from "@images/titles/diploma-react-state-machines.jpg";
import diplomaMaterialUi from "@images/titles/diploma-material-ui.jpg";
import diplomaReactHooks from "@images/titles/diploma-react-hooks.jpg";

import actaSena from "@images/titles/actaSena.jpg";
import senasoft from "@images/titles/senasoft.jpg";

import colorSharp2 from "@images/color-sharp2.png";
// CLOSE IMAGES
import TrackVisibility from "react-on-screen";
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import projectsEnglish from "@constants/Projects/en-US.json";
import projectsSpanish from "@constants/Projects/es-ES.json";
// CLOSE LANGUAGE

const Projects = () => {
  const { darkMode, languages } = React.useContext(AppContext);
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaReact,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaWebpack,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaReactPractico,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaReactEstado,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaReactPatronesRender,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaReactRouter,
    },
  ];

  const titles = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaReactReduxProfesional,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaJest,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaReactStateMachines,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaMaterialUi,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: diplomaReactHooks,
    },
  ];

  const titles2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: actaSena,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: senasoft,
    },
  ];

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? projectsSpanish : projectsEnglish}
    >
      <section className={darkMode ? "project dark" : "project"} id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>
                      <FormattedMessage
                        id="projects.Title"
                        defaultMessage="Projects"
                      />
                    </h2>
                    <br></br>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {titles.map((title, index) => {
                              return <ProjectCard key={index} {...title} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {titles2.map((title, index) => {
                              return <ProjectCard key={index} {...title} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </IntlProvider>
  );
};

export default Projects;
