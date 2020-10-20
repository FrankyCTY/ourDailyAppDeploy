import React from "react";
import S from "./styles/Typography.style";

export default function Typography({ children }) {
  return <>{children}</>;
}

Typography.SectionText = function SectionText({ children, ...restProps }) {
  return <S.SectionText {...restProps}>{children}</S.SectionText>;
};

Typography.SectionTitle = function SectionTitle({ children, ...restProps }) {
  return <S.sectionTitle {...restProps}>{children}</S.sectionTitle>;
};

Typography.SectionSubtitle = function SectionSubtitle({
  children,
  ...restProps
}) {
  return <S.sectionSubtitle {...restProps}>{children}</S.sectionSubtitle>;
};
