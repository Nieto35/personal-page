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
import { useSelector } from "react-redux";

const AvatarApi = () => {
  const user = useSelector((state) => state.data.data);
  return (
    <Col xs={12} md={6} xl={4}>
      <div className="content-avatar">
        <Image
          src={user.login == "octocat" ? avatar : user.avatar_url}
          roundedCircle
        />
      </div>
      <div>
        <h2>{user.name ? user.name : "Not available"}</h2>
        <span>@{user.login}</span>
      </div>
    </Col>
  );
};

export default AvatarApi;
