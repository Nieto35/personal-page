import React from "react";
// STYLES
import "react-multi-carousel/lib/styles.css";
import { Col, Image } from "react-bootstrap";
import "@styles/ContentApi.css";
// CLOSE STYLES
// IMAGES
import avatar from "@images/avatar.png";
import { useParams } from "react-router-dom";
// CLOSE IMAGES

const AvatarApi = () => {
  const { search } = useParams();
  console.log(search);
  return (
    <Col xs={12} md={6} xl={4}>
      <div className="content-avatar">
        <Image src={avatar} roundedCircle />
      </div>
      <div>
        <h2>The Octocat</h2>
        <span>@Octocat</span>
      </div>
    </Col>
  );
};

export default AvatarApi;
