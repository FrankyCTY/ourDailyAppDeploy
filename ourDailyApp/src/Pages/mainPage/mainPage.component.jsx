import React, { useEffect, useState } from "react";
import S from "./mainPage.style";

import { useDispatch, useSelector } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";
import {setBackgroundLuminosity} from "../../redux/Theme/theme.actions";
import UserActions from "../../redux/User/user.actions";
import useRouter from "../../hooks/useRouter.hooks";
import { usePalette } from 'react-palette';

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";
import _arrayBufferToBase64 from "../../utils/bufferArrayToBase64";
import Color from "color";

const MainPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();


  const userDetails = useSelector((state) => state.auth_P.user);
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const userBg = useSelector(state => state.theme.background);
  // const userBg = useSelector(state => state.auth_P.userBg);
  // const [userBg, setUserBg] = useState("default");
  // const backgroundLuminosity = useSelector(state => state.theme.backgroundLuminosity);
  const backgroundLuminosity = "";
  
  
  const { data } = usePalette(`${_arrayBufferToBase64(userBg)}`);

  // ============= Life Cycle Hooks =============

  useEffect(() => {
    dispatch(fetchAccessAppBtnsStart());
    

    // getFromS3();

    // get MainPage Background Image
    // dispatch(UserActions.getUserBackgroundStart((bgBuffer) => {setUserBg(bgBuffer)}));
    // dispatch(UserActions.getUserBackgroundStart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setBackgroundLuminosity((Color(data.darkVibrant).luminosity())));
  }, [data.darkVibrant, dispatch])

  return (
    <>
    <S.MainPageContainer className="MainPage gs-page">
      <S.ImageFrameWrapper>
        <ImageFrame backgroundluminosity={backgroundLuminosity} src={_arrayBufferToBase64(userAvatar)} halo={true} withExtraText={true}
        onClick={() => {router.push("/settings")}}
        >
          <S.Username backgroundluminosity={backgroundLuminosity}>{userDetails.name}</S.Username>
        </ImageFrame>
      </S.ImageFrameWrapper>
      <S.AccessAppBtnWrapper>
        <MainPageAccessAppWrapper />
      </S.AccessAppBtnWrapper>
    </S.MainPageContainer>
    {/* <S.CustomizedBg>
      <img alt="background-img" className="user-background" src={`${_arrayBufferToBase64(userBg)}`}/>      
    </S.CustomizedBg> */}
    {/* {<S.CustomizedBg style={{background: `url(${_arrayBufferToBase64(userBg)})`}}></S.CustomizedBg>} */}
    {<S.CustomizedBg background={`url(${_arrayBufferToBase64(userBg)})`}></S.CustomizedBg>}
  </>
  );
};

export default React.memo(MainPage);
