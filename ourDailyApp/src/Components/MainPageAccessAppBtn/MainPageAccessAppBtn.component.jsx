import React from "react";
import S from "./MainPageAccessAppBtn.style";

import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

import PropTypes from "prop-types";

const MainPageAccessAppBtn = ({ app, index }) => {
  const backgroundLuminosity = useSelector(state => state.theme.backgroundLuminosity);
 

  const { name, route, imageUrl, border } = app;
  return (
    <Link to={`/${route}`} className={`link`}>
      <S.ApplicationItemContainer
        className="application-item"
        stagger={(index + 1) * 0.1}
      >
        <S.Image
          src={`${imageUrl}.jpeg`}
          loading="lazy"
          backgroundLuminosity={backgroundLuminosity}
          className={`${border ? "border" : ""}`}
        />
        <S.AppLinkText backgroundLuminosity={backgroundLuminosity} className="link-text">{name}</S.AppLinkText>
      </S.ApplicationItemContainer>
    </Link>
  );
};

MainPageAccessAppBtn.propTypes = {
  app: PropTypes.object.isRequired,
};

export default MainPageAccessAppBtn;
