import React from "react";
// STYLES
import "react-multi-carousel/lib/styles.css";
import { Col, Image } from "react-bootstrap";
import "@styles/ContentApi.css";
// CLOSE STYLES
// IMAGES
import avatar from "@images/avatar.png";
// CLOSE IMAGES
import { useSelector } from "react-redux";
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AvatarApi = () => {
  const { darkMode, languages } = React.useContext(AppContext);
  const user = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.loading.loading);
  return (
    <Col xs={12} md={6} xl={4}>
      <div className="content-avatar">
        {loading ? (
          <Skeleton
            className={
              darkMode
                ? "created_at-loading-dark circle"
                : "created_at-loading circle"
            }
          />
        ) : (
          <Image
            src={user.login == "octocat" ? avatar : user.avatar_url}
            roundedCircle
          />
        )}
      </div>
      <div>
        <h2>
          {loading ? (
            <Skeleton
              className={
                darkMode ? "created_at-loading-dark" : "created_at-loading"
              }
            />
          ) : user.name ? (
            user.name
          ) : (
            "Not available"
          )}
        </h2>
        <span>
          {loading ? (
            <Skeleton
              className={
                darkMode ? "created_at-loading-dark" : "created_at-loading"
              }
            />
          ) : (
            `@${user.login}`
          )}
        </span>
      </div>
    </Col>
  );
};

export default AvatarApi;
