import React from "react";

import GoogleLogin from "react-google-login";

import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";

import { googleAuthorizationSuccess } from "../../redux/Auth/auth.actions";

import { useDispatch } from "react-redux";

const WithGoogleAuth = ({
  WrappedBtnComponent,
  children,
  onAuthorizationSuccess,
  ...otherProps
}) => {
  const responseError = async (response) => {};

  const dispatch = useDispatch();

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
      render={(renderProps) => (
        <WrappedBtnComponent
          SvgComponent={GoogleSvg}
          {...otherProps}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          {children}
        </WrappedBtnComponent>
      )}
      onSuccess={(authenticationRes) =>
        dispatch(googleAuthorizationSuccess(authenticationRes))
      }
      onFailure={responseError}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default WithGoogleAuth;
