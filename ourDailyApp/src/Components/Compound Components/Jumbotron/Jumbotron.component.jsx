import React from "react";
import S from "./styles/Jumbotron.styles";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <S.Item {...restProps}>
      <S.Inner direction={direction}>{children}</S.Inner>
    </S.Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

Jumbotron.SubTitle = function JunbotronSubTitle({ children, ...restProps }) {
  return <S.SubTitle {...restProps}>{children}</S.SubTitle>;
};

Jumbotron.ImagePane = function JumbotronImagePane({ children, ...restProps }) {
  return <S.ImagePane {...restProps}>{children}</S.ImagePane>;
};

Jumbotron.TextPane = function JumbotronTextPane({ children, ...restProps }) {
  return <S.TextPane {...restProps}>{children}</S.TextPane>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <S.Image {...restProps} />;
};

Jumbotron.EndingSpan = function JumbotronEndingSpan({
  children,
  ...restProps
}) {
  return <S.EndingSpan {...restProps}>{children}</S.EndingSpan>;
};

Jumbotron.linkBtn = function JumbotronLinkBtn({ children, ...restProps }) {
  return <S.LinkBtn {...restProps}>{children}</S.LinkBtn>;
};
