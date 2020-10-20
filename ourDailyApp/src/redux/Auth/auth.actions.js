import AuthActionTypes from "./auth.types";

export const googleAuthorizationSuccess = (authorizeServerRes) => ({
  type: AuthActionTypes.GOOGLE_AUTHORIZATION_SUCCESS,
  authorizeServerRes,
});

export const emailSignInStart = (logInDetails) => ({
  type: AuthActionTypes.EMAIL_SIGN_IN_START,
  logInDetails,
});

export const signInSuccess = (user) => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error, targetComponent) => ({
  type: AuthActionTypes.SIGN_IN_FAILURE,
  error,
  targetComponent,
});

export const checkAuthSession = () => ({
  type: AuthActionTypes.CHECK_AUTH_SESSION,
});


export const signOut = () => ({
  type: AuthActionTypes.SIGN_OUT,
});
export const signOutStart = () => ({
  type: AuthActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: AuthActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = () => ({
  type: AuthActionTypes.SIGN_OUT_FAILURE,
});

export const signUpStart = (signUpDetails) => ({
  type: AuthActionTypes.SIGN_UP_START,
  signUpDetails,
});

export const signUpSuccess = (email, password) => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  email,
  password,
});

export const signUpFailure = (error, targetComponent) => ({
  type: AuthActionTypes.SIGN_UP_FAILURE,
  error,
  targetComponent,
});

export const setSignUpAlert = (alert) => ({
  type: AuthActionTypes.SET_SIGNUP_ALERT,
  alert,
});

export const setLogInAlert = (alert) => ({
  type: AuthActionTypes.SET_LOGIN_ALERT,
  alert,
});

export const clearSignUpAlert = () => ({
  type: AuthActionTypes.CLEAR_SIGNUP_ALERT,
});

export const clearLogInAlert = () => ({
  type: AuthActionTypes.CLEAR_LOGIN_ALERT,
});

export const setIsLoggedTrue = () => ({
  type: AuthActionTypes.SET_ISLOGGED_TRUE,
});

export const setUserDetails = (userDetails) => ({
  type: AuthActionTypes.SET_USER_DETAILS,
  user: userDetails,
});

export const setUserAvatar = (imgBuffer) => ({
  type: AuthActionTypes.SET_USER_AVATAR,
  imgBuffer,
})
