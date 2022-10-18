import React from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "@styles/Newsletter.css";

// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

const Newsletter = ({ status, message, onValidated }) => {
  const { darkMode } = React.useContext(AppContext);
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
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
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
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                </Col>
                <Col size={12} sm={6}>
                  <button className="new-email-bx-button" type="submit">
                    Submit
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;
