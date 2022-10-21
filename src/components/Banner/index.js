import React from "react";
// STYLES
import { Container, Row, Col } from "react-bootstrap";
import "@styles/Banner.css";
import "animate.css";
// CLOSE STYLES
// IMAGES AND ICONS
import headerImg from "@images/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// CLOSE IMAGES AND ICONS
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT
// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import bannerEnglish from "@constants/Banner/en-US.json";
import bannerSpanish from "@constants/Banner/es-ES.json";
// CLOSE LANGUAGE
// ROUTER DOM 6
import { HashLink } from "react-router-hash-link";
//CLOSE ROUTER DOM 6

import TrackVisibility from "react-on-screen";

const Banner = () => {
  const { languages } = React.useContext(AppContext);
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState("");
  const [delta, setDelta] = React.useState(300 - Math.random() * 100);
  const toRotate = ["Web Junior", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick();
      clearInterval(ticker);
    }, delta);
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

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? bannerSpanish : bannerEnglish}
    >
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">
                      <FormattedMessage
                        id="banner.Welcome"
                        defaultMessage="Welcome to my Portfolio"
                      />
                    </span>
                    <h1>
                      {
                        <FormattedMessage
                          id="banner.Im"
                          defaultMessage="Hi! I'm Felipe"
                        />
                      }{" "}
                      <span
                        className="txt-rotate"
                        dataperiod="1000"
                        data-rotate='[ "Web Junior", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      <FormattedMessage
                        id="banner.Description"
                        defaultMessage="pondre un texto aca despues"
                      />
                    </p>
                    <HashLink to="/#connect">
                      <button>
                        <FormattedMessage
                          id="banner.Connect"
                          defaultMessage="Let’s Connect"
                        />
                        <ArrowRightCircle size={25} />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
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
          </Row>
        </Container>
      </section>
    </IntlProvider>
  );
};

export default Banner;
