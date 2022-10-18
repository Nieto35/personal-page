import React from "react";
import meter1 from "@images/meter1.svg";
import meter2 from "@images/meter2.svg";
import meter3 from "@images/meter3.svg";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";

import arrow1 from "@images/arrow1.svg";
import arrow2 from "@images/arrow2.svg";
import colorSharp from "@images/color-sharp.png";

import "@styles/Skills.css";

// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

const Skills = () => {
  const { darkMode } = React.useContext(AppContext);
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
    <section className="skill" id="skills">
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <div
              className={
                darkMode ? "skill-bx-dark wow zoomIn" : "skill-bx wow zoomIn"
              }
            >
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
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
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
