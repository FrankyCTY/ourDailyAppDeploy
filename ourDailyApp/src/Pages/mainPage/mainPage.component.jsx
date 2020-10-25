import React, { useEffect } from "react";
import S from "./mainPage.style";

import { useDispatch, useSelector } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";
import useRouter from "../../hooks/useRouter.hooks";

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";
import _arrayBufferToBase64 from "../../utils/bufferArrayToBase64";

const MainPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userDetails = useSelector((state) => state.auth_P.user);
  const userAvatar = useSelector(state => state.auth_P.userAvatar);
  const userBg = useSelector(state => state.auth_P.userBg);

  // ============= Life Cycle Hooks =============

  useEffect(() => {
    dispatch(fetchAccessAppBtnsStart());
  }, [dispatch]);
  return (
    <>
    <S.MainPageContainer className="MainPage gs-page">
      <S.ImageFrameWrapper>
        <ImageFrame src={`${_arrayBufferToBase64(userAvatar)}`} halo={true} withExtraText={true}
        onClick={() => {router.push("/settings")}}
        >
          {userDetails.name}
        </ImageFrame>
      </S.ImageFrameWrapper>
      <S.AccessAppBtnWrapper>
        <MainPageAccessAppWrapper />
      </S.AccessAppBtnWrapper>
    </S.MainPageContainer>
    {/* <S.CustomizedBg background={`url(${_arrayBufferToBase64(userBg)}})`}/> */}
    <S.CustomizedBg>
      <img alt="background-img" src={`${_arrayBufferToBase64(userBg)}`}/>      
    </S.CustomizedBg>
  </>
  );
};

export default React.memo(MainPage);
