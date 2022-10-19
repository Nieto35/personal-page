import React from "react";
// STYLES
import { Container, Row, Col } from "react-bootstrap";
import "@styles/Footer.css";
// CLOSE STYLES
// COMPONENTS
import MailchimpForm from "@components/MailchimpForm";
// CLOSE COMPONENTS
// IMAGES
import logo from "@images/logo.svg";
import navIcon1 from "@images/nav-icon1.svg";
import navIcon2 from "@images/nav-icon2.svg";
import navIcon3 from "@images/nav-icon3.svg";
// CLOSE IMAGES

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jairo-felipe-nieto-ruiz-2570691a3/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
