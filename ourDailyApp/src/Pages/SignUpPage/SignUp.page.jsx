import React from "react";
import S from "./SignUp.style";

import OauthBtn from "../../Components/Molecules/Buttons/OauthBtn/OauthBtn.component";
import { useSelector } from "react-redux";

import OauthBtnRounded from "../../Components/Molecules/Buttons/OauthBtnRounded/OauthBtnRounded.component";
import GoogleAuthBtn from "../../Components/Molecules/Buttons/GoogleAuthBtn.component";
import SignUpForm from "../../Containers/SignUpForm.container";
import UploadAvatarContainer from "../../Containers/UploadAvatar/UploadAvatar.container";

import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

import { useMediaQuery } from "react-responsive";

const SignUpPage = () => {
  const currentAuthPage = useSelector((state) => state.authPage.authPage);

  const mq_IsTallScreen = useMediaQuery({ query: "(min-device-height: 740px" });

  // useEffect(() => {
  //   dispatch(changeAuthPage("signup"));
  // }, [dispatch]);

  return currentAuthPage === "uploadAvatar" ? (
    <UploadAvatarContainer />
  ) : (
    <S.SignUpPageContainer
      className={`signup ${
        mq_IsTallScreen ? "mq_IsTallScreen" : ""
      } S_LogInPageContent`}
      styled_authPage={"signup"}
      mq_IsTallScreen={mq_IsTallScreen}
    >
      <SignUpForm />

      {/* // =================== OR Seperate Line ====================== */}
      <S.Or mq_IsTallScreen={mq_IsTallScreen}>OR</S.Or>
      {/* // ============== Oauth Buttons wrapper==============  */}
      <S.OauthBtnsWrapper mq_IsTallScreen={mq_IsTallScreen}>
        {mq_IsTallScreen ? (
          <>
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
            <OauthBtn
              SvgComponent={FacebookSvg}
              mq_IsTallScreen={mq_IsTallScreen}
            >
              Facebook
            </OauthBtn>
            <OauthBtn SvgComponent={AppleSvg} mq_IsTallScreen={mq_IsTallScreen}>
              Apple
            </OauthBtn>
          </>
        ) : (
          <React.Fragment>
            <GoogleAuthBtn
              renderBtn={(onClick, disabled, SvgComponent, children) => (
                <OauthBtnRounded
                  SvgComponent={SvgComponent}
                  onClick={onClick}
                  disabled={disabled}
                >
                  google
                </OauthBtnRounded>
              )}
            />
            <OauthBtnRounded
              SvgComponent={FacebookSvg}
              mq_IsTallScreen={mq_IsTallScreen}
            >
              Facebook
            </OauthBtnRounded>
            <OauthBtnRounded
              SvgComponent={AppleSvg}
              mq_IsTallScreen={mq_IsTallScreen}
            >
              Apple
            </OauthBtnRounded>
          </React.Fragment>
        )}
      </S.OauthBtnsWrapper>
    </S.SignUpPageContainer>
  );
};

export default SignUpPage;
