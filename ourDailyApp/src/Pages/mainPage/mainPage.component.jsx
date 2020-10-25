import React, { useEffect, useState } from "react";
import S from "./mainPage.style";

import { useDispatch, useSelector } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";
import {setBackgroundLuminosity} from "../../redux/Theme/theme.actions";
import useRouter from "../../hooks/useRouter.hooks";
import { usePalette } from 'react-palette'

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";
import _arrayBufferToBase64 from "../../utils/bufferArrayToBase64";
import Color from "color";

const MainPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userDetails = useSelector((state) => state.auth_P.user);
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const userBg = useSelector(state => state.auth_P.userBg);
  const backgroundLuminosity = useSelector(state => state.theme.backgroundLuminosity);
  
  
  const { data } = usePalette(`${_arrayBufferToBase64(userBg)}`);

  // ============= Life Cycle Hooks =============

  useEffect(() => {
    dispatch(fetchAccessAppBtnsStart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setBackgroundLuminosity((Color(data.darkVibrant).luminosity())));
  }, [data.darkVibrant, dispatch])

  return (
    <>
    <S.MainPageContainer className="MainPage gs-page">
      <S.ImageFrameWrapper>
        <ImageFrame backgroundluminosity={backgroundLuminosity} src={`${_arrayBufferToBase64(userAvatar)}`} halo={true} withExtraText={true}
        onClick={() => {router.push("/settings")}}
        >
          <S.Username backgroundluminosity={backgroundLuminosity}>{userDetails.name}</S.Username>
        </ImageFrame>
      </S.ImageFrameWrapper>
      <S.AccessAppBtnWrapper>
        <MainPageAccessAppWrapper />
      </S.AccessAppBtnWrapper>
    </S.MainPageContainer>
    {/* <S.CustomizedBg background={`url(${_arrayBufferToBase64(userBg)}})`}/> */}
    <S.CustomizedBg>
      <img alt="background-img" className="user-background" src={`${_arrayBufferToBase64(userBg)}`}/>      
    </S.CustomizedBg>
  </>
  );
};

export default React.memo(MainPage);
