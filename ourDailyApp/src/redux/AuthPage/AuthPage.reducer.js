import AuthPageActionTypes from "./AuthPage.types";

const INITIATE_STATE = {
  authPage: "",
};

const AuthPageReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case AuthPageActionTypes.AUTH_PAGE_CHANGE:
      return {
        ...state,
        authPage: action.payload,
      };
    default:
      return state;
  }
};

export default AuthPageReducer;
