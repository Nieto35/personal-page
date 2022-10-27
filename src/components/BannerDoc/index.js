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

const BannerDoc = () => {
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
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
                    </div>
                    <div>
                      <p>hola empieza a escribir aqui</p>
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
