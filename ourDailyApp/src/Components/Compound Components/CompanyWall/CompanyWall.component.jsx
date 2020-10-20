import React from "react";
import S from "./styles/CompanyWall.style";

export default function CompanyWall({ children, ...otherProps }) {
  return <S.Container {...otherProps}>{children}</S.Container>;
}

CompanyWall.RowOne = function CompanyWallRowOne({ children, ...otherProps }) {
  return <S.RowOne {...otherProps}>{children}</S.RowOne>;
};

CompanyWall.RowTwo = function CompanyWallRowTwo({ children, ...otherProps }) {
  return <S.RowTwo {...otherProps}>{children}</S.RowTwo>;
};

CompanyWall.Image = function CompanyWallImage({ ...otherProps }) {
  return <S.Image {...otherProps} />;
};

CompanyWall.PlaceHolderDiv = function CompanyPlaceHolderDiv({ ...otherProps }) {
  return <S.PlaceHolderDiv {...otherProps} />;
};
