import React from "react";
// STYLES
import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "react-bootstrap";
import "@styles/ContentApi.css";
// CLOSE STYLES

// ICONS
import { Github } from "react-bootstrap-icons";
import { GeoAltFill } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
// CLOSE ICONS
import { useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

const SocialApi = () => {
  const { darkMode, languages } = React.useContext(AppContext);
  const user = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.loading.loading);
  return (
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
              <Github size={30} />
            </Col>
            <Col className="dates-avatar" xl={5}>
              {loading ? (
                <Skeleton
                  className={
                    darkMode
                      ? "created_at-loading-dark "
                      : "created_at-loading "
                  }
                />
              ) : (
                <a>{user.blog ? user.blog : "Not available"}</a>
              )}
            </Col>
          </Row>
        </Col>
        <Col xl={12} xs={4} className="content-redes">
          <Row className="justify-content-center">
            <Col xl={3} className="align-items-center">
              <GeoAltFill size={30} />
            </Col>
            <Col className="dates-avatar" xl={5}>
              {loading ? (
                <Skeleton
                  className={
                    darkMode
                      ? "created_at-loading-dark "
                      : "created_at-loading "
                  }
                />
              ) : (
                <p>{user.location ? user.location : "Not available"}</p>
              )}
            </Col>
          </Row>
        </Col>
        <Col xl={12} xs={4} className="content-redes">
          <Row className="justify-content-center">
            <Col xl={3} className="align-items-center">
              <Twitter size={30} />
            </Col>
            <Col className="dates-avatar" xl={5}>
              {loading ? (
                <Skeleton
                  className={
                    darkMode
                      ? "created_at-loading-dark "
                      : "created_at-loading "
                  }
                />
              ) : (
                <p>
                  {user.twitter_username
                    ? user.twitter_username
                    : "Not available"}
                </p>
              )}
            </Col>
          </Row>
        </Col>
        <Col xl={12} xs={4} className="content-redes">
          <Row className="justify-content-center">
            <Col xl={3} className="align-items-center">
              <BriefcaseFill size={30} />
            </Col>
            <Col className="dates-avatar" xl={5}>
              {loading ? (
                <Skeleton
                  className={
                    darkMode
                      ? "created_at-loading-dark "
                      : "created_at-loading "
                  }
                />
              ) : (
                <p>{user.company ? user.company : "Not available"}</p>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default SocialApi;
