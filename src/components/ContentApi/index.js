import React from "react";
// STYLES
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "@styles/ContentApi.css";
// CLOSE STYLES
// IMPORT CONTEXT
import AppContext from "@appContext";
// CLOSE IMPORT CONTEXT

// ROUTER DOM 6
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
//CLOSE ROUTER DOM 6
import getGithubUsers from "@services/Users";

import { useDispatch, useSelector } from "react-redux";

import { setDataUser, setLoading } from "@actions/action";

import AvatarApi from "@components/AvatarApi";
import DataApi from "@components/DataApi";
import SocialApi from "@components/SocialApi";
import SearchApi from "@components/SearchApi";
const ContentApi = () => {
  const user = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const { darkMode, languages } = React.useContext(AppContext);
  const [searchInput, setSearchInput] = React.useState("");
  const navigate = useNavigate();
  const { search } = useParams();

  const buttonNavigate = () => {
    navigate(searchInput);
  };

  React.useEffect(() => {
    const gettinUser = async (user) => {
      dispatch(setLoading(true));
      const userRes = await getGithubUsers(user);
      dispatch(setDataUser(userRes));
      dispatch(setLoading(false));
    };

    if (search) {
      setSearchInput(search);
      gettinUser(search);
    } else {
      gettinUser("octocat");
    }
  }, []);
  return (
    <section className="skill" id="api">
      <Container className="container-api">
        <Row
          className={
            darkMode ? "skill-bx-dark wow zoomIn" : "skill-bx wow zoomIn"
          }
        >
          <SearchApi
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            buttonNavigate={buttonNavigate}
          />
          <AvatarApi />
          <Col xs={12} md={6} xl={8}>
            <Col xs={12} md={12} xl={12}>
              <Row>
                <DataApi />
                <SocialApi />
              </Row>
            </Col>
            <Col xs={12} md={12} xl={12}>
              <h3>{user.created_at}</h3>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContentApi;
