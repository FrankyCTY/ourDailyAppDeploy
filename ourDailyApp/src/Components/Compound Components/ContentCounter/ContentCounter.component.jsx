import React from "react";
import S from "./styles/ContentCounter.style";

export default function ContentCounter({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
}

ContentCounter.CompanyWall = function CompanyWall({ children, ...otherProps }) {
  return <S.WallContainer {...otherProps}>{children}</S.WallContainer>;
};

ContentCounter.WallRowOne = function CompanyWallRowOne({
  children,
  ...otherProps
}) {
  return <S.WallRowOne {...otherProps}>{children}</S.WallRowOne>;
};

ContentCounter.WallRowTwo = function CompanyWallRowTwo({
  children,
  ...otherProps
}) {
  return <S.WallRowTwo {...otherProps}>{children}</S.WallRowTwo>;
};

ContentCounter.WallImage = function CompanyWallImage({ ...otherProps }) {
  return <S.WallImage {...otherProps} />;
};

ContentCounter.WallPlaceHolderDiv = function CompanyPlaceHolderDiv({
  children,
  ...otherProps
}) {
  return (
    <S.WallPlaceHolderDiv {...otherProps}>{children}</S.WallPlaceHolderDiv>
  );
};

ContentCounter.Card = function ContentCounter({ children, ...restProps }) {
  return <S.CardContainer {...restProps}>{children}</S.CardContainer>;
};

ContentCounter.CardPane = function ContentCounterPane({
  children,
  ...restProps
}) {
  return <S.CardPane {...restProps}>{children}</S.CardPane>;
};

ContentCounter.CardIcon = function ContentCounterIcon({ ...restProps }) {
  return <S.CardIcon {...restProps} />;
};

ContentCounter.CardNumber = function ContentCounterNumber({
  children,
  ...restProps
}) {
  return <S.CardNumber {...restProps}>{children}</S.CardNumber>;
};

ContentCounter.CardName = function ContentCounterName({
  children,
  ...restProps
}) {
  return <S.CardName {...restProps}>{children}</S.CardName>;
};

ContentCounter.TextAndCardWrapper = function TextAndCardWrapper({
  children,
  ...restProps
}) {
  return <S.TextAndCardWrapper {...restProps}>{children}</S.TextAndCardWrapper>;
};
