import React from "react";
import S from "./AppStoreCardPreloader.style";

const AppStoreCardPreloader = () => (
  <S.LoadingCardContainer className={`card`}>
    <S.LoadingImgWrapper className="img-loader"></S.LoadingImgWrapper>
    <S.LoadingTitleText className="text-loader"></S.LoadingTitleText>
    <S.LoadingDescriptionText className="text-loader"></S.LoadingDescriptionText>
    <S.LoadingBtnStart className="text-loader"></S.LoadingBtnStart>
  </S.LoadingCardContainer>
);

export default AppStoreCardPreloader;
