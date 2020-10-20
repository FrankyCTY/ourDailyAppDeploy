import React from "react";
import S from "./SignUpOrganism.style";

// import SignUpForm from "../Forms/SignUpForm/SignUpForm.component";
import OauthBtn from "../Molecules/Buttons/OauthBtn/OauthBtn.component";

import OauthBtnRounded from "../Molecules/Buttons/OauthBtnRounded/OauthBtnRounded.component";
import GoogleAuthBtn from "../Molecules/Buttons/GoogleAuthBtn.component";
import SignUpForm from "../../Containers/SignUpForm.container";

import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

import PropTypes from "prop-types";

const SignUpOrganism = ({ mq_IsTallScreen }) => {
  return (
    <>
      {/* // ============== Log In Form wrapper==============  */}
      <SignUpForm />
      {/* // =================== OR Seperate Line ====================== */}
      <S.Or mq_IsTallScreen={mq_IsTallScreen}>OR</S.Or>
      {/* // ============== Oauth Buttons wrapper==============  */}
      <S.OauthBtnsWrapper mq_IsTallScreen={mq_IsTallScreen}>
        {mq_IsTallScreen ? (
          <React.Fragment>
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
          </React.Fragment>
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
    </>
  );
};

SignUpOrganism.propTypes = {
  mq_IsTallScreen: PropTypes.bool.isRequired,
};

export default SignUpOrganism;
