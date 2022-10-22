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

const DataApi = () => {
  const user = useSelector((state) => state.data);
  return (
    <Col
      xs={12}
      md={6}
      xl={6}
      className="align-items-center content-dates-avatar"
    >
      {/* <div>
                    <p>
                    <FormattedMessage
                        id="skills.Description"
                        defaultMessage="pondre una descripcion despues"
                    />
                    </p>
                </div> */}
      <Row className="align-items-center">
        <Col xl={12} xs={12} className="content-redes">
          <Row className="justify-content-center">
            <Col xl={3} className="align-items-center">
              <ArchiveFill size={30} />
            </Col>
            <Col className="dates-avatar" xl={5}>
              <p>Repository</p>
              <span>{user.public_repos}</span>
            </Col>
          </Row>
        </Col>
        <Col xl={12} xs={4} className="content-redes">
          <Row className="justify-content-center">
            <Col xl={3} className="align-items-center">
              <PersonWorkspace size={30} />
            </Col>
            <Col className="dates-avatar" xl={5}>
              <p>Followers</p>
              <span>{user.followers}</span>
            </Col>
          </Row>
        </Col>
        <Col xl={12} xs={4} className="content-redes">
          <Row className="justify-content-center">
            <Col xl={3} className="align-items-center">
              <PersonBadgeFill size={30} />
            </Col>
            <Col className="dates-avatar" xl={5}>
              <p>Following</p>
              <span>{user.following}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default DataApi;
