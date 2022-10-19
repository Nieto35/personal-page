import React from "react";
// STYLES
import { Container, Row, Col } from "react-bootstrap";
import "@styles/Contact.css";
import "animate.css";
// CLOSE STYLES
// IMAGES
import contactImg from "@images/contact-img.svg";
// CLOSE IMAGES
// EMAIL
import emailjs from "@emailjs/browser";
// CLOSE EMAIL
import TrackVisibility from "react-on-screen";
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT
// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import contactEnglish from "@constants/Contact/en-US.json";
import contactSpanish from "@constants/Contact/es-ES.json";
// CLOSE LANGUAGE

const Contact = () => {
  const { darkMode, languages } = React.useContext(AppContext);
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
          setStatus({ success: true, message: "Message sent successfully" });
        },
        (error) => {
          setStatus({
            success: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );

    e.target.reset();
  };

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? contactSpanish : contactEnglish}
    >
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
                    <h2>
                      <FormattedMessage
                        id="contact.Title"
                        defaultMessage="Get In Touch"
                      />
                    </h2>
                    <form onSubmit={handleSubmit} ref={form}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <FormattedMessage
                            id="contact.Form.firstName"
                            defaultMessage="First Name"
                          >
                            {(placeholder) => (
                              <input
                                type="text"
                                name="firstName"
                                placeholder={placeholder}
                              />
                            )}
                          </FormattedMessage>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <FormattedMessage
                            id="contact.Form.lastName"
                            defaultMessage="Last Name"
                          >
                            {(placeholder) => (
                              <input
                                type="text"
                                name="lastName"
                                placeholder={placeholder}
                              />
                            )}
                          </FormattedMessage>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <FormattedMessage
                            id="contact.Form.email"
                            defaultMessage="Email Address"
                          >
                            {(placeholder) => (
                              <input
                                type="text"
                                name="email"
                                placeholder={placeholder}
                              />
                            )}
                          </FormattedMessage>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <FormattedMessage
                            id="contact.Form.phone"
                            defaultMessage="Phone No."
                          >
                            {(placeholder) => (
                              <input
                                type="tel"
                                name="phone"
                                placeholder={placeholder}
                              />
                            )}
                          </FormattedMessage>
                        </Col>
                        <Col size={12} className="px-1">
                          <FormattedMessage
                            id="contact.Form.message"
                            defaultMessage="Message"
                          >
                            {(placeholder) => (
                              <textarea
                                rows="6"
                                name="message"
                                placeholder={placeholder}
                              ></textarea>
                            )}
                          </FormattedMessage>
                          <button type="submit">
                            <span>
                              {buttonText === "Send" ? (
                                <FormattedMessage
                                  id="contact.Form.button-env"
                                  defaultMessage="Send"
                                />
                              ) : (
                                <FormattedMessage
                                  id="contact.Form.button-loading"
                                  defaultMessage="Sending..."
                                />
                              )}
                            </span>
                          </button>
                        </Col>
                        {status.message && (
                          <Col>
                            <h2
                              className={
                                status.success === false ? "danger" : ""
                              }
                            >
                              {status.success ? (
                                <FormattedMessage
                                  id="contact.Form.answer-success"
                                  defaultMessage="Message sent successfully"
                                />
                              ) : (
                                <FormattedMessage
                                  id="contact.Form.answer-failed"
                                  defaultMessage="Something went wrong, please try again later."
                                />
                              )}
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
    </IntlProvider>
  );
};

export default Contact;
