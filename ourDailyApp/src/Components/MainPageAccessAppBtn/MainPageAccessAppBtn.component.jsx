import React from "react";
import S from "./MainPageAccessAppBtn.style";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const MainPageAccessAppBtn = ({ name, route, img, hasBorder, staggerIndex=1, isIcon=false, iconClassName=""}) => {

  console.log({name})
  return (
    <Link to={`/${route}`} className={`link`}>
      <S.ApplicationItemContainer
        className="application-item"
        stagger={(staggerIndex + 1) * 0.1}
      >
     { isIcon ? <i className={`iconfont ${iconClassName} text-4xl`}></i> : 
     
     <S.Image
          src={`${img}`}
          loading="lazy"
          className={`${hasBorder ? "border" : ""}`}
        />}
        <S.AppLinkText className="link-text">{name}</S.AppLinkText>
      </S.ApplicationItemContainer>
    </Link>
  );
};

MainPageAccessAppBtn.propTypes = {
  app: PropTypes.object.isRequired,
};

export default MainPageAccessAppBtn;
