import SignUpFormActionTypes from "./signUpForm.types";

const INITIATE_STATE = {
  isSigningUp: false,
};

const signUpFormReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case SignUpFormActionTypes.SET_IS_SIGNINGUP_TRUE:
      return {
        ...state,
        isSigningUp: true,
      };
    case SignUpFormActionTypes.SET_IS_SIGNINGUP_FALSE:
      return {
        ...state,
        isSigningUp: false,
      };
    default:
      return state;
  }
};

export default signUpFormReducer;
