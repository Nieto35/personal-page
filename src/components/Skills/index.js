import React from "react";
// STYLES
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "@styles/Skills.css";
// CLOSE STYLES
// IMAGES
import arrow1 from "@images/arrow1.svg";
import arrow2 from "@images/arrow2.svg";
import meter1 from "@images/meter1.svg";
import meter2 from "@images/meter2.svg";
import meter3 from "@images/meter3.svg";
import colorSharp from "@images/color-sharp.png";
// CLOSE IMAGES
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT
// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import skillsEnglish from "@constants/Skills/en-US.json";
import skillsSpanish from "@constants/Skills/es-ES.json";
// CLOSE LANGUAGE

const Skills = () => {
  const { darkMode, languages } = React.useContext(AppContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        className="react-multiple-carousel__arrow arrow--left"
        onClick={() => onClick()}
      >
        <img className="arrow" src={arrow1} alt="Image" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        className="react-multiple-carousel__arrow arrow--right"
        onClick={() => onClick()}
      >
        <img className="arrow" src={arrow2} alt="Image" />
      </button>
    );
  };

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? skillsSpanish : skillsEnglish}
    >
      <section className="skill" id="skills">
        <Container className="container">
          <Row className="row">
            <Col className="col-12">
              <div
                className={
                  darkMode ? "skill-bx-dark wow zoomIn" : "skill-bx wow zoomIn"
                }
              >
                <h2>
                  <FormattedMessage id="skills.Title" defaultMessage="Skills" />
                </h2>
                <p>
                  <FormattedMessage
                    id="skills.Description"
                    defaultMessage="pondre una descripcion despues"
                  />
                </p>
                <Carousel
                  responsive={responsive}
                  arrows
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                >
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>
                      <FormattedMessage
                        id="skills.item-1"
                        defaultMessage="React"
                      />
                    </h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>
                      <FormattedMessage
                        id="skills.item-2"
                        defaultMessage="Webpack"
                      />
                    </h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>
                      <FormattedMessage
                        id="skills.item-3"
                        defaultMessage="React Router"
                      />
                    </h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>
                      <FormattedMessage
                        id="skills.item-4"
                        defaultMessage="Library UI"
                      />
                    </h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </IntlProvider>
  );
};

export default Skills;
