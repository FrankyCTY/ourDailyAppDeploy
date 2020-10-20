import React, { useEffect } from "react";
import S from "./LogIn.style";

import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { changeAuthPage } from "../../redux/AuthPage/AuthPage.actions";

import OauthBtn from "../../Components/Molecules/Buttons/OauthBtn/OauthBtn.component";

import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

import LogInForm from "../../Containers/LogInForm.container";
import GoogleAuthBtn from "../../Components/Molecules/Buttons/GoogleAuthBtn.component";

const LogInPage = () => {
  const dispatch = useDispatch();

  const mq_IsTallScreen = useMediaQuery({ query: "(min-device-height: 629px" });

  useEffect(() => {
    dispatch(changeAuthPage("login"));
  }, [dispatch]);
  
  return (
    <S.LogInPageContainer
      className={`login ${
        mq_IsTallScreen ? "mq_IsTallScreen" : ""
      } S_LogInPageContent`}
      styled_authPage="login"
      mq_IsTallScreen={mq_IsTallScreen}
    >
      <LogInForm />
      {/* // ============== Oauth Buttons wrapper============== */}
      <S.OauthBtnsWrapper>
        <GoogleAuthBtn
          renderBtn={(onClick, disabled, SvgComponent, children) => (
            <OauthBtn
              SvgComponent={SvgComponent}
              onClick={onClick}
              disabled={disabled}
            >
              {children}
            </OauthBtn>
          )}
        >
          Google
        </GoogleAuthBtn>
        <OauthBtn SvgComponent={FacebookSvg}>Facebook</OauthBtn>
        <OauthBtn SvgComponent={AppleSvg}>Apple</OauthBtn>
      </S.OauthBtnsWrapper>
    </S.LogInPageContainer>
  );
};

export default LogInPage;
