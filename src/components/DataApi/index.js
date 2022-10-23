import React from "react";
// STYLES
import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "react-bootstrap";
import "@styles/ContentApi.css";
// CLOSE STYLES

// ICONS
import { ArchiveFill } from "react-bootstrap-icons";
import { PersonWorkspace } from "react-bootstrap-icons";
import { PersonBadgeFill } from "react-bootstrap-icons";
// CLOSE ICONS
import { useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT
// LANGUAGE
import { IntlProvider, FormattedMessage } from "react-intl";
import dataApiEnglish from "@constants/DataApi/en-US.json";
import dataApiSpanish from "@constants/DataApi/es-ES.json";
// CLOSE LANGUAGE

const DataApi = () => {
  const { darkMode, languages } = React.useContext(AppContext);
  const user = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.loading.loading);
  return (
    <IntlProvider
      locale={!!languages[0].state ? "es-ES" : "en-EN"}
      messages={!!languages[0].state ? dataApiSpanish : dataApiEnglish}
    >
      <Col
        xs={12}
        md={6}
        xl={6}
        className="align-items-center content-dates-avatar"
      >
        <Row className="align-items-center">
          <Col xl={12} xs={12} className="content-redes">
            <Row className="justify-content-center">
              <Col xl={3} className="align-items-center">
                <ArchiveFill size={30} />
              </Col>
              <Col className="dates-avatar" xl={5}>
                {loading ? (
                  <Skeleton
                    count={2}
                    className={
                      darkMode
                        ? "created_at-loading-dark "
                        : "created_at-loading "
                    }
                  />
                ) : (
                  <>
                    <p>
                      <FormattedMessage
                        id="dataApi.Repository"
                        defaultMessage="Repository"
                      />
                    </p>
                    <span>{user.public_repos}</span>
                  </>
                )}
              </Col>
            </Row>
          </Col>
          <Col xl={12} xs={4} className="content-redes">
            <Row className="justify-content-center">
              <Col xl={3} className="align-items-center">
                <PersonWorkspace size={30} />
              </Col>
              <Col className="dates-avatar" xl={5}>
                {loading ? (
                  <Skeleton
                    count={2}
                    className={
                      darkMode
                        ? "created_at-loading-dark "
                        : "created_at-loading "
                    }
                  />
                ) : (
                  <>
                    <p>
                      <FormattedMessage
                        id="dataApi.Followers"
                        defaultMessage="Followers"
                      />
                    </p>
                    <span>{user.followers}</span>
                  </>
                )}
              </Col>
            </Row>
          </Col>
          <Col xl={12} xs={4} className="content-redes">
            <Row className="justify-content-center">
              <Col xl={3} className="align-items-center">
                <PersonBadgeFill size={30} />
              </Col>
              <Col className="dates-avatar" xl={5}>
                {loading ? (
                  <Skeleton
                    count={2}
                    className={
                      darkMode
                        ? "created_at-loading-dark "
                        : "created_at-loading "
                    }
                  />
                ) : (
                  <>
                    <p>
                      <FormattedMessage
                        id="dataApi.Following"
                        defaultMessage="Following"
                      />
                    </p>
                    <span>{user.following}</span>
                  </>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </IntlProvider>
  );
};

export default DataApi;
