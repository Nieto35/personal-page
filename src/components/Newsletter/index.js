import React from "react";
// IMPORT STYLES
import { Col, Row, Alert } from "react-bootstrap";
import "@styles/Newsletter.css";
// CLOSE IMPORT STYLES
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT
// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import newsletterEnglish from "@constants/Newsletter/en-US.json";
import newsletterSpanish from "@constants/Newsletter/es-ES.json";
// CLOSE LANGUAGE

const Newsletter = ({ status, message, onValidated }) => {
  const { darkMode, languages } = React.useContext(AppContext);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? newsletterSpanish : newsletterEnglish}
    >
      <Col lg={12}>
        <div
          className={
            darkMode
              ? "newsletter-bx wow slideInUp newsLetter_dark "
              : "newsletter-bx wow slideInUp"
          }
        >
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>
                <FormattedMessage
                  id="newsletter.Msj-1"
                  defaultMessage="Subscribe to our Newsletter"
                />
                <br></br>
                <FormattedMessage
                  id="newsletter.Msj-2"
                  defaultMessage="& Never miss latest updates"
                />
              </h3>
              {status === "sending" && (
                <Alert>
                  <FormattedMessage
                    id="newsletter.Sending"
                    defaultMessage="Sending..."
                  />
                </Alert>
              )}
              {status === "error" && <Alert variant="danger">{message}</Alert>}
              {status === "success" && (
                <Alert variant="success">{message}</Alert>
              )}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col
                    className={
                      darkMode ? "new-email-bx newsLetter_dark" : "new-email-bx"
                    }
                    size={12}
                    sm={6}
                  >
                    <FormattedMessage
                      id="newsletter.Email"
                      defaultMessage="Email Address"
                    >
                      {(placeholder) => (
                        <input
                          value={email}
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={placeholder}
                        />
                      )}
                    </FormattedMessage>
                  </Col>
                  <Col size={12} sm={6}>
                    <button className="new-email-bx-button" type="submit">
                      <FormattedMessage
                        id="newsletter.Submit"
                        defaultMessage="Submit"
                      />
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
    </IntlProvider>
  );
};

export default Newsletter;
