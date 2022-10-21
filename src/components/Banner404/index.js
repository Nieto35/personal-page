import React from "react";
// STYLES
import { Container, Row, Col } from "react-bootstrap";
import "@styles/Banner404.css";
import "animate.css";
// CLOSE STYLES
// IMAGES AND ICONS
import headerImg from "@images/blob.jfif";
import { ArrowRightCircle } from "react-bootstrap-icons";
// CLOSE IMAGES AND ICONS
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT
// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import banner404English from "@constants/Banner404/en-US.json";
import banner404Spanish from "@constants/Banner404/es-ES.json";
// CLOSE LANGUAGE

import TrackVisibility from "react-on-screen";

const Banner404 = () => {
  const { languages } = React.useContext(AppContext);
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState("");
  const toRotate = ["Hmmmmmm!"];
  const period = 200;

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick();
      clearInterval(ticker);
    }, period);
    return () => {
      clearInterval(ticker);
    };
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else {
    }
  };

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? banner404Spanish : banner404English}
    >
      <section className="banner-footer" id="banner-footer">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={12} xl={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <Row
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <Col xs={12} md={12} xl={12} className="align-items-center">
                      <h1>
                        <span
                          className="txt-rotate"
                          dataperiod="200"
                          data-rotate='[ "Hmmmmmm!" ]'
                        >
                          <span className="wrap">{text}</span>
                        </span>
                      </h1>
                    </Col>
                    <Col xs={12} md={12} xl={12}>
                      <h4 className="align-text-center">
                        <FormattedMessage
                          id="banner404.Description"
                          defaultMessage="pondre un texto aca despues"
                        />
                      </h4>
                    </Col>
                  </Row>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </IntlProvider>
  );
};

export default Banner404;
