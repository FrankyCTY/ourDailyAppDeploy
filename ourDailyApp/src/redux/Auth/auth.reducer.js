import AuthActionTypes from "./auth.types";

import { allocateSignUpAlerts, allocateLogInAlerts } from "./auth.utils";

const INITIATE_STATE = {
  signUpAlert: {
    nameAlerts: [],
    emailAlerts: [],
    passwordAlerts: [],
    genderAlerts: [],
    birthdayAlerts: [],
  },
  logInAlert: {
    emailAlerts: [],
    formAlerts: [],
  },
  updateUserAlert: {},
  // isLogged: false,
  // isCheckingJwt: false,
};

const authReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_SIGNUP_ALERT:
      return {
        ...state,
        signUpAlert: allocateSignUpAlerts(action.tupleAlertArray),
      };
    case AuthActionTypes.SET_LOGIN_ALERT:
      return {
        ...state,
        logInAlert: allocateLogInAlerts(action.tupleAlertArray),
      };
    case AuthActionTypes.CLEAR_LOGIN_ALERT:
    case AuthActionTypes.CLEAR_SIGNUP_ALERT:
      return {
        ...state,
        signUpAlert: INITIATE_STATE.signUpAlert,
        logInAlert: INITIATE_STATE.logInAlert,
      };
    case AuthActionTypes.SET_ISLOGGED_TRUE:
      return {
        ...state,
        isLogged: true,
      };
    // case AuthActionTypes.SET_ISLOGGED_TRUE:
    //   return {
    //     ...state,
    //     isLogged: true,
    //   };
    // case AuthActionTypes.IS_CHECKING_JWT_TRUE:
    //   return {
    //     ...state,
    //     isCheckingJwt: true,
    //   };
    // case AuthActionTypes.IS_CHECKING_JWT_FALSE:
    //   return {
    //     ...state,
    //     isCheckingJwt: true,
    //   };
    default:
      return state;
  }
};

export default authReducer;
