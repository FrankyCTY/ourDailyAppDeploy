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
  updateUserAlert: {}
};

const authReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_SIGNUP_ALERT:
      return {
        ...state,
        signUpAlert: allocateSignUpAlerts(action.alert),
      };
    case AuthActionTypes.SET_LOGIN_ALERT:
      return {
        ...state,
        logInAlert: allocateLogInAlerts(action.alert),
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
    case AuthActionTypes.SET_USER_DETAILS:
      return {
        ...state,
        isLogged: true,
        user: action.user,
      };
    default:
      return state;
  }
};

export default authReducer;
