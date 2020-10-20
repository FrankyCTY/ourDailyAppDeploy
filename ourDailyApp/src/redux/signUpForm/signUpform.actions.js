import SignUpFormActionTypes from "./signUpForm.types";

export const setIsSigningUpTRUE = () => ({
  type: SignUpFormActionTypes.SET_IS_SIGNINGUP_TRUE,
});

export const setIsSigningUpFALSE = () => ({
  type: SignUpFormActionTypes.SET_IS_SIGNINGUP_FALSE,
});
