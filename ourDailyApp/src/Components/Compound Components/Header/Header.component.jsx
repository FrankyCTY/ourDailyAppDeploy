import React from "react";
import S from "./styles/Header.styles";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";

import { changeAuthPage } from "../../../redux/AuthPage/AuthPage.actions";

export default function Header({ children, ...restProps }) {
  return <S.Background {...restProps}>{children}</S.Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <S.Frame {...restProps}>{children}</S.Frame>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <S.Group {...restProps}>{children}</S.Group>;
};

Header.Hero = function HeaderHero({ children, ...restProps }) {
  const width_under_850 = useMediaQuery({ query: "(max-width: 850px)" });
  const width_under_650 = useMediaQuery({ query: "(max-width: 650px)" });

  const dispatch = useDispatch();

  return (
    <S.Hero
      {...restProps}
      style={{
        gridColumn: "2",
      }}
    >
      <S.HeroTextWrapper>
        <S.Title>Explore the applications we have for you</S.Title>
        <S.Subtitle>Make your life easier</S.Subtitle>
        <S.Text>
          Have fun with the games and reduce your workload with our applications.
        </S.Text>
        <S.HeroButton
          to="/auth/login"
          onClick={() => {
            dispatch(changeAuthPage("login"));
          }}
        >
          Get Started
        </S.HeroButton>
      </S.HeroTextWrapper>
      {!width_under_650 && (
        <S.Group
          style={{
            flexBasis: "50%",
            position: "relative",
          }}
        >
          <S.HeroImage
            src="/images/assets/hero.png"
            alt="a woman using mobile"
            className={`${width_under_850 ? "translucent" : ""}`}
          />
        </S.Group>
      )}

      {children}
    </S.Hero>
  );
};

Header.Logo = function HeaderFrame({ ...restProps }) {
  return <S.Logo {...restProps} />;
};

Header.ToSectionSpan = function HeaderToSectionSpan({
  children,
  ...restProps
}) {
  return <S.ToSectionSpan {...restProps}>{children}</S.ToSectionSpan>;
};

Header.LinkButton = function HeaderLinkButton({ children, ...restProps }) {
  return <S.LinkButton {...restProps}>{children}</S.LinkButton>;
};

Header.DropDownTogglerWrapper = function HeaderDropDownTogglerWrapper({
  children,
  ...restProps
}) {
  return (
    <S.DropDownTogglerWrapper {...restProps}>
      {children}
    </S.DropDownTogglerWrapper>
  );
};

Header.DropDownToggler = function HeaderDropDownToggler({ ...restProps }) {
  return <S.DropDownToggler {...restProps} />;
};

Header.DropDownMenu = function HeaderDropDownMenu({ children, ...restProps }) {
  return (
    <S.DropDownMenu {...restProps}>
      <S.ul>{children}</S.ul>
    </S.DropDownMenu>
  );
};

Header.DropDownItem = function HeaderDropDownItem({ children, ...restProps }) {
  return <S.DropDownItem {...restProps}>{children}</S.DropDownItem>;
};
