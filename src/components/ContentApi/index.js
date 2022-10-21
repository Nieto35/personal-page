import React from "react";
// STYLES
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "@styles/ContentApi.css";
// CLOSE STYLES
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

import AvatarApi from "@components/AvatarApi";
import DataApi from "@components/DataApi";
import SocialApi from "@components/SocialApi";
import SearchApi from "@components/SearchApi";
const ContentApi = () => {
  const { darkMode, languages } = React.useContext(AppContext);

  return (
    <section className="skill" id="api">
      <Container className="container-api">
        <Row
          className={
            darkMode ? "skill-bx-dark wow zoomIn" : "skill-bx wow zoomIn"
          }
        >
          <SearchApi />
          <AvatarApi />
          <Col xs={12} md={6} xl={8}>
            <Col xs={12} md={12} xl={12}>
              <Row>
                <DataApi />
                <SocialApi />
              </Row>
            </Col>
            <Col xs={12} md={12} xl={12}>
              <h3>2011-01-25T18:44:36Z</h3>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContentApi;
