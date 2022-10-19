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
import projImg1 from "@images/project-img1.png";
import projImg2 from "@images/project-img2.png";
import projImg3 from "@images/project-img3.png";
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
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
                    <p>
                      <FormattedMessage
                        id="projects.Description"
                        defaultMessage="debo poner un texto aca"
                      />
                    </p>
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
                          <p>
                            <FormattedMessage
                              id="projects.tab-2"
                              defaultMessage="debo poner un texto aca"
                            />
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            <FormattedMessage
                              id="projects.tab-3"
                              defaultMessage="debo poner un texto aca"
                            />
                          </p>
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
