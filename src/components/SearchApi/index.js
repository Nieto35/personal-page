import React from "react";
// IMPORT STYLES
import { Col, Row } from "react-bootstrap";
import "@styles/SearchApi.css";
// CLOSE IMPORT STYLES
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT
// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import newsletterEnglish from "@constants/Newsletter/en-US.json";
import newsletterSpanish from "@constants/Newsletter/es-ES.json";
// CLOSE LANGUAGE
// ROUTER DOM 6
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
//CLOSE ROUTER DOM 6

const SearchApi = () => {
  const { darkMode, languages } = React.useContext(AppContext);
  const [searchInput, setSearchInput] = React.useState("");
  const navigate = useNavigate();
  const { search } = useParams();

  const buttonNavigate = () => {
    navigate(searchInput);
  };

  React.useEffect(() => {
    if (search) {
      setSearchInput(search);
    }
  }, []);

  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? newsletterSpanish : newsletterEnglish}
    >
      <Col lg={12}>
        <div
          className={
            darkMode
              ? "newsletter-bx wow slideInUp newsLetter_dark new-email-bx-api"
              : "newsletter-bx wow slideInUp new-email-bx-api"
          }
        >
          <Row>
            <Col md={12} xl={12}>
              <form onSubmit={buttonNavigate}>
                <Row className="justify-content-center">
                  <Col
                    className={
                      darkMode
                        ? "new-email-bx newsLetter_dark"
                        : "new-email-bx "
                    }
                    xl={6}
                    xs={12}
                    md={12}
                  >
                    <input
                      type="text"
                      value={searchInput}
                      placeholder="BUSCAR"
                      onChange={(event) => setSearchInput(event.target.value)}
                    />
                  </Col>
                  <Col xl={3} xs={12}>
                    <button className="new-email-bx-button" type="submit">
                      SEND
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

export default SearchApi;
