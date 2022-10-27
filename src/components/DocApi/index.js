import React from "react";
// STYLES
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import "@styles/Projects.css";
// CLOSE STYLES
// IMAGES
import gitHubSearch from "@images/gitHub-Search.png";
import gitHubImage from "@images/gitHub.png";
import gitHubParzibyte from "@images/gitHub-parzibyte.png";
import urlApi from "@images/url-api.png";
import buscadorApi from "@images/buscadorApi.png";
import error404 from "@images/error-404.png";
// CLOSE IMAGES
import TrackVisibility from "react-on-screen";
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import docApiEnglish from "@constants/DocApi/en-US.json";
import docApiSpanish from "@constants/DocApi/es-ES.json";
// CLOSE LANGUAGE

const DocApi = () => {
  const { darkMode, languages } = React.useContext(AppContext);

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? docApiSpanish : docApiEnglish}
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
                        id="docApi.Title"
                        defaultMessage="How to use the API?"
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
                          <p>
                            <FormattedMessage
                              id="docApi.tab-1"
                              defaultMessage="How to use the API?"
                            />
                          </p>
                          <Row className="justify-content-center">
                            <Col xl={6}>
                              <img
                                className="img-api"
                                src={gitHubImage}
                                alt="image gitHub"
                              />
                            </Col>
                          </Row>
                          <p>
                            <FormattedMessage
                              id="docApi.tab-1.2"
                              defaultMessage="How to use the API?"
                            />
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>
                            <FormattedMessage
                              id="docApi.tab-2"
                              defaultMessage="How to use the API?"
                            />
                          </p>
                          <Row className="justify-content-center">
                            <Col xl={6}>
                              <img
                                className="img-api"
                                src={gitHubSearch}
                                alt="search gitHub"
                              />
                            </Col>
                          </Row>
                          <p>
                            <FormattedMessage
                              id="docApi.tab-2.2"
                              defaultMessage="How to use the API?"
                            />
                          </p>
                          <Row className="justify-content-center">
                            <Col xl={6}>
                              <img
                                className="img-api"
                                src={gitHubParzibyte}
                                alt="profile gitHub"
                              />
                            </Col>
                          </Row>
                          <p>
                            <FormattedMessage
                              id="docApi.tab-2.3"
                              defaultMessage="How to use the API?"
                            />
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            <FormattedMessage
                              id="docApi.tab-3"
                              defaultMessage="How to use the API?"
                            />
                          </p>
                          <Row className="justify-content-center">
                            <Col xl={6}>
                              <img
                                className="img-api"
                                src={urlApi}
                                alt="url api"
                              />
                            </Col>
                          </Row>
                          <p>
                            <FormattedMessage
                              id="docApi.tab-3.1"
                              defaultMessage="How to use the API?"
                            />
                          </p>
                          <Row className="justify-content-center">
                            <Col xl={6}>
                              <img
                                className="img-api"
                                src={buscadorApi}
                                alt="buscador Api"
                              />
                            </Col>
                          </Row>
                          <p>
                            <FormattedMessage
                              id="docApi.tab-3.2"
                              defaultMessage="How to use the API?"
                            />
                          </p>
                          <Row className="justify-content-center">
                            <Col xl={6}>
                              <img
                                className="img-api"
                                src={error404}
                                alt="error 404"
                              />
                            </Col>
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
      </section>
    </IntlProvider>
  );
};

export default DocApi;
