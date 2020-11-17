import React from "react";
import S from "./mainPage.style";

import { useSelector } from "react-redux";
import useTheme from "../../hooks/useTheme.hooks";
import useRouter from "../../hooks/useRouter.hooks";

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";
import {FloatBtn, Form} from "../../Components/Compound Components";
import _arrayBufferToBase64 from "../../utils/bufferArrayToBase64";
import defaultUser from "../../assets/images/uploadAvatarPage/default.jpg";

const MainPage = () => {
  const router = useRouter();
  const { onThemeChange} = useTheme();


  const userDetails = useSelector((state) => state.auth_P.user);
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const userBg = useSelector(state => state.theme.background);
  const isLogged = useSelector(state => state.auth_P.isLogged);

  const renderImageFrame = () => {
    return isLogged ?
      <S.ImageFrameWrapper>
        <ImageFrame src={_arrayBufferToBase64(userAvatar)} hasHoverEffect={true}
        halo={true} withExtraText={true}
        onClick={() => {router.push("/settings")}}
        >
          <S.Username>{userDetails.name}</S.Username>
        </ImageFrame>
      </S.ImageFrameWrapper>
    : <S.ImageFrameWrapper>
    <ImageFrame src={defaultUser} hasHoverEffect={true}
    halo={true} withExtraText={true}
    onClick={() => {router.push("/settings")}}
    >
      <Form.LogInBtn className="text-orange-100" onClick={() => {
          router.push("/auth");
      }}>Log In Now</Form.LogInBtn>
    </ImageFrame>
  </S.ImageFrameWrapper>
  }

  return (
    <>
    <S.MainPageContainer className="MainPage gs-page">
      
      {renderImageFrame()}

      <S.AccessAppBtnWrapper>
        <MainPageAccessAppWrapper/>
      </S.AccessAppBtnWrapper>
    </S.MainPageContainer>
    {<S.CustomizedBg background={`url(${_arrayBufferToBase64(userBg)})`}></S.CustomizedBg>}
        <FloatBtn>
          {/* <Tooltip title="Change Theme" placement="top"> */}
            {/* <i> */}
              <FloatBtn.FloatButton bg={"#0059A6"} onClick={onThemeChange}>
                  <FloatBtn.BtnIcon className="iconfont icon-DarkTheme"/>
              </FloatBtn.FloatButton>
            {/* </i> */}
          {/* </Tooltip> */}
        </FloatBtn>
  </>
  );
};

export default React.memo(MainPage);
