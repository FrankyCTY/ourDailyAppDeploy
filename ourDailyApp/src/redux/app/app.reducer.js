import AppActionTypes from "./app.types";

const INITIAL_STATE = {
  applications: null,
  accessAppBtns: null,
  errorMsg: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // ====================== App Description + content =====================
    case AppActionTypes.FETCH_APPLICATIONS_SUCCESS:
      return {
        ...state,
        applications: action.payload,
      };
    case AppActionTypes.FETCH_APPLICATIONS_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };

    // ====================== App Logo items =================

    case AppActionTypes.FETCH_ACCESS_APP_BTN_SUCCESS:
      return {
        ...state,
        accessAppBtns: action.payload,
        errorMsg: null,
      };
    default:
      return state;
  }
};

export default appReducer;
