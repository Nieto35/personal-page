import React from "react";
// STYLES
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import "@styles/Projects.css";
// CLOSE STYLES
// IMAGES
import middleware from "@images/middleware.png";
import rootReducer from "@images/rootReducer.png";
import slices from "@images/Slices.png";
import slices2 from "@images/slices-2.png";
import folder from "@images/folder.png";
import devdependencies from "@images/devdependencies.png";
import dependencias from "@images/dependencias.png";
import api from "@images/Api.png";
// CLOSE IMAGES
import TrackVisibility from "react-on-screen";
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import bannerDocEnglish from "@constants/BannerDoc/en-US.json";
import bannerDocSpanish from "@constants/BannerDoc/es-ES.json";
// CLOSE LANGUAGE

const BannerDoc = () => {
  const { darkMode, languages } = React.useContext(AppContext);

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? bannerDocSpanish : bannerDocEnglish}
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
                        id="BannerDoc.Title"
                        defaultMessage="How is this page programmed?"
                      />
                    </h2>
                    <br></br>
                    <Row>
                      <Col xl={4}>
                        <div>
                          <p>
                            <FormattedMessage
                              id="BannerDoc.subTitle"
                              defaultMessage="How is this page programmed?"
                            />
                          </p>
                        </div>
                        <Row className="justify-content-center">
                          <Col xl={8}>
                            <img
                              className="img-api"
                              src={dependencias}
                              alt="image gitHub"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xl={4}>
                        <div>
                          <p>
                            <FormattedMessage
                              id="BannerDoc.subTitle.1"
                              defaultMessage="How is this page programmed?"
                            />
                          </p>
                        </div>
                        <Row className="justify-content-center">
                          <Col xl={8}>
                            <img
                              className="img-api"
                              src={devdependencies}
                              alt="image gitHub"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xl={4}>
                        <div>
                          <p>
                            <FormattedMessage
                              id="BannerDoc.subTitle.2"
                              defaultMessage="How is this page programmed?"
                            />
                          </p>
                        </div>
                        <Row className="justify-content-center">
                          <Col xl={8}>
                            <img
                              className="img-api"
                              src={folder}
                              alt="image gitHub"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <br></br>

                    <h2>
                      <FormattedMessage
                        id="BannerDoc.Title.1"
                        defaultMessage="How is this page programmed?"
                      />
                    </h2>
                    <br></br>
                    <Row>
                      <Col xl={4}>
                        <div>
                          <p>Slices</p>
                        </div>
                        <Row className="justify-content-center">
                          <Col xl={8}>
                            <img
                              className="img-api"
                              src={slices}
                              alt="image gitHub"
                            />
                          </Col>
                        </Row>
                        <div>
                          <p>
                            <FormattedMessage
                              id="BannerDoc.p.1"
                              defaultMessage="How is this page programmed?"
                            />
                          </p>
                        </div>
                        <Row className="justify-content-center">
                          <Col xl={8}>
                            <img
                              className="img-api"
                              src={slices2}
                              alt="image gitHub"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col xl={4}>
                        <div>
                          <p>redux root</p>
                        </div>
                        <Row className="justify-content-center">
                          <Col xl={8}>
                            <img
                              className="img-api"
                              src={rootReducer}
                              alt="image gitHub"
                            />
                          </Col>
                        </Row>
                        <div>
                          <p>
                            <FormattedMessage
                              id="BannerDoc.p.2"
                              defaultMessage="How is this page programmed?"
                            />
                          </p>
                        </div>
                      </Col>
                      <Col xl={4}>
                        <div>
                          <p>middleware</p>
                        </div>
                        <Row className="justify-content-center">
                          <Col xl={8}>
                            <img
                              className="img-api"
                              src={middleware}
                              alt="image gitHub"
                            />
                          </Col>
                        </Row>
                        <div>
                          <p>
                            <FormattedMessage
                              id="BannerDoc.p.3"
                              defaultMessage="How is this page programmed?"
                            />{" "}
                            <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es">
                              React devTools
                            </a>
                          </p>
                        </div>
                        <Row className="justify-content-center">
                          <Col xl={8}>
                            <img
                              className="img-api"
                              src={api}
                              alt="image gitHub"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <br></br>

                    <h2>
                      <FormattedMessage
                        id="BannerDoc.Title.2"
                        defaultMessage="How is this page programmed?"
                      />
                    </h2>
                    <br></br>

                    <div>
                      <p>Webpack</p>
                      <p>Mailchimp</p>
                      <p>Emailjs</p>
                    </div>
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

export default BannerDoc;
