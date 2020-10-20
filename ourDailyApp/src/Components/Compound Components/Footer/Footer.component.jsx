import React from "react";
import S from "./styles/Footer.style";

export default function Footer({ children, ...otherProps }) {
  return <S.Background {...otherProps}>{children}</S.Background>;
}

Footer.Container = function FooterContainer({ children, ...otherProps }) {
  return <S.Container {...otherProps}>{children}</S.Container>;
};

Footer.Row = function Row({ children, ...otherProps }) {
  return <S.Row {...otherProps}>{children}</S.Row>;
};

Footer.Column = function Column({ children, ...otherProps }) {
  return <S.Column {...otherProps}>{children}</S.Column>;
};

Footer.Group = function Group({ children, ...otherProps }) {
  return <S.Group {...otherProps}>{children}</S.Group>;
};

Footer.ToolsWrapper = function ToolsWrapper({ children, ...otherProps }) {
  return <S.ToolsWrapper {...otherProps}>{children}</S.ToolsWrapper>;
};

Footer.DecoSpan = function Group({ ...otherProps }) {
  return <S.DecoSpan {...otherProps}>Built with</S.DecoSpan>;
};

Footer.Logo = function Logo({ children, ...otherProps }) {
  return <S.Logo {...otherProps}>{children}</S.Logo>;
};

Footer.LogoLink = function LogoSpan({ children, ...otherProps }) {
  return <S.LogoLink {...otherProps}>{children}</S.LogoLink>;
};

Footer.ColumnTitle = function ColumnTitle({ children, ...otherProps }) {
  return <S.ColumnTitle {...otherProps}>{children}</S.ColumnTitle>;
};

Footer.Link = function Link({ children, ...otherProps }) {
  return <S.Link {...otherProps}>{children}</S.Link>;
};
