import React, { useEffect } from "react";
import S from "./RoutePath.style";

import { ReactComponent as ToSvg } from "../../assets/svg/to.svg";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectPage,
  selectDetails,
} from "../../redux/routePath/routePath.selectors";

const RoutePath = ({ selectPage, selectDetails, history }) => {
  useEffect(() => {
  }, []);
  const routerTextRender = (
    prevRoute,
    currentRoute,
    linkToPrevRoute,
    iconClassName
  ) => {
    return (
      <S.RouteText>
        <S.PrevLink
          className="prev-link"
          onClick={() => history.push(linkToPrevRoute)}
        >
          {prevRoute}
        </S.PrevLink>
        <ToSvg
          style={{
            fontSize: "clamp(.6rem, .9vw, .9rem)",
            marginRight: ".5em",
          }}
        />
        <S.CurrentLoc>
          {currentRoute}
          <S.Icon className={iconClassName}></S.Icon>
        </S.CurrentLoc>
      </S.RouteText>
    );
  };

  return (
    <S.RouteContainer>
      {selectPage === "shop" &&
        routerTextRender(
          "HOME",
          "SHOP",
          "/main",
          "iconfont icon-icon_yingyongguanli"
        )}
      {selectPage === "wishlist" &&
        routerTextRender("HOME", "WISHLIST", "/main", "iconfont icon-wish")}
      {selectPage === "cart" &&
        routerTextRender("HOME", "WISHLIST", "/main", "iconfont icon-cart")}
      {selectPage === "applicationDetails" &&
        routerTextRender("SHOP", selectDetails.title.toUpperCase(), "/shop")}
    </S.RouteContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  selectPage,
  selectDetails,
});

export default withRouter(connect(mapStateToProps)(RoutePath));
