import LogInFormActionTypes from "./logInForm.types";

const INITIATE_STATE = {
  isLoggingIn: false,
};

const logInFormReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case LogInFormActionTypes.SET_IS_LOGGINGIN_TRUE:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LogInFormActionTypes.SET_IS_LOGGINGIN_FALSE:
      return {
        ...state,
        isLoggingIn: false,
      };
    default:
      return state;
  }
};

export default logInFormReducer;
