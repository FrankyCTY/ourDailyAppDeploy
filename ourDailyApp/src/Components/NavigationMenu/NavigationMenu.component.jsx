import React, { useState } from "react";

import S from "./NavigationMenu.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { closeNav } from "../../redux/nav/nav.actions";

import NavigationMenuDescription from "../NavigationMenuDescription/NavigationMenuDescription.component";

import PropTypes from "prop-types";

const NavigationMenu = ({ closeNav, navHidden }) => {
  const [hoverNavItem, setHoverNavItem] = useState(null);
  console.log("Nav Menu rendered");
  return (
    <S.NavMenuContainer className={`${!navHidden ? "active" : ""} float-nav`}>
      <S.NavigationList className="float-nav-list">
        <S.NavigationItems>
          <S.NavLink
            onMouseOver={() => {
              setHoverNavItem("appstore");
            }}
            onClick={closeNav}
            to="/shop"
            className="float-nav-item"
          >
            AppStore
          </S.NavLink>
        </S.NavigationItems>
        <S.NavigationItems>
          <S.NavLink
            as="a"
            onMouseOver={() => {
              setHoverNavItem("linkedin");
            }}
            onClick={closeNav}
            href="https://www.linkedin.com/in/franky-tak-yu-chan-18b51518b/"
            className="float-nav-item"
          >
            LinkedIn
          </S.NavLink>
        </S.NavigationItems>
        <S.NavigationItems>
          <S.NavLink
            as="a"
            onMouseOver={() => {
              setHoverNavItem("github");
            }}
            onClick={closeNav}
            href="https://github.com/TakYuChan"
            className="float-nav-item"
          >
            Github
          </S.NavLink>
        </S.NavigationItems>
      </S.NavigationList>

      <NavigationMenuDescription
        hoverNavItem={hoverNavItem}
      ></NavigationMenuDescription>
    </S.NavMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  navHidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  closeNav: () => dispatch(closeNav()),
});

NavigationMenu.propTypes = {
  navHidden: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);
