import React, { useEffect, useState } from "react";
import S from "./mainPage.style";

import { useDispatch, useSelector } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";
import useTheme from "../../hooks/useTheme.hooks";
import useRouter from "../../hooks/useRouter.hooks";

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";
import {FloatBtn} from "../../Components/Compound Components";
import _arrayBufferToBase64 from "../../utils/bufferArrayToBase64";

const MainPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { onThemeChange} = useTheme();


  const userDetails = useSelector((state) => state.auth_P.user);
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const userBg = useSelector(state => state.theme.background);
  // ============= Life Cycle Hooks =============

  useEffect(() => {
    dispatch(fetchAccessAppBtnsStart());
  }, [dispatch]);


  return (
    <>
    <S.MainPageContainer className="MainPage gs-page">
      <S.ImageFrameWrapper>
        <ImageFrame src={_arrayBufferToBase64(userAvatar)} hasHoverEffect={true}
        halo={true} withExtraText={true}
        onClick={() => {router.push("/settings")}}
        >
          <S.Username>{userDetails.name}</S.Username>
        </ImageFrame>
      </S.ImageFrameWrapper>
      <S.AccessAppBtnWrapper>
        <MainPageAccessAppWrapper />
      </S.AccessAppBtnWrapper>
    </S.MainPageContainer>
    {<S.CustomizedBg background={`url(${_arrayBufferToBase64(userBg)})`}></S.CustomizedBg>}
    <FloatBtn className="bottom-22% xl:bottom-18%">
      <FloatBtn.FloatButton bg={"#0059A6"} onClick={onThemeChange}>
          <FloatBtn.BtnIcon className="iconfont icon-DarkTheme"/>
      </FloatBtn.FloatButton>
    </FloatBtn>
  </>
  );
};

export default React.memo(MainPage);
