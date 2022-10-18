import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "@images/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "@styles/Contact.css";

import emailjs from "@emailjs/browser";

// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

const Contact = () => {
  const { darkMode } = React.useContext(AppContext);
  const form = React.useRef();
  const [buttonText, setButtonText] = React.useState("Send");
  const [status, setStatus] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        form.current,
        process.env.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          setButtonText("Send");
          setStatus({ succes: true, message: "Message sent successfully" });
        },
        (error) => {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );

    e.target.reset();
  };

  return (
    <section className={darkMode ? "contact C-dark" : "contact"} id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          name="phone"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <h2
                            className={status.success === false ? "danger" : ""}
                          >
                            {status.message}
                          </h2>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
